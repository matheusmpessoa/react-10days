import React from 'react-dom';
import './User.css';

const User = (props) => {
  console.log(props);
  return (
    <div className="user">
      <div className="user--image">
        <img src={props.url} alt={props.userName}/>
      </div>
      <div className="user--name">
        {props.userName}
      </div>
    </div>
  )
}

export default User;
