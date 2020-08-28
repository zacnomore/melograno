import React from 'react';
import Inbox, { InboxProps } from '../../components/Inbox';

export default {
  component: Inbox,
  title: 'Inbox'
}

const Template = (args: InboxProps) => <Inbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  test: 'something or other'
};