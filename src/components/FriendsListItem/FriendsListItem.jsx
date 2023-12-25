import css from './FriendsListItem.module.css';

const FriendsListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.onlineStatus : css.offlineStatus}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default FriendsListItem;
