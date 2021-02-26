// import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => <h1>Home</h1>;

export default () => (
  <>
    <CssBaseline />
    <NavBar />
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </>
);
