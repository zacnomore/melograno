import React, { FunctionComponent } from "react";

export interface InboxProps {
  test: string
}

const Inbox: FunctionComponent<InboxProps> = (props) => (
  <div>Inbox {props.test}</div>
);

export default Inbox;