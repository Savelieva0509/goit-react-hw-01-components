import PropTypes from 'prop-types'; 
import css from './Profile.module.css';


export default function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <div className={css.stats__thumb}>
                        <span className={css.label}>Followers</span>
                        <span className={css.quantity}>{followers}</span>
                    </div>
                </li>
                <li>
                    <div className={css.stats__thumb}>
                        <span className={css.label}>Views</span>
                        <span className={css.quantity}>{views}</span>
                    </div>
                </li>
                <li>
                    <div className={css.stats__thumb} >
                        <span className={css.label}>Likes</span>
                        <span className={css.quantity}>{likes}</span>
                    </div>
                    
                </li>
            </ul>
        </div>
    );
}
 
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};