import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupLoginForm from "./components/SignupLoginForm/SignupLoginForm";
import { useAuth } from "./contexts/AuthContext";

const Chat = () => {
  const { currentUser } = useAuth();

  return <pre>{JSON.stringify(currentUser, null, 2)}</pre>;
};

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <NavBar />
      <Switch>
        <Route path="/signup">
          <SignupLoginForm signupForm />
        </Route>
        <Route path="/login">
          <SignupLoginForm loginForm />
        </Route>
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  </>
);

export default App;
