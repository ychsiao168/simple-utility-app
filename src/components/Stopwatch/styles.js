import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
  },
  formControl: {
    display: 'flex',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  table: {
    padding: theme.spacing(0),
  },
}));