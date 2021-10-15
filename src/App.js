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
import CompleteShopping from './components/CompleteShopping/CompleteShopping';
import bg1 from '../src/images/bg1.jpg'
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import User from './components/User/User';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="" style={{
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
      <AuthProvider>
        <BrowserRouter>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <ShopBody></ShopBody>
            </Route>
            <PrivateRoute exact path='/completeshopping'>
              <CompleteShopping></CompleteShopping>
            </PrivateRoute>
            <PrivateRoute exact path="/confirmation">
              <Confirmation></Confirmation>
            </PrivateRoute>
            <Route exact path="/home">
              <ShopBody></ShopBody>
            </Route>
            <PrivateRoute exact path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/order">
              <OrderReview></OrderReview>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute exact path="/user">
              <User></User>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
