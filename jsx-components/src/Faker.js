import React from 'react-dom';
import faker from 'faker';

function Faker() {
  return (
    <div>
      <div>
        <img src={faker.image.avatar()} alt={faker.internet.userName()} />
      </div>
      <div>{faker.internet.userName()}</div>
    </div>
  )
}

export default Faker;
