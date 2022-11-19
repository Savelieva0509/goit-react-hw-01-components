import Profile from 'components/Profile/Profile';
import user from 'data/user.json';

import FriendList from 'components/Friendlist/FriendList';
import friends from 'data/friends';

import Statistics from './Statistics/Statistics';
import data from 'data/data.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

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
      <TransactionHistory
       items={transactions} />
    </div>
  )
};

