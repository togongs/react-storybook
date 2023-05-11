import React from "react";
// import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "stories/Button", // nav에 폴더 생성
  component: Button, // 이름
};

// 기본 포맷을 정해두고 bind로 제어
const Template = (args) => <Button {...args} />;

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음
export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
