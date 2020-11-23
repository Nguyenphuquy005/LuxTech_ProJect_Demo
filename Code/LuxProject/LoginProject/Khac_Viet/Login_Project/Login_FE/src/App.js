import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login'
import Sign from './pages/signup/Sign_up'
import Home from './pages/homePage/HomePage'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import UpdatePassword from './pages/forgotPassword/updatePassWord'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login}></Route>

          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Sign}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path='/forgotPassWord' component={ForgotPassword}></Route>
          <Route exact path='/updatePassWord/:resertPasswordToken' component={UpdatePassword}></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App