import React from 'react';
import { Row, Col, Button, Space } from 'antd';
import styles from './index.less';
import PPContainer from '@/components/PPContainer';
import { PlusOutlined } from '@ant-design/icons';
import PPCard from '@/components/PPCard';
import PPBlock from '@/components/PPBlock';
import type { ColumnsType } from 'antd/es/table';
import PPTable from '@/components/PPTable';
import PPButton from '@/components/PPButton';
import { history } from 'umi';

export type ProjectInfo = {
  id: number;
  name: string;
};

const columns: ColumnsType<ProjectInfo> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '72px',
    align: 'center',
    render: (text: string) => <>{text}</>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Actions',
    key: 'id',
    width: '240px',
    render: (text, record) => (
      <Space size="middle">
        <PPButton
          width="90px"
          height="30px"
          color={'rgba(241,162,0,1)'}
          onClick={() => {
            history.push('/label/' + record.id);
          }}
        >
          修改信息
        </PPButton>
        <PPButton width="90px" height="30px" color={'rgba(0,100,248,1)'}>
          去标注
        </PPButton>
      </Space>
    ),
  },
];

const data: ProjectInfo[] = [];

const Welcome: React.FC = () => {
  return (
    <PPContainer>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Button icon={<PlusOutlined />} size="large" id={`${styles.createBtn}`}>
            {/* {intl.formatMessage({ id: 'welcome.createProject' })} */}
            创建项目
          </Button>
        </Col>
      </Row>
      <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
        <Col span={17}>
          <PPBlock title="示例项目" style={{ height: 430 }}>
            <Space size={20}>
              <PPCard imgSrc={'/pics/classification.jpg'}>图像分类标注示例</PPCard>
              <PPCard imgSrc={'/pics/object_detection.jpg'}>目标检测标注示例</PPCard>
              <PPCard imgSrc={'/pics/instance_segmentation.jpg'}>实例分割标注示例</PPCard>
              <PPCard imgSrc={'/pics/semantic_segmentation.jpg'}>语义分割标注示例</PPCard>
              <PPCard imgSrc={'/pics/keypoint_detection.jpg'}>关键点检测标注示例</PPCard>
            </Space>
          </PPBlock>
        </Col>
        <Col span={7}>
          <PPBlock title="模型训练知识" style={{ height: 430 }}>
            <Space direction="vertical" style={{ width: '100%' }} size={10}>
              <Button type="primary" style={{ height: '50px' }} block>
                如何使用 paddleclas 训练
              </Button>
              <Button type="primary" style={{ height: '50px' }} block>
                如何使用 paddledet 训练
              </Button>
              <Button type="primary" style={{ height: '50px' }} block>
                如何使用 paddleseg 训练
              </Button>
              <Button type="primary" style={{ height: '50px' }} block>
                如何使用 paddlex 训练
              </Button>
            </Space>
          </PPBlock>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <PPBlock title="我的项目">
            <PPTable columns={columns} dataSource={data} showHeader={false} />
          </PPBlock>
        </Col>
      </Row>
    </PPContainer>
  );
};

export default Welcome;
