import React from 'react';

import { Meta, Story } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
// 템플릿의 default value 를 정해줄수 있다.
Basic.args = { text: 'Title!' };
