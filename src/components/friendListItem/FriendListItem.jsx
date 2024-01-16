import css from './friend-list-item.module.css';
export default function FriendListItem({ avatar, name }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
}
