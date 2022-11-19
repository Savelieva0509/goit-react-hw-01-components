import PropTypes from 'prop-types'; 
import FriendListItem from 'components/Friendlist/FriendListItem';
import css from './Statistics.module.css';

export default function FriendList({ friends }) {

return (
  <ul className={css.friend__list}>
        {friends.map(({ avatar, name, isOnline, id}) => (
          <li className={css.item} key = {id}>
        <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline} />       
      </li>
    
 ))}
</ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
    })
  ),
};
