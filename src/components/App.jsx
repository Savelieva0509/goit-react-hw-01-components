import Profile from 'components/Profile';
import user from 'data/user.json';

import FriendList from 'components/FriendList';
import friends from 'data/friends';

import Statistics from './Statistics';
import data from 'data/data.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
    username = {username}
    tag = {tag}
    location = {location}
    avatar = {avatar}
    stats = {stats} 
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList
        friends={friends} />
    </div>
  )
};

