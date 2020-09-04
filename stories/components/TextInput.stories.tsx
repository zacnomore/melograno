import React from 'react';
import TextInput, { TextInputProps } from '../../library/components/TextInput';
import { Story } from '@storybook/react';

export default {
  component: TextInput,
  title: 'TextInput'
}

const Template: Story<TextInputProps> = (args: TextInputProps) => <TextInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Test placeholder'
};