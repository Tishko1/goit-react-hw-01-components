import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <h2>Task 1</h2>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <hr />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <hr />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
};

// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101'
//   }}
// >
//   React homework template
// </div>
