import { Col, Form, Space, Row, Alert } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import PPSegCard from '../PPSegCard';
import { useIntl } from 'umi';

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

  const renderForm = () => (
    <_PPBlock title={orientation} style={{ height: 760, padding: '1.25rem 0' }}>
      <Form form={form} layout="horizontal" size="large" style={{ marginTop: '5.69rem' }}></Form>
    </_PPBlock>
  );

  return (
    <div className={styles.shadow} style={props.style}>
      <div id="left" className={styles.block_l}>
        {step === 0 ? renderOrientation() : renderForm()}
      </div>
      <div id="right" className={styles.block_r}>
        <_PPBlock style={{ height: 760, padding: '0.5rem 0' }}>
          <img src={props.imgSrc} style={{ height: 698, width: 960 }} />
        </_PPBlock>
      </div>
    </div>
  );
};

export default PPSegMode;
