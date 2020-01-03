import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Map from '../../../assets/Map.png';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root:{
        background: "url("+ Map + ")fixed" ,
        paddingTop: "100px",
        paddingBottom: "100px",
        backgroundSize: "cover"
    },
    box : {
        fontSize: "11pt",
        padding: "40px",
        color: "rgba(1, 1, 1, 255)",
        textAlign: "left",
        background: "#FFF",
        boxShadow: "1px 1px 2px #AAA , -1px -1px 2px #AAA"
    }
}));

const MapAddress = () => {

    const classes = useStyles();

    const [connect, setConnect] = useState([]);  
    
    useEffect( () => {
        axios.get(`data.json`)
          .then(res => {
            setConnect(res.data.connect);
          })
      }, []
      );

    return (
       <div className={classes.root}>
        <Container>
       <Grid container>
        {
            connect.map( div => {
                return (
                <Grid item md={4} sm={6} xs={12} key={div.id}>
                    <div className={classes.box}>
                    <p>{div.address}</p>
                    <p>{div.phoneNo}</p>
                    <p>{div.email}</p>
                    <p>{div.appiontment}</p>
                </div>
                </Grid>
                )
            }) 
            }
        </Grid>
        </Container> 
	</div>
    )
}

export default MapAddress

