import css from './friend-list-item.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <span className={isOnline ? css.on : css.off}></span>
    </div>
  );
}
