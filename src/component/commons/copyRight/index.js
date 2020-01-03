import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
root : {
    background: "#1e1b1b",
	padding: "15px ",
	fontFamily: 'Montserrat',
	fontSize: "11pt",
    color: "rgba(149, 148, 148, 255)",
    textAlign: "center",
    margin:"auto"
},
copyright : {
    textAlign: "center",
    margin:"auto"
}
}));

const CopyRight = () => {

    const classes = useStyles();

return (
    <div className={classes.root}>
	  <Grid container>
		  <p className={classes.copyright}>© 2017 - Ecommerce software by PrestaShop™</p>
      </Grid>
	</div>
)

}

export default CopyRight