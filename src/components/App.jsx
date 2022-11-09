import Profile from 'components/profile';
import user from 'data/user.json';


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
    </div>
  )
};

