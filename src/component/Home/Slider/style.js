import styled from 'styled-components';
import { ButtonBack, ButtonNext, DotGroup, Image } from 'pure-react-carousel';


export const BannerBkg = styled(Image)`{
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	width: 100% ;
	@media (max-width:767px) {
		heihgt:100vh
	}
}`;
export const Header = styled.h5`{
	font-size: 36pt;
	color: rgba(22, 25, 24, 255);
	@media (max-width:1150px) and (min-width:768px){
		margin-bottom:20px;
		margin-top:80px
	}
}`;
export const Pargraph = styled.p`{
	font-size: 13pt;
	color: rgba(127, 127, 127, 255)
}`;
export const Link = styled.button`{
	background: #000;
	height: 56px;
	width: 194px;
	margin-top: 47px;
	margin-bottom:60px;
	font-size: 11pt;
	border:none;
	color:#FFF;
	cursor:pointer;
    &:hover{
        background: #FFF;
        color: #000
	}
	@media (max-width:991px) and (min-width:768px){
		margin-top: 15px;
		height: 50px;
		width: 150px;
	}
}`;
export const Back = styled(ButtonBack)`{
    width: 45px;
    height: 45px;
    border: 2px solid #FFF;
    border-radius: 50%;
    top: 50%;
	opacity: 1;
	background:transparent;
	position:absolute;
	left: 20px;
	&:hover:{
		background: rgba(0,0,0,.7)
	};
	@media (max-width:767px){
		display:none
	}
} `;
export const Next = styled(ButtonNext)`{
    width: 45px;
    height: 45px;
    border: 2px solid #FFF;
    border-radius: 50%;
    top: 50%;
	opacity: 1;
	background:transparent;
	position:absolute;
	right: 20px;
	&:hover:{
		background: rgba(0,0,0,.7)
	};
	@media (max-width:767px){
		display:none
	}
}`;
export const Arrow = styled(Image)`{
	opacity: 1;
	height:25px !important;
	width:20px !important;
	&:hover:{
		opacity:1;
	}
}`;
export const Dots = styled(DotGroup)`{
	-webkit-justify-content: flex-start !important;
	-moz-justify-content: flex-start !important;
	-o-justify-content: flex-start !important;
	justify-content: flex-start !important
}`;
// .Banner .carousel .carousel-indicators li{
// 	height: 10px;
// 	width: 10px;
// 	background: rgba(255,255,255,.8)
// }
// .Banner .carousel .carousel-indicators .active{
// 	background: rgba(0,0,0,.8)
// }
export const CarouselCaption = styled.div`{
	position:absolute;
	text-align: left !important ;
	bottom: 20% !important;
	left:160px;
	@media (max-width:991px) and (min-width:768px){
		bottom: 30px !important;
		left:80px;
	}
	@media (max-width : 767px){
		display:none
	}
}`;