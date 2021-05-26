import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import IndividualItem from './components/IndividualItem';
function App() {
  return (
    <div className="app">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/item">
        <IndividualItem />
      </Route>
    </div>

  );
}

export default App;
