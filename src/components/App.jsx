import { Profile } from "./profile/Profile";
import user from './profile/user.json';
import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json'

export const App = () => {
  return (
    <div
      style={{
          //  height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          //  fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );  
};
