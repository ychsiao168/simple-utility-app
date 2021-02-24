import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  card: {
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: '87%',
  },
}));