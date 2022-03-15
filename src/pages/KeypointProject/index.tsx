import React from 'react';
import PPCreater from '@/components/PPCreater';
import PPContainer from '@/components/PPContainer';

const Project: React.FC = () => {
  return (
    <PPContainer>
      <PPCreater
        title="Keypoint Detection"
        imgSrc="./pics/illustration.jpg"
        mode="keypoint"
      ></PPCreater>
    </PPContainer>
  );
};

export default Project;