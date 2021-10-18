import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Torihiki from './views/Torihiki'
import Pfer from './views/Pfer'
import Uketuke from './views/Uketuke'
import Navigation from './views/Navigation'
import UserList from './views/UserList'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact>
        <Pfer />
      </Route>
      <Route path="/uketuke" exact>
        <Uketuke />
      </Route>
      <Route path="/torihiki" exact>
        <Torihiki />
      </Route>
      <Route path="/userList" exact>
        <UserList />
      </Route>
    </BrowserRouter>
  );
}