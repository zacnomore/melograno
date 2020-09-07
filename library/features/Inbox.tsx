import React, { FunctionComponent } from "react";
import TextInput from "../components/TextInput";
import InputLabel from "../components/InputLabel";

export interface InboxProps {
  test: string
}


const Inbox: FunctionComponent<InboxProps> = (props) => (
  <InputLabel text='Inbox'>
    <TextInput />
  </InputLabel>
);

export default Inbox;