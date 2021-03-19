import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signInAndSignUppage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signin" component={signInAndSignUppage} />
      </Switch>
    </div>
  );
}

export default App;
