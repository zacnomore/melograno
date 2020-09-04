import React, { FunctionComponent } from "react";

export interface TextInputProps {
  placeholder?: string;
}


const TextInput: FunctionComponent<TextInputProps> = ({placeholder}) => (
  <input type="text" placeholder={placeholder}></input>
);

export default TextInput;