import Profile from '../profile/Profile.jsx';
import TransactionHistory from '../transactionHistory/Transactions.jsx';
import FriendList from '../friendList/FriendList.jsx';

import userData from '../../data/userData.json';
import transactions from '../../data/transactions.json';
import friends from '../../data/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        image={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
