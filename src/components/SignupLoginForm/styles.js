import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  alert: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  signUp: {
    marginTop: theme.spacing(2),
  },
  redirectText: {
    marginTop: theme.spacing(2),
  },
}));
