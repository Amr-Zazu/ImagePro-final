import styled from "styled-components";
import {Link} from 'react-router-dom' ;

export const HomeSection = styled.div `
    min-height: 500px;
    background: url('/static/images/home-bg.jpg'); 
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    text-align: center;
    position: relative;
`
export const HomeInformation = styled.div ` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    `
export const HomeTitle = styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    margin-bottom: 20px;
    `
export const HomeDesc = styled.p `
    font-size: 25px;
    line-height: 1.5;
    color: #000;
    margin-bottom: 40px;
    `
export const Span = styled.span `
    color: #000;
    font-weight: bold;
    `
export const HomeBtn = styled(Link) `
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    text-decoration: none !important;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: normal;
    &:hover {
    // background: #fff;
    font-weight: bold;
    color: #000;
    }
    `

