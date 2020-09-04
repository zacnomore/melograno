import React, { FunctionComponent } from "react";
import TextInput from "../components/TextInput";

export interface InboxProps {
  test: string
}


const Inbox: FunctionComponent<InboxProps> = (props) => (
  <TextInput></TextInput>
);

export default Inbox;