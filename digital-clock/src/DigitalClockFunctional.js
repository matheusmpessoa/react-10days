import React from 'react';

const DigitalClockFunctional = () => {
  let time = null;
  let timeStr = 'clock';

  setInterval(() => {
    time = new Date();
    timeStr = `
    ${time.getHours()}:
    ${time.getMinutes()}:
    ${time.getSeconds()}`;
  }, 1000);

  return <div>${timeStr}</div>
}

export default DigitalClockFunctional;
