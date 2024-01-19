import css from './friend-list-item.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="100" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${css[isOnline]}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
}
