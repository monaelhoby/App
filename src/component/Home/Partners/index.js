import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root:{
        paddingTop: "10px"
    },
    img:{
        marginBottom: "20px"
        },
    divImg:{
      padding:"10px 15px"
    }
}));

const Partners = () => {

    const classes = useStyles();

    const [Partners, setPatners] = useState([]);  
    
    useEffect( () => {
        axios.get(`data.json`)
          .then(res => {
            setPatners(res.data.partners);
          })
      }, []
      );

    return (
       <div className={classes.root}>
       <Container >
       <Grid container>
            {
              Partners.map( div => {
                  return (
                    <Grid item md={2} sm={4} xs={6} key={div.id}>
                    <div className={classes.divImg}>
                    <img src={div.img} width="100%" height="31px" alt=".." className={classes.img}/>
                    </div>
                    </Grid>
                  )
              }) 
            }
        </Grid>
        </Container >
	</div>
    )
}

export default Partners

