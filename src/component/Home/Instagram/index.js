import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    img:{
        marginBottom: "20px"
    },
    instaparg :{
        position: "absolute",
        top: "30%",
        left: "50%",
        zIndex: 22,
        fontFamily: 'Montserrat',
        fontSize: "42pt",
        color: "rgba(255, 255, 255, 255)",
        webkitTransform: "translate(-50%,-50%)",
        mozTransform: "translate(-50%,-50%)",
        oTransform: "translate(-50%,-50%)",
        transform: "translate(-50%,-50%)",
    },
    images :{
        position: "relative",
        width: "100%",
        height: "180px",
        zIndex: -1
    },
    img : {
        width: "calc(100% / 6)",
        height: "180px",
        float: "left"
    }	
}));

const Instagram = () => {

    const classes = useStyles();

    const [images, setImages] = useState([]);  
    
    useEffect( () => {
        axios.get(`data.json`)
          .then(res => {
            setImages(res.data.instagram);
          })
      }, []
      );

    return (
       <div>
       <Grid container>
        <div className={classes.images}>
        {
            images.map( div => {
                return (
                <img src={div.img} width="100%" alt=".." key={div.id} className={classes.img}/>
                )
            }) 
        }
        <p className={classes.instaparg}>#Instagram</p>
        </div>
      </Grid>
	</div>
    )
}

export default Instagram

