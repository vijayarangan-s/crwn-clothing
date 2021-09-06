import HomePage from './components/Pages/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './components/Pages/Shop/Shop.component';
import './App.css'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
