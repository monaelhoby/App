import React from 'react';
import HeaderBar from '../commons/HeaderBar';
import NavBar from '../commons/NavBar';
import Trending from "./Trending";
import Footer from "../commons/Footer";
import CopyRight from "../commons/copyRight";

const Dress = () => {
    return(
        <div>
            <div style={{marginBottom:"180px"}}>
            <HeaderBar />
            <NavBar />
            </div>
            <Trending />
            <Footer />
            <CopyRight />
        </div>
    )
}

export default Dress