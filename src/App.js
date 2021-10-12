import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MenuBar from './components/Menubar/MenuBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopBody from './components/ShopBody/ShopBody';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="">
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
