import css from './friend-list-item.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>Friend name: {name}</p>
      <p className={css.status}>Friend status: {isOnline}</p>
      <span className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
}
