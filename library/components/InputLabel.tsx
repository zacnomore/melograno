import React, { FunctionComponent, Component } from "react";


export enum LabelPosition {
  Top = 0,
  Bottom = 1,
  Left = 2,
  Right = 3
}

export interface InputLabelProps {
  text: string;
  slot: Element | Component;
  position?: LabelPosition
}


const InputLabel: FunctionComponent<InputLabelProps> = ({slot, text, position = 0}) => (
  <label>
    {[LabelPosition.Top, LabelPosition.Left].includes(position) ? text : ''}
    {slot}
    {[LabelPosition.Right, LabelPosition.Bottom].includes(position) ? text : ''}
  </label>
);

export default InputLabel;