import css from './friend-list.module.css';
export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.items}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="100" />
            <p className={css.name}>{name}</p>
            <p className={`${css.status} ${css[isOnline]}`}>{isOnline ? 'Online' : 'Offline'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
