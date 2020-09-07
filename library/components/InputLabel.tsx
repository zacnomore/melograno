import React, { FunctionComponent, Component } from "react";


export enum LabelPosition {
  Top = 0,
  Bottom = 1,
  Left = 2,
  Right = 3
}

export interface InputLabelProps {
  text: string;
  position?: LabelPosition
}


const InputLabel: FunctionComponent<InputLabelProps> = ({children, text, position = 0}) => (
  <label>
    {[LabelPosition.Top, LabelPosition.Left].includes(position) ? text : ''}
    {children}
    {[LabelPosition.Right, LabelPosition.Bottom].includes(position) ? text : ''}
  </label>
);

export default InputLabel;