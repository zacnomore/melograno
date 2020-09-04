import React from 'react';
import Inbox, { InboxProps } from '../../library/features/Inbox';
import { Story } from '@storybook/react';

export default {
  component: Inbox,
  title: 'Inbox'
}

const Template: Story<InboxProps> = (args: InboxProps) => <Inbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  test: 'something or other'
};