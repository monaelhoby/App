import React, {useState, useEffect} from 'react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowNext from '../../../assets/right.png';
import ArrowPrev from '../../../assets/left.png';
import {BannerBkg,Header,Pargraph,Link,Back,Next,Arrow,Dots,CarouselCaption} from './style';
import './style.css';
import axios from 'axios';
 
export default function Carousel () {

    const [slides, setSlides] = useState([]);  
    
    useEffect( () => {
        axios.get(`data.json`)
          .then(res => {
            setSlides(res.data.slider);
          })
      }, []
      );

    return (
      <CarouselProvider
        isPlaying={true}
        naturalSlideWidth={50}
        naturalSlideHeight={28}
        totalSlides={3}
      >
        <Slider>
          {
            slides.map(slider => {
              return (
                <Slide index={slider.id}>
                <BannerBkg src={slider.slide} alt="BannerBkg" />
                <CarouselCaption>
                 <Header>{slider.title}</Header>
                 <Pargraph>{slider.brief}</Pargraph>
                 <Pargraph>{slider.brief2}</Pargraph>
                 <Link>{slider.link}</Link>
                </CarouselCaption>
              </Slide>
              )
            })
          }
        </Slider>
        <Back><Arrow src={ArrowPrev} alt="Arrow" /></Back>
        <Next><Arrow src={ArrowNext} alt="Arrow" style={{marginLeft:"8px"}} /></Next>
        <Dots />
      </CarouselProvider>
    );
}