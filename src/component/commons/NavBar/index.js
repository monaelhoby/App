import React from 'react';
import {Navbarcontainer, List, Listli, Linkstyled} from './style.js';
import Grid from '@material-ui/core/Grid';

const Navbar = () => {
    return (
        <Navbarcontainer>
            <Grid container>
                <List>
                    <Listli><Linkstyled to="/">Home</Linkstyled></Listli>
                    <Listli><Linkstyled to="/dress">Dress</Linkstyled></Listli>
                    <Listli><Linkstyled to="/blouses">Blouses</Linkstyled></Listli>
                    <Listli><Linkstyled to="/tshirts">T-Shirts</Linkstyled></Listli>
                </List>
            </Grid>
        </Navbarcontainer>
    )
}

export default Navbar