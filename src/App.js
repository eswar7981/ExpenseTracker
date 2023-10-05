import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Interface from './Components/Interface';
import Profile from './Components/Profile';
import { Route,RouterProvider,Switch } from 'react-router-dom';
import Navi from './Components/Navigation/Navi';
import VerifyEmail from './Components/VerifyEmail';

function App() {
  return (
    <>
    <header>
      <Navi></Navi>
    </header>
    <Switch>
  <>
  <Route path="/login">
    <Login></Login>
  </Route>
  <Route path="/profilebutton">
    <Interface></Interface>
  </Route>
  <Route path="/profile">
    <Profile></Profile>
  </Route>
  <Route path="/verifyemail">
    <VerifyEmail></VerifyEmail>
  </Route>
  </>
  </Switch>
  </>
  );
}

export default App;
