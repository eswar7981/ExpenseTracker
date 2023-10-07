import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Interface from './Components/Interface';
import Profile from './Components/Profile';
import { Route,RouterProvider,Switch } from 'react-router-dom';
import Navi from './Components/Navigation/Navi';
import VerifyEmail from './Components/VerifyEmail';
import LogOut from './Components/LogOut';
import ForgotPassword from './Components/ForgotPassword';
import AddExpense from './Components/AddExpense';
import { themeActions } from './Redux/ThemeReducer';
import { useSelector } from 'react-redux';
import './App.css'
function App() {
  const theme=useSelector((state)=>state.theme.theme)
  return (
    <div  className={theme==='dark'?'dark':'light'}>
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
  <Route path="/logout">
    <LogOut></LogOut>
  </Route>
  <Route path='/forgotpassword'>
    <ForgotPassword></ForgotPassword>
  </Route>
  <Route path='/addexpense'>
    <AddExpense></AddExpense>
  </Route>
  </>
  </Switch>
  </>
  </div>
  );
}

export default App;
