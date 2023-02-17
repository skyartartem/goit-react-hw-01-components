import { Profile } from "./Profile";
import user from '../user.json';

export const App = () => {
  return (
    <Profile user={user} />
  )  
};
