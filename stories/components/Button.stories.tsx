import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from '../../library/components/Button';

export default {
  component: Button,
  title: 'Button'
}

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Example Button'
};