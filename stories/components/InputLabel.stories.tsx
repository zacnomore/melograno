import React, { Children, PropsWithChildren } from 'react';
import InputLabel, { InputLabelProps } from '../../library/components/InputLabel';
import { Meta, Story } from '@storybook/react';

export default {
  component: InputLabel,
  title: 'InputLabel'
} as Meta;

const Template: Story<PropsWithChildren<InputLabelProps>> = (args: PropsWithChildren<InputLabelProps>) => <InputLabel {...args}>{args.children}</InputLabel>;

export const Default = Template.bind({});

Default.args = {
  text: 'Label goes here',
  children: <input></input>
};
