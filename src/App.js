import "./App.css";
import React, { useEffect, useRef } from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUppage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUSerProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/checkout.component";
// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { Redirect } from "react-router-dom";

const App = ({ setCurrentUser, currentUser }) => {
  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUSerProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      console.log("mounted");

      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth.current();
      console.log("unmounted");
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUppage />
          }
        />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
