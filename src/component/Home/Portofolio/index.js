import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
portofolio : {
	paddingTop: '60px',
	paddingBottom: '30px'
},
div : {
  marginBottom: '10px',
  padding:'20px',
  position:'relative'
},
link: {
  display:'block',
  position:'absolute',
  top:'75%',
  left:'50%',
  transform: 'translate(-50%,-50%)',
  height:'55px',
  width: '200px',
  lineHeight:'55px',
  textAlign:'center',
  background: '#FFF',
  '&:hover' :{
      background: '#000',
      color: '#FFF'
  },
    // [theme.breakpoints.] : {
    //     left: '48%'
    // }
}
}));

const Portofolio = () => {

    const classes = useStyles();

    const [gallery, setGallery] = useState([]);  
    
    useEffect( () => {
        axios.get(`data.json`)
          .then(res => {
            setGallery(res.data.portofolio);
          })
      }, []
      );

    return (
       <div className={classes.portofolio}>
        <Grid container>
            {
              gallery.map( div => {
                  return (
                    <Grid item md={3} sm={6} xs={12} key={div.id}>
                    <div className={classes.div}>
                    <img src={div.img} height="440px" width="100%" alt="...."/>
                    <a href={div.href} className={classes.link}>{div.button}</a>
                    </div>
                    </Grid>
                  )
              }) 
            }
        </Grid>
	</div>
    )
}

export default Portofolio