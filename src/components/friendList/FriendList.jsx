import FriendListItem from '../friendListItem/FriendListItem.jsx';
import css from './friend-list.module.css';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css['friend-list']}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
}
