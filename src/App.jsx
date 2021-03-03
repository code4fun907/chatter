import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import SignupLoginForm from "./components/SignupLoginForm/SignupLoginForm";
import { useAuth } from "./contexts/AuthContext";

const DashBoard = () => {
  const { currentUser } = useAuth();

  return <pre>{JSON.stringify(currentUser, null, 2)}</pre>;
};

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <NavBar />
      <Switch>
        <PrivateRoute exact path="/" component={DashBoard} />
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
