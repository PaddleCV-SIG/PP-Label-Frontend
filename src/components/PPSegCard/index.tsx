import { Button } from 'antd';
// import { history } from 'umi';
import React from 'react';
import styles from './index.less';
import { useIntl } from 'umi';

export type MyButtonStyles = {
  width?: number;
  height?: number;
  imgSrc: string;
  href?: string;
  wording?: string;
  title?: string;
  setStep: Function;
  setOrientation: Function;
};

const PPCard: React.FC<MyButtonStyles> = (props) => {
  const title = useIntl().formatMessage({ id: `component.PPSegMode.${props.title}` });

  const handleCardClick = () => {
    props.setStep(1);
    props.setOrientation(title);
  };

  return (
    <div
      className={styles.card}
      style={{ height: '11.25rem', width: props.width }}
      // onClick={() => history.push(props.href ? props.href : '')}
      onClick={handleCardClick}
    >
      <img
        className={styles.thumbnail}
        alt={props.wording || styles.thumbnail}
        src={props.imgSrc}
        style={{ height: props.height, width: props.width }}
      />
      <Button className={styles.button} style={{ width: props.width }}>
        {props.children}
      </Button>
    </div>
  );
};
export default PPCard;
