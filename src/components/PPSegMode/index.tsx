import { Col, Form, Space, Row, Alert, Input, Radio, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';
import styles from './index.less';
import PPSegCard from '../PPSegCard';
import { useIntl } from 'umi';
import classNames from 'classnames';

export type _PPCardProps = {
  title?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
};

const _PPBlock: React.FC<_PPCardProps> = (props) => {
  return (
    <div className={styles._ppcard} style={props.style}>
      <Row className={styles.titleRow} style={{ display: props.title ? undefined : 'none' }}>
        <Title className={styles.title}>{props.title}</Title>
      </Row>
      <Row style={{ marginTop: 26 }}>
        <Col
          span={24}
          style={{ paddingLeft: 30, paddingRight: 30, textAlign: 'center', ...props.innerStyle }}
        >
          {props.children}
        </Col>
      </Row>
    </div>
  );
};

export type PPCardProps = {
  title?: string;
  imgSrc?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
};

const PPSegMode: React.FC<PPCardProps> = (props) => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  // 选择方向为-0，数据填写为-1
  const [step, setStep] = useState<0 | 1>(0);
  const [orientation, setOrientation] = useState<string>();

  const note = useIntl().formatMessage({ id: 'component.PPSegMode.note' });
  const general = useIntl().formatMessage({ id: 'component.PPSegMode.general' });
  const medical = useIntl().formatMessage({ id: 'component.PPSegMode.medical' });
  const remoteSensing = useIntl().formatMessage({ id: 'component.PPSegMode.remoteSensing' });
  const changeDetection = useIntl().formatMessage({ id: 'component.PPSegMode.changeDetection' });
  const ok = useIntl().formatMessage({ id: 'component.PPSegMode.ok' });
  const cancel = useIntl().formatMessage({ id: 'component.PPCreater.cancel' });

  /**
   * 配置化页面
   */
  const cfg = {
    width: 140,
    height: 140,
    // hrefPrefix: '?orientation=',
    cards: [
      {
        imgSrc: './pics/seg_mode/un_not_clicked.png',
        title: 'general',
        name: general,
      },
      {
        imgSrc: './pics/seg_mode/md_not_clicked.png',
        title: 'medical',
        name: medical,
      },
      {
        imgSrc: './pics/seg_mode/rs_not_clicked.png',
        title: 'remoteSensing',
        name: remoteSensing,
      },
      {
        imgSrc: './pics/seg_mode/cd_not_clicked.png',
        title: 'changeDetection',
        name: changeDetection,
      },
    ],
  };

  const renderOrientation = () => (
    <_PPBlock title={props.title} style={{ height: 760, padding: '1.25rem 0' }}>
      <Form form={form} layout="horizontal" size="large" style={{ marginTop: '5.69rem' }}>
        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 3,
          }}
        >
          <Space>
            <Alert
              className={styles.info}
              message={note}
              type="info"
              style={{ height: '3.13rem', width: '38.75rem' }}
            />
          </Space>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 3,
          }}
        >
          <Space size={20}>
            {cfg.cards.map((item: any, idx: number) => (
              <PPSegCard
                imgSrc={item.imgSrc}
                width={cfg.width}
                height={cfg.height}
                title={item.title}
                setStep={setStep}
                setOrientation={setOrientation}
                key={idx}
              >
                {item.name}
              </PPSegCard>
            ))}
          </Space>
        </Form.Item>
        {/* ps：这两个按钮可以不要 */}
        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 6,
          }}
        >
          <Button htmlType="button" type="primary" style={{ height: '2.5rem', width: '48%' }} block>
            {ok}
          </Button>
          &nbsp;&nbsp;
          <Button htmlType="button" style={{ height: '2.5rem', width: '48%' }} block>
            {cancel}
          </Button>
        </Form.Item>
      </Form>
    </_PPBlock>
  );

  const renderForm = () => {
    const annotationOptions = [
      { label: '像素级标注', value: '1' },
      { label: '多边形级标注', value: '2' },
    ];

    return (
      <_PPBlock title={orientation} style={{ padding: '1.25rem 0' }}>
        <Form
          form={form2}
          colon={false}
          labelAlign="right"
          labelCol={{ span: 8 }}
          size="large"
          style={{ marginTop: '5.69rem', marginLeft: '5rem' }}
        >
          <Form.Item name="projectName" label="项目名称">
            <Input placeholder="起一个酷酷的项目名称吧" style={{ width: 460 }} />
          </Form.Item>

          <Form.Item name="dataUrl" label="数据地址">
            <Input placeholder="数据地址" style={{ width: 460 }} />
          </Form.Item>

          <Form.Item name="saveUrl" label="保存地址">
            <Input placeholder="保存地址" style={{ width: 460 }} />
          </Form.Item>

          <Form.Item name="datasetDesc" label="数据集描述">
            <Input.TextArea placeholder="数据集描述" style={{ width: 460, resize: 'none' }} />
          </Form.Item>

          <Form.Item name="annotationMode" label="标注模式">
            <Radio.Group
              options={annotationOptions}
              defaultValue="1"
              style={{ textAlign: 'left' }}
            />
          </Form.Item>

          <div className={styles.operation}>
            <Button
              className={classNames({
                [styles.btn]: true,
                [styles.okBtn]: true,
              })}
              type="primary"
            >
              确认
            </Button>

            <Button
              className={classNames({
                [styles.btn]: true,
                [styles.cancelBtn]: true,
              })}
            >
              取消
            </Button>
          </div>
        </Form>

        <style>
          {`
            .ant-form-item-no-colon {
              font-size: 16px;
              color: #333;
            }
            
            /* radio 对齐问题 */
            .ant-form-item-control-input-content {
              display: flex;
            }

            textarea.ant-input {
              max-width: initial;
            }
          `}
        </style>
      </_PPBlock>
    );
  };

  return (
    <div className={styles.shadow} style={{ flex: 1 }}>
      <div className={styles.l}>{step === 0 ? renderOrientation() : renderForm()}</div>

      <div className={styles.r} id="right">
        <div className="img-wrap">
          <img src={props.imgSrc} style={{ height: 700 * 0.5, width: 960 * 0.5 }} />
        </div>
      </div>
    </div>
  );
};

export default PPSegMode;
