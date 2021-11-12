import HomePage from "./components/Pages/HomePage/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./components/Pages/Shop/Shop.component";
import { Component } from "react";
import { connect } from "react-redux";
import { SignInAndSignUp } from "./components/Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./utils/Selectors/user.selectors";

import Header from "./components/Header/Header.component";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";
class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {}

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(App);
