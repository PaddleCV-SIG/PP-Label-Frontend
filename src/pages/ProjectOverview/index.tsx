import React, { useState, useEffect } from 'react';
import { Table, Button, Image, message } from 'antd';
import { history } from 'umi';
import PPContainer from '@/components/PPContainer';
import PPBlock from '@/components/PPBlock';
import PPDivideDataModal from '@/components/PPLabelPage/PPDivideDataModal';
import PPExportModal from '@/components/PPLabelPage/PPExportModal';
import PPImportModal from '@/components/PPLabelPage/PPImportModal';
import {
  toDict,
  TaskUtils,
  ProjectUtils,
  splitDataset,
  exportDataset,
  importDataset,
} from '@/services/utils';
import serviceUtils from '@/services/serviceUtils';
import type { Task } from '@/services';
import type { ColumnsType } from 'antd/es/table';
const loading =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';

const TaskList: React.FC = () => {
  const [divideModalVisible, setDivideModalVisible] = useState<boolean>(false);
  const [exportModalVisible, setExportModalVisible] = useState<boolean>(false);
  const [importModalVisible, setImportModalVisible] = useState<boolean>(false);
  const task = TaskUtils(useState);
  const project = ProjectUtils(useState);
  const sets = { '0': 'train', '1': 'validation', '2': 'test' };
  const baseUrl = localStorage.getItem('basePath');
  const projectId = serviceUtils.getQueryVariable('projectId');
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('extra', typeof extra.currentDataSource);
    localStorage.setItem('currentTasks', JSON.stringify(extra.currentDataSource));
  };
  const columns: ColumnsType<Task> = [
    {
      title: 'ID',
      dataIndex: 'taskId',
      key: 'taskId',
      width: '25%',
      align: 'center',
      render: (text: string) => <>{text}</>,
      sorter: (a, b) => a.taskId - b.taskId,
      sortDirections: ['descend'],
    },
    {
      title: 'Annotation Count',
      dataIndex: 'annotations',
      key: 'taskId',
      width: '25%',
      align: 'center',
      render: (anns: list) => <>{anns.length}</>,
      sorter: (a, b) => a.annotations.length - b.annotations.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Set',
      dataIndex: 'set',
      key: 'taskId',
      width: '25%',
      align: 'center',
      render: (setIdx: string) => <>{sets[setIdx]}</>,
      sorter: (a, b) => a.set - b.set,
    },
    {
      title: 'Image',
      dataIndex: 'dataPaths',
      key: 'taskId',
      width: '25%',
      align: 'center',
      render: (paths: string) => (
        <Image
          src={`${baseUrl}${paths[0]}`}
          height={40}
          loading={'lazy'}
          onError={(thisImage) => {
            thisImage.target.src = loading;
            setTimeout(() => {
              thisImage.target.src = `${baseUrl}${paths[0]}reload`;
              console.log(`${baseUrl}${paths[0]} reload`);
            }, 1000);
          }}
        />
      ),
    },
    {
      dataIndex: 'taskId',
      key: 'taskId',
      align: 'center',
      render: (taskId: string) => (
        <Button
          type="primary"
          onClick={() => {
            localStorage.setItem('currTaskId', taskId);
            history.push(`/${project.curr.taskCategory.name}?projectId=${project.curr.projectId}`);
          }}
        >
          {'Label'}
        </Button>
      ),
    },
  ];

  useEffect(() => {
    project.getCurr(projectId);
    task.getAll(projectId).then((tasks) => {
      console.log('tasks', tasks);
    });
  }, []);

  // ensure projectid
  if (!projectId) {
    message.error('No valid project id');
    history.push('/');
  }

  return (
    <PPContainer>
      <PPBlock>
        <Button
          type="primary"
          onClick={() => {
            history.push(`/${project.curr.taskCategory.name}?projectId=${project.curr.projectId}`);
          }}
        >
          {'Label'}
        </Button>
        <Button
          type="primary"
          onClick={() => {
            console.log('project', project.curr);
            history.push(
              `/project_detail?taskCategory=${project.curr.taskCategory.name}&projectId=${project.curr.projectId}`,
            );
          }}
        >
          {'Project Detail'}
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setDivideModalVisible(true);
          }}
        >
          {'Split Dataset'}
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setExportModalVisible(true);
          }}
        >
          {'Export Dataset'}
        </Button>
        {(() => {
          if (task.all?.length != 0)
            return (
              <Button
                type="primary"
                onClick={() => {
                  setImportModalVisible(true);
                }}
              >
                {'Import Additional Data'}
              </Button>
            );
          return null;
        })()}
      </PPBlock>
      <PPBlock title={'Tasks'}>
        <p>{`Task Count: ${task.all?.length} \n`}</p>
        {(() => {
          if (task.all?.length == 0)
            return (
              <Button
                type="primary"
                onClick={() => {
                  setImportModalVisible(true);
                }}
              >
                {'Import Data'}
              </Button>
            );
          return <Table columns={columns} dataSource={toDict(task.all)} onChange={onChange} />;
        })()}
      </PPBlock>

      <PPDivideDataModal
        visible={divideModalVisible}
        splitDataset={splitDataset}
        project={project}
        onCancel={() => {
          setDivideModalVisible(false);
        }}
        onFinish={() => {
          setDivideModalVisible(false);
        }}
      />
      <PPExportModal
        visible={exportModalVisible}
        exportDataset={exportDataset}
        project={project}
        onCancel={() => {
          setExportModalVisible(false);
        }}
        onFinish={() => {
          setExportModalVisible(false);
        }}
      />
      <PPImportModal
        visible={importModalVisible}
        importDataset={importDataset}
        project={project}
        onCancel={() => {
          setImportModalVisible(false);
        }}
        onFinish={() => {
          setImportModalVisible(false);
          task.getAll(projectId).then((tasks) => {
            console.log('tasks', tasks);
          });
        }}
      />
    </PPContainer>
  );
};

export default TaskList;