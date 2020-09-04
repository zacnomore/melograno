import React from 'react';
import InputLabel, { InputLabelProps } from '../../library/components/InputLabel';
import { Story } from '@storybook/react';

export default {
  component: InputLabel,
  title: 'InputLabel'
}

const Template: Story<InputLabelProps> = (args: InputLabelProps) => <InputLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Label goes here',
  slot: <input></input>
};