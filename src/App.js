import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/Menubar/MenuBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
