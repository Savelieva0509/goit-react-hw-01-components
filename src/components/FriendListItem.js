import PropTypes from 'prop-types'; 

export default function FriendListItem({ avatar, name, IsOnline }) {
  
    return (
        <div>
            <span class="status">{IsOnline }</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>       
        </div>
    );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};