import React, { FunctionComponent } from "react";
import TextInput from "../components/TextInput";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";

export interface InboxProps {

}


const Inbox: FunctionComponent<InboxProps> = (props) => (
  <InputLabel text='Inbox'>
    <TextInput />
    <Button text='Add'></Button>
  </InputLabel>
);

export default Inbox;