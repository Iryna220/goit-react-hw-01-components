import { Profile } from './Profile/Profile';
import user from 'data-components/user.json';

import { Statistics } from './Statistics/Statistics';
import data from 'data-components/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from 'data-components/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data-components/transactions.json';





export const App = () => {
  return (
    <>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </>
  );
};
