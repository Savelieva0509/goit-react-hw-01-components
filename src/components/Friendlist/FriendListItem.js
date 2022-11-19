import PropTypes from 'prop-types'; 
import css from './Statistics.module.css';

export default function FriendListItem({ avatar, name, IsOnline }) {
  
    return (
        <div>
            <span className={css.status}>{IsOnline }</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>       
        </div>
    );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};