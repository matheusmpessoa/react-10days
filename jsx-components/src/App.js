import React from 'react';
import faker from 'faker';

import User from './User';
import FollowCard from './FollowCard';

const App = () => {
  return (
    <div>
      <User userName="John" url={faker.image.avatar()}/>
      <User userName="Alex" url={faker.image.avatar()}/>
      <User userName="Sonia" url={faker.image.avatar()}/>
      <FollowCard>
        <User userName="Matheus" url={faker.image.avatar()}/>
      </FollowCard>
    </div>
  )
}

export default App;
