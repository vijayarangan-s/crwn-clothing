import HomePage from './components/Pages/HomePage/HomePage';
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './components/Pages/Shop/Shop.component';
import Header from './components/Header/Header.component';
import { SignInAndSignUp } from './components/Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { Component } from 'react';

import './App.css'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './utils/Selectors/user.selectors';


class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } 

      setCurrentUser(userAuth)

    })
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
          <Route exact 
                path="/signin" 
                render={
                  () => this.props.currentUser ? (<Redirect to="/" />): (<SignInAndSignUp/>)
                  } 
                  />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
