import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import PrivateRoute from "./components/common/PrivateRoute";
import SignupLoginForm from "./components/SignupLoginForm/SignupLoginForm";

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <NavBar />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signup">
          <SignupLoginForm signupForm />
        </Route>
        <Route path="/login">
          <SignupLoginForm loginForm />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
