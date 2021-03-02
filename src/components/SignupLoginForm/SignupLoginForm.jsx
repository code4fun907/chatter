import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { validateEmailPassword } from "../../utils/authUtils";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const FormInput = ({ label, onChange }) => (
  <TextField
    fullWidth
    variant="outlined"
    label={label}
    name={label}
    onChange={onChange}
  />
);

const SignupLoginForm = ({ signupForm, loginForm }) => {
  const classes = useStyles();
  const history = useHistory();
  const { signup, login } = useAuth();
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formState;
    if (formError) {
      return setFormError(formError);
    }

    try {
      setFormError("");
      setFormLoading(true);
      if (signupForm) {
        await signup(email, password);
      } else if (loginForm) {
        await login(email, password);
      }
      history.push("/chat");
    } catch {
      setFormError("Unexpected error. try again");
    }
    setFormLoading(false);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.root} elevation={5}>
        <Typography className={classes.header} component="h1" variant="h5">
          {signupForm ? "Sign up" : loginForm ? "Login" : null}
        </Typography>
        {formError && (
          <Fade in>
            <Alert className={classes.alert} severity="error">
              {formError}
            </Alert>
          </Fade>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormInput label="email" onChange={(e) => handleChange(e)} />
            </Grid>
            <Grid item xs={12}>
              <FormInput label="password" onChange={(e) => handleChange(e)} />
            </Grid>
            <Button
              className={classes.signUp}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disabled={formLoading}
            >
              {signupForm ? "SIGN UP" : loginForm ? "LOGIN" : null}
            </Button>
          </Grid>
        </form>
      </Paper>
      <Typography align="center" className={classes.redirectText}>
        {signupForm ? (
          <>
            Already have an account? <Link to="/login">Login</Link>
          </>
        ) : loginForm ? (
          <>
            Dont have an account? <Link to="/signup">Signup</Link>
          </>
        ) : null}
      </Typography>
    </Container>
  );
};

SignupLoginForm.defaultProps = {
  signupForm: false,
  loginForm: false,
};

export default SignupLoginForm;
