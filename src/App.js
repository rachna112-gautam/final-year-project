import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
function App() {
  return (
    <div className="app">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>

    </div>

  );
}

export default App;
