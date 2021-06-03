import React from 'react-dom';
import './User.css';
import './FollowCard.css';

const FollowCard = (props) => {
  console.log(props);
  return (
    <div className="follow-card">
      {props.children}
      <div className="follow-card--btn">
        <button>Follow</button>
      </div>
    </div>
  )
}

export default FollowCard;
