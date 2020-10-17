import React, { FunctionComponent, Component } from "react";

export interface ButtonProps {
  text: string;
}


const InputLabel: FunctionComponent<ButtonProps> = ({text}) => (
  <button>{text}</button>
);

export default InputLabel;