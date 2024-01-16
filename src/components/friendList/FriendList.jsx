import css from './friend-list.module.css';
export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.items}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <img className="avatar" src={avatar} alt="Avatar" width="100" />
            <p className="name">{name}</p>
            <p className={`status ${isOnline ? 'statusOnline' : 'statusOffline'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
