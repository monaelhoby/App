import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Logo from "../../../assets/logo.png";

const useStyles = makeStyles(theme => ({
    root :{
        fontFamily:  'Montserrat',
        paddingTop: "30px",
        paddingBottom: "60px",
       background: "#fafafa"
   },
    img : {
        marginTop: "35px"
   },
    parg : {
       fontSize: "12pt",
       color: "rgba(146, 146, 146, 255)",
       textAlign: "left",
       marginTop: "47px",
       marginBottom: "37px",
       paddingRight: "30px"
   },
   title : {
       marginTop: "35px",
       marginBottom: "37px",
       fontSize: "15pt",
       color: "rgba(0, 0, 0, 255)"
   },
   link : {
       display: "inline-block",
       height: "35px",
       width: "35px",
       borderRadius: "50%",
       background: "#e9e9e9",
       color: "#929292",
       marginRight: "10px",
       lineHeight: "35px",
       textAlign: "center",
       '&:hover' : {
        background: "#929292",
        color: "#e9e9e9"
       }
   },
   form : {
       marginTop: "30px",
       position: "relative"
   },
   inputText :{
       width: "100%",
       padding: "10px", 
       border:"1px solid #dfdfdf"
   },
   inputSubmit :{
       position: "absolute",
       right: 0,
       top: 0,
       background: "transparent",
       border: "none",
       padding: "10px",
       cursor: "pointer"
   },
   list : {
        listStyle : "none"
   },
   liLink : {
       fontSize: "11pt",
       color: "#777",
       '&:hover' : {
        color: "#111"
       }
   }
}));

const Footer = () => {

    const classes = useStyles();

    const [links, setLinks] = useState([]);  
    
    useEffect( () => {
        axios.get(`data2.json`)
          .then(res => {
            setLinks(res.data.footer);
          })
      }, []
      );

    return (
       <div className={classes.root}>
       <Container >
       <Grid container>
       <Grid item md={5} sm={12} xs={12}>
            <img  className={classes.img} src={Logo} height="18px" width="187px" alt="..."/>
            <p className={classes.parg}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <div>
            <a href="#" className={classes.link}><i class="fab fa-facebook-f"></i></a><a href="#"  className={classes.link}><i class="fab fa-youtube"></i></a>
            <a href="#" className={classes.link}><i class="fab fa-pinterest"></i></a><a href="#"  className={classes.link}><i class="fab fa-twitter"></i></a>
            </div>
            <form className={classes.form}>
            <input type="text" placeholder="Enter Your Email" className={classes.inputText} />
            <input type="submit" value="Subscribe" className={classes.inputSubmit}/>
            </form>
        </Grid>
        {
            links.map(link => {
                return (
                    <Grid item md={2} sm={4} xs={12} key={link.id}>
                    <h3 className={classes.title}>{link.title}</h3>
                    <ul className={classes.list}>
                       {
                            link.allLinks.map(linkli => {
                                return (
                                    <li><a href="#" className={classes.liLink}>{linkli}</a></li>
                                )
                            })
                        }
                    </ul>
                    </Grid>
                )
            })
        }
        </Grid>
        </Container >
	</div>
    )
}

export default Footer

