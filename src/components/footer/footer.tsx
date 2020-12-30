import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './footer.css';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'rgb(2, 0, 0, 0.5)',
    },
  }),
);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} footer_container`}>
      <Grid container spacing={3}>
        <Grid item xs={12} className="footer_grid">
          <Paper className={`${classes.paper} footer_paper`}>
            <h2>About us</h2>
            <h4>For more details please contact us.</h4>
            <p>Basket redux – A constructive and inclusive social network for software developers. With you every step of your journey.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;