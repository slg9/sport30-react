import './App.css';
import Menu from '../Header/Menu/Menu';
import Session from '../Session/Session';
import { Route, Switch } from "react-router-dom";
import Sport from '../Sport/Sport';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/sport/:sportID">
          <Sport />
        </Route>
        <Route path="/">
          <Session />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
