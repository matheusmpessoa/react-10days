import React, {Component} from 'react';

class DigitalClock extends Component {
  render() {
    let time = null;
    let timeStr = 'clock';

    setInterval(() => {
      time = new Date();
      timeStr = `
      ${time.getHours()}:
      ${time.getMinutes()}:
      ${time.getSeconds()}`;
    }, 1000);

    return (
      <div>{timeStr}</div>
    )
  }
}

export default DigitalClock;
