import ReactDOM from 'react-dom';

const containerStyles = {
  textAlign: 'center',
}

const imageStyles = {
  borderRadius: '100px',
  border: '2px solid pink'
}

const avatar = (
  <div>
    <div style={containerStyles}>
      <img src="https://picsum.photos/200" alt="Avatar" style={imageStyles} />
      <div>Matheus</div>
    </div>
  </div>
);

ReactDOM.render(
  avatar,
  document.getElementById('root')
);
