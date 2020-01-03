
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Navbarcontainer = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: transparent;
    position: absolute;
    top:60px;
    width:100%;
    z-index:5;
`;

export const List = styled.ul`{
    width: 50%;
    text-align:center;
    list-style: none;
    border-top: 1px solid #d4d4d4;
    margin:auto;
    padding-top:13px;
    background:#DDD;
    @media (max-width:1150px) and (min-width : 991px){
        width: 70%;
    };
	@media (max-width:1150px) and (min-width:768px){
        width: 100%;
    }
    }`;

export const Listli = styled.li`
    display: inline-block;
    @media (max-width : 991px){
        // display: block;
        // text-align: center;
    }
`

export const ListLink = styled.a`
    display: block;
    color: #555;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    text-transform:uppercase;
    cursor: pointer;
    &:hover{
        color: #000
    }
`

export const Linkstyled = styled(Link)`
    display: block;
    color: #555;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        color: #000
    }
`


