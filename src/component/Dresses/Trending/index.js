import React, {useState, useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import './style.css';


const useStyles = makeStyles(theme => ({
  root: {
	fontFamily: 'Montserrat',
	fontWeight: '400',
	paddingTop: '40px',
	paddingBottom: '40px',
	textAlign :"center"
  },
}));

export default function Trending() {
  const classes = useStyles();

  const [showings, setShowings] = useState([]);  
    
  useEffect( () => {
	  axios.get(`data2.json`)
		.then(res => {
		  setShowings(res.data.trending);
		})
	}, []
	);

  return (
    <Grid className={classes.root}>
      <Container className="top-trending">
	  <h2>Top Trending</h2>
		<hr />
		<p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat<br/> nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br /> officia deserunt mollit anim id est laborum.</p>
	  		<Grid container>
				{
				showings.map(showing => {
				return (
				<Grid md={3} xs={2}>
				<div className="product">
				 <div className="overlay">
				        <a className="img-over" href="/"></a>
						<img src={showing.img} alt="..."/>
						{showing.new !== " " ? <span className="new">{showing.new}</span> : " "}
						{showing.sale !== "" ? <span className="sale">{showing.sale}</span> : ""}
						<button className="hover1"><a href="/">{showing.btn1}</a></button>
						<button className="hover2"><a href="/">{showing.btn2}</a></button>
				</div>
					<div className="sub-main">
					<h4>{showing.title}</h4>
					<p className="static">
					<span>{showing.price}</span>
					{showing.sale !== "" ? <small>{showing.oldPrice}</small> : ""}
					</p>
					<p className="color"><span></span><span></span><span></span><span></span></p>
					</div>
				</div>
            </Grid>
				)
			})
			}
			</Grid>
			<div> 
				<button class="buton"><a href="#">All Product</a></button>
			</div>
         </Container>
    </Grid>
  );
}
