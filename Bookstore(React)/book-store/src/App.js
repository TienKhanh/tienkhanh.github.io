import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './page/Home'
import Store from './page/Store'





function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
