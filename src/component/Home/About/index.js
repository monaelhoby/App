import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root :{
        textAlign:"center",
        margin : "30px auto 20px"
    },
    divImg :{
        padding: 0
    },
    divAbout : {
        padding: "110px 80px",
        background: "#fafafa"
    },
    header : {
        color: "rgba(22, 25, 24, 255)"
    },
    line : {
        width: "60px",
        height: "1px",
        background: "rgba(0,0,0,.1)",
        borderTop:"1px solid #CCC"
    },
    brief : {
        fontSize: "9pt",
        color: "rgba(146, 146, 146, 255)",
        margin: "30px auto 60px"
    },
    link : {
        fontSize: "11pt",
        color: "rgba(0, 0, 0, 255)",
        border: "1px solid #000",
        padding: "12px 20px",
        '&:hover' :{
            color: "#fafafa",
            background: "#000"
        }
    }
}));

const About = () => {

    const classes = useStyles();

    const [About, setAbout] = useState([]);  
    
    useEffect( () => {
        axios.get(`data.json`)
          .then(res => {
            setAbout(res.data.aboutBags);
          })
      }, []
      );

    return (
       <div className={classes.root}>
            {
              About.map( div => {
                  return (
                   <Grid container key={div.id}>
                    <Grid item md={6} sm={6} xs={12}>
                    <div className={classes.divImg}>
                    <img src={div.img} width="100%" height="100%" alt=".."/>
                    </div>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                    <div className={classes.divAbout}>
                      <h2 className={classes.header}>{div.title}</h2>
                      <hr  className={classes.line}/>
                      <p className={classes.brief}>{div.brief}</p>
                      <a className={classes.link} href="/">DISCOVERY MORE</a>
                      </div>
                    </Grid>
                    </Grid>
                  )
              }) 
            }
	</div>
    )
}

export default About

