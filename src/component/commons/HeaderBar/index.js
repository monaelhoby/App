import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '30px',
    paddingBottom: '30px',
    textAlign: 'center',
    position:'absolute',
    top:0,
    width:'100%',
    zIndex:5,
    background: "#DDD"
  },
  }));

const HeaderBar = () => {

const classes = useStyles();

const [images, setImages] = useState([]);  

useEffect( () => {
    axios.get(`data.json`)
      .then(res => {
        setImages(res.data.headerbar);
      })
  }, []
  )

    return (
      <div className={classes.root}>
      <Grid container>
        {
        images.map((image) => {
          return <Grid item md={4} sm={4} xs={12} key={image.id}>
                 <img src={image.image} alt="...."/>
                </Grid>
        })
        }
      </Grid>
      </div>
    );
}

export default HeaderBar ;
