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
    height: 250,
    // paddingTop: '56.25%', // 16:9
  },
  tableNoBorder: {
    borderWidth: 0
  },
  tableLargeFont: {
    fontSize: '16pt'
  },
  tableSmallFont: {
    fontSize: '8pt'
  },
}));