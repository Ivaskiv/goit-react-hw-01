import './App.jsx';
import Profile from './components/profile/Profile.jsx';
import FriendList from './components/friendList/FriendList.jsx';
import TransactionHistory from './components/transactionHistory/Transactions.jsx';
import userData from './data/userData.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

export default function App() {
  // console.log(userData);
  return (
    <div>
      <Profile
        image={userData.avatar}
        ß
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
