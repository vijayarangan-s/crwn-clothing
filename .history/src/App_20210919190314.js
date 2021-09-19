import HomePage from './components/Pages/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './components/Pages/Shop/Shop.component';
import { Header } from './components/Header/Header.component';
import { SignInAndSignUp } from './components/Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component';
import { auth } from './components/firebase/firebase.utils';
import { Component } from 'react';

import './App.css'


class App extends Component {
  
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({currentUser:user}))
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
   
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
