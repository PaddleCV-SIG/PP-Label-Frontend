import React, { useEffect, useState } from 'react';
import styles from './index.less';
import PPLabelPageContainer from '@/components/PPLabelPage/PPLabelPageContainer';
import PPToolBarButton from '@/components/PPLabelPage/PPToolBarButton';
import PPToolBar from '@/components/PPLabelPage/PPToolBar';
import PPLabelList from '@/components/PPLabelPage/PPLabelList';
import PPStage from '@/components/PPLabelPage/PPStage';
import PPAnnotationList from '@/components/PPLabelPage/PPAnnotationList';
import { Button, Progress } from 'antd';
import { useIntl } from 'umi';

export type ToolType = 'polygon' | 'mover' | undefined;

const MOST_HISTORY_STEPS = 40;

type HistoryType = {
  index: number;
  items: {
    currentAnnotation?: Annotation<any>;
    annotations: Annotation<any>[];
  }[];
};

const Page: React.FC = () => {
  const [currentTool, setCurrentTool] = useState<ToolType>(undefined);
  const [currentLabel, setCurrentLabel] = useState<Label>({ color: '', name: '' });
  const [currentAnnotation, setCurrentAnnotationRaw] = useState<Annotation<any>>();
  const [annotations, setAnnotations] = useState<Annotation<any>[]>([]);
  const [scale, setScaleRaw] = useState(1);
  const setScale = (size: number) => {
    if (!size) setScaleRaw(1);
    if (size < 0.1 || size > 3.0) setScaleRaw(1);
    else setScaleRaw(size);
  };

  const setCurrentAnnotation = (anno?: Annotation<any>) => {
    setCurrentAnnotationRaw(anno);
    if (anno?.label) setCurrentLabel(anno.label);
  };

  useEffect(() => {
    localStorage.removeItem('history');
    recordHistory([]);
  }, []);

  function recordHistory(annos: Annotation<any>[], anno?: Annotation<any>) {
    const historyStr = localStorage.getItem('history');
    const history: HistoryType = historyStr ? JSON.parse(historyStr) : { index: -1, items: [] };
    const newItem = { currentAnnotation: anno, annotations: annos };
    if (JSON.stringify(history.items[history.index]) == JSON.stringify(newItem)) {
      return;
    }
    const earliestIndex =
      history.index > MOST_HISTORY_STEPS ? history.index - MOST_HISTORY_STEPS : 0;
    const itemsToKeep = history.items.splice(
      earliestIndex,
      history.index == 0 ? 1 : history.index + 1,
    );
    history.items = itemsToKeep.concat([newItem]);
    if (history.index <= MOST_HISTORY_STEPS) history.index++;
    else history.index = MOST_HISTORY_STEPS + 1;
    localStorage.setItem('history', JSON.stringify(history));
  }

  const forwardHistory = () => {
    const historyStr = localStorage.getItem('history');
    if (!historyStr) {
      return;
    }
    const history: HistoryType = JSON.parse(historyStr);
    if (!history) {
      return;
    }
    if (history.index >= history.items.length - 1) {
      return;
    }
    history.index++;
    localStorage.setItem('history', JSON.stringify(history));
    const item = history.items[history.index];
    setCurrentAnnotationRaw(item.currentAnnotation);
    setAnnotations(item.annotations);
  };

  const backwardHistory = () => {
    const historyStr = localStorage.getItem('history');
    if (!historyStr) return;
    const history: HistoryType = JSON.parse(historyStr);
    if (!history || !history.index) return;
    if (history.index <= 0) return; // already the latest
    history.index--;
    localStorage.setItem('history', JSON.stringify(history));
    const item = history.items[history.index];
    setCurrentAnnotationRaw(item.currentAnnotation);
    setAnnotations(item.annotations);
  };

  const onAnnotationModify = (annotation: Annotation<any>) => {
    const newAnnos: Annotation<any>[] = [];
    for (let i = 0; i < annotations.length; i++) {
      if (annotations[i].annotationId == annotation.annotationId) {
        newAnnos.push(annotation);
      } else {
        newAnnos.push(annotations[i]);
      }
    }
    setCurrentAnnotation(annotation);
    setAnnotations(newAnnos);
  };

  const polygon = drawPolygon({
    currentLabel: currentLabel,
    currentTool: currentTool,
    annotations: annotations,
    currentAnnotation: currentAnnotation,
    onAnnotationAdd: (annotation) => {
      const newAnnos = annotations.concat([annotation]);
      setAnnotations(newAnnos);
      if (!currentAnnotation) setCurrentAnnotation(annotation);
    },
    onAnnotationModify: onAnnotationModify,
    onMouseUp: () => {
      recordHistory(annotations, currentAnnotation);
    },
  });

  const dr = polygon;

  const intl = useIntl();
  const polygonBtn = intl.formatMessage({ id: 'pages.toolBar.polygon' });
  const zoomIn = intl.formatMessage({ id: 'pages.toolBar.zoomIn' });
  const zoomOut = intl.formatMessage({ id: 'pages.toolBar.zoomOut' });
  const move = intl.formatMessage({ id: 'pages.toolBar.move' });
  const unDo = intl.formatMessage({ id: 'pages.toolBar.unDo' });
  const reDo = intl.formatMessage({ id: 'pages.toolBar.reDo' });
  const save = intl.formatMessage({ id: 'pages.toolBar.save' });
  const edit = intl.formatMessage({ id: 'pages.toolBar.edit' });
  const clearMark = intl.formatMessage({ id: 'pages.toolBar.clearMark' });
  const determineOutline = intl.formatMessage({ id: 'pages.toolBar.determineOutline' });
  const divideData = intl.formatMessage({ id: 'pages.toolBar.divideData' });
  const exportBtn = intl.formatMessage({ id: 'pages.toolBar.export' });

  return (
    <PPLabelPageContainer className={styles.key}>
      <PPToolBar>
        <PPToolBarButton
          imgSrc="./pics/buttons/polygon.png"
          active={currentTool == 'polygon'}
          onClick={() => {
            setCurrentTool('polygon');
            setCurrentAnnotation(undefined);
          }}
        >
          {polygonBtn}
        </PPToolBarButton>
        <PPToolBarButton imgSrc="./pics/buttons/edit.png">{edit}</PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/zoom_in.png"
          onClick={() => {
            setScale(scale + 0.1);
          }}
        >
          {zoomIn}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/zoom_out.png"
          onClick={() => {
            setScale(scale - 0.1);
          }}
        >
          {zoomOut}
        </PPToolBarButton>
        <PPToolBarButton imgSrc="./pics/buttons/save.png">{save}</PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/move.png"
          onClick={() => {
            setCurrentTool('mover');
          }}
        >
          {move}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/prev.png"
          onClick={() => {
            backwardHistory();
          }}
        >
          {unDo}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/next.png"
          onClick={() => {
            forwardHistory();
          }}
        >
          {reDo}
        </PPToolBarButton>
        <PPToolBarButton imgSrc="./pics/buttons/clear_mark.png">{clearMark}</PPToolBarButton>
      </PPToolBar>
      <div id="dr" className={styles.mainStage}>
        <div className={styles.draw}>
          <PPStage
            width={document.getElementById('dr')?.clientWidth}
            scale={scale}
            annotations={annotations}
            currentTool={currentTool}
            currentAnnotation={currentAnnotation}
            setCurrentAnnotation={setCurrentAnnotation}
            onAnnotationModify={onAnnotationModify}
            onAnnotationModifyComplete={() => {
              recordHistory(annotations, currentAnnotation);
            }}
            onMouseDown={dr.onMouseDown}
            onMouseMove={dr.onMouseMove}
            onMouseUp={dr.onMouseUp}
            createPolygonFunc={polygon.createElementsFunc}
          />
        </div>
        <div className={styles.pblock}>
          <div className={styles.progress}>
            <Progress percent={50} status="active" />
          </div>
        </div>
      </div>
      <PPToolBar disLoc="right">
        <PPToolBarButton imgSrc="./pics/buttons/data_division.png">{divideData}</PPToolBarButton>
        <PPToolBarButton imgSrc="./pics/buttons/export.png">{exportBtn}</PPToolBarButton>
      </PPToolBar>
      <div className={styles.rightSideBar}>
        <div className={styles.finished}>
          <Button
            style={{ height: 40, fontSize: '0.75rem' }}
            type="primary"
            block
            onClick={() => {
              setCurrentAnnotation(undefined);
            }}
          >
            {determineOutline}
          </Button>
        </div>
        <PPLabelList
          selectedLabel={currentLabel}
          onLabelSelect={(label) => {
            setCurrentLabel(label);
            setCurrentAnnotation(undefined);
          }}
          onLabelModify={() => {}}
          onLabelDelete={() => {}}
          onLabelAdd={() => {}}
        />
        <PPAnnotationList
          selectedAnnotation={currentAnnotation}
          annotations={annotations}
          onAnnotationSelect={(selectedAnno) => {
            if (!selectedAnno?.delete) setCurrentAnnotation(selectedAnno);
          }}
          onAnnotationAdd={() => {}}
          onAnnotationModify={() => {}}
          onAnnotationDelete={(annotation: Annotation<any>) => {
            setAnnotations(annotations.filter((x) => x.annotationId != annotation.annotationId));
            setCurrentAnnotation(undefined);
          }}
        />
      </div>
    </PPLabelPageContainer>
  );
};

export default Page;
