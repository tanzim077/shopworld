import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MenuBar from './components/Menubar/MenuBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopBody from './components/ShopBody/ShopBody';
import OrderReview from './components/OrderReview/OrderReview';
import Confirmation from './components/Confirmation/Confirmation';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <ShopBody></ShopBody>
            </Route>
            <Route exact path="/home">
              <ShopBody></ShopBody>
            </Route>
            <Route exact path="/order">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute exact path="/confirmation">
              <Confirmation></Confirmation>
            </PrivateRoute>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
