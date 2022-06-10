import React from 'react';

import { Meta, Story } from '@storybook/react';
import Title, { TitleProps } from './Title';

// meta 타입으로 컴포넌트의 정보를 작성하고 export default 해주면 storybook에서 해당 정보를 파싱하여 컴포넌트를 생성
export default {
  // storybook에서 보여줄 파일경로
  title: 'Components/Title',
  // 사용할 컨포넌트 명시
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
// 템플릿의 default value 를 정해줄수 있다.
Basic.args = { text: 'Title!' };
