import React from 'react';

export interface TitleProps {
  /**
   * 보여주고 싶은 텍스트입니다
   */
  text?: string;
}

function Title({ text }: TitleProps) {
  return <div>{text}</div>;
}

export default Title;
