import React from "react";

export default class Clock extends React.Component {
  state: {
    time: Date;
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  render() {
    return (
    <div className="circle">
      <div className="hand seconds">{this.state.time.getSeconds()}</div>
      <div className="hand minutes">{this.state.time.getMinutes()}</div>
      <div className="hand hours">{this.state.time.getHours()}</div>
    </div>);
  }
}