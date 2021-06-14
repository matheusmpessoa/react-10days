import React, {Component} from 'react';
import './DigitalClock.css';

class DigitalClock extends Component {

  constructor(props) {
    super(props);

    // Inicializando
    this.state = {
      time: this.getTimeString(new Date())
    };

    // Dando vida ao relógio
    setInterval(() => {
      this.setState({
        time: this.getTimeString(new Date())
      })
    }, 1000);
  }

  getTimeString(time) {
    return `
      ${time.getHours()}:
      ${time.getMinutes()}:
      ${time.getSeconds()}`;
  }

  render() {
    console.log('render');
    return (
      <div className="clock">{this.state.time}</div>
    )
  }
}

export default DigitalClock;
