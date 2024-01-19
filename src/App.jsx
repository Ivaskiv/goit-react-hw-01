import './App.jsx';
import Profile from './components/profile/Profile.jsx';
import TransactionHistory from './components/transactionHistory/Transactions.jsx';
import userData from './data/userData.json';
import transactions from './data/transactions.json';
import FriendList from './components/friendList/FriendList.jsx';
import friends from './data/friends.json';

export default function App() {
  // console.log(userData);
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
