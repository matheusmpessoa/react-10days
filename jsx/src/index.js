import ReactDOM from 'react-dom';

const helloStr = `Hello React`;
const styleObj = {
  color: 'blue',
  backgroundColor: 'magenta',
  fontSize: '50px'
}

const text = <h1 style={styleObj}>{ helloStr }!!!!</h1>;

ReactDOM.render(
  text,
  document.getElementById('root')
);
