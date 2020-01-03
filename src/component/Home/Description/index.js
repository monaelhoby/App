import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    description :{
        paddingTop: '60px',
        paddingBottom: '60px',
        textAlign: "center"
    },
    h3 :{
        color: 'rgba(0,0,0,255)',
        fontSize: '14pt' ,
        marginTop: '20px',
        marginBottom: '20px'
    },
    p :{
        fontSize: '11pt',
        color: 'rgba(146, 146, 146, 255)',
        margin:'auto',
        width:'80%'
    }
    }));

const Description = () => {

    const classes = useStyles();

    const [divs, setDivs] = useState([]);  
    
    useEffect( () => {
        axios.get(`data.json`)
          .then(res => {
            setDivs(res.data.description);
          })
      }, []
      );

    return (
      <div className={classes.description}>
        <Container >
         <Grid container>
         {
          divs.map(div => {
              return (
                <Grid item md={4} sm={4} xs={12} key={div.id}>
				<img src={div.icon} alt="..."/>
				<h3 className={classes.h3}>{div.title}</h3>
				<p className={classes.p}>{div.brief}</p>
			    </Grid>
              )
          })
         }
         </Grid>
          </Container>
	  </div>
    )
}

export default Description