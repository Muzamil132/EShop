
import './App.css';
import Appbar from './Appbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Product from './Product';
import Cart from './Cart';
import Admin from './Admin';
import Carosoul from './Carosoul'


function App() {
  return (
    <div className="App">
    <Router>
    <Appbar/>
    <Carosoul/>
    <Switch>
      <Route exact path="/"  component={Product} />
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/admin" component={Admin} />
    </Switch>
  
    </Router>

    </div>
  );
}


export default App;
