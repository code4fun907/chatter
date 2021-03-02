import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navigationLink: {
    textDecoration: "none",
    cursor: "pointer",
    color: "white",
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
}));
