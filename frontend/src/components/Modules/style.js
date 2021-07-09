import styled from "styled-components";
import {Link} from 'react-router-dom' ;

 export const ModuleSection = styled.div `
    height: 30%;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
    `
    export const ModulePart = styled.div `
    margin-top: 20px;
    width: 22%;
    float: left;
    height: 370px;
    background: #cee9f0;
    // padding: 30px 0;
    border: 1px solid #888;
    border-radius: 25px;
    box-sizing: border-box;
    text-align: center;
    margin-left: ${props => props.first === 1 ? '1%' : '16%'} ;
    `

export const ModuleTitle = styled.h2 `
    font-size: 43px; 
    font-weight: normal;
    padding-top: ${props => props.first === 1 ? '0%' : '10%'} ;
    `
    export const Span = styled.h2 `
    font-size: 40px; 
    font-weight: bold;
    margin-left: 30px;
    margin-top: 0px;
    color : #ff9933;
    `
    export const ModuleDesc = styled.p `
    font-size: 17px;
    color: #000;
    padding: 20px;
    padding: ${props => props.first === 2 ? '22px' : '12px'} ;
    margin-top : 0;
    `


export const  ModuleButton = styled.a `
    background: #d65858;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    margin-top: 20px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background: #fff;
    color: #eb5424
    }
    `


