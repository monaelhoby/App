import React from 'react';
import HeaderBar from '../commons/HeaderBar';
import NavBar from '../commons/NavBar';
import Carousel from './Slider';
import Description from './Description';
import Portofolio from './Portofolio';
import About from "./About";
import Partners from './Partners';
import Instagram from "./Instagram";
import MapAddress from "./Map";
import Footer from "../commons/Footer";
import CopyRight from "../commons/copyRight";

const Home = () => {
    return(
        <div>
            <div>
            <HeaderBar />
            <NavBar />
            <Carousel />
            </div>
            <Description/>
            <Portofolio />
            <About />
            <Partners />
            <Instagram />
            <MapAddress />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default Home