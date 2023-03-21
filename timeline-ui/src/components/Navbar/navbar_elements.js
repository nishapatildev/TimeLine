import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav= styled.nav`

height :80px;
display: flex;
justify-content:space-between;

z-index: 10;
overflow: hidden;
border: 1px solid rgb(82, 113, 255);
background-color: rgb(82, 113, 255);
`


export const NavLink = styled(Link)`
    color : #fff;
    display:flex;
    align-items:center;
    text-decoration :none;
    padding :0 1rem;
    height :100%;
    cursor :pointer;
    font-size: 1.3rem;
    font-weight: bold;

    &.active{
        color: #000000;
        background-color : #b6b8ba;

    }


    
`



export const Bars = styled(FaBars)`
    display : none;
    color : #fff;
    
    @media screen and (min-width: 768px) {
        display: block;
        position :absolute;
        top : 0;
        right : 0;
        transform : translate(-100%,75%);
        font-size : 1.8 rem;
        cursor : pointer;
    }
`

export const NavMenu = styled.div`
    display : flex;
    align-items : center;
    margin-right: -24px;
    
    @media screen and (max-width: 768px) {
        display : none;
    }
`

export const NavBtn = styled.nav`
    display : flex;
    align-items : center;
    margin-right: 50px;


    background-color: inherit;
    float: right;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 15px;
    color: #ffffff;
    font-family: Verdana,sans-serif;
    font-weight: bold;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
        display : none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius : 4px;
    background : #ffffff;
    padding : 10px 22px;
    color : rgb(82, 113, 255);
    border : none;
    outline : none;
    cursor : pointer;
    transition : all 0.2s ease-in-out;
    text-decoration : none;
    font-style : bold;
    

    &:hover {
        transition : all 0.2s ease-in-out;
        background : #fff;
        color : #010606;
        
    }
`