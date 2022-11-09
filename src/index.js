import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

import user from 'data/user.json';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const user = {
//     username: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Ocho Rios, Jamaica",
//     avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308
//     }
// }

function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

   <div class="profile">
    <div class="description">
      <img
        src= {avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
}
 
ReactDOM.render(
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} 
  />,
  document.querySelector('#root'),
)