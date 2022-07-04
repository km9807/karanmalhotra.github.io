import React from "react";
import Styled from "styled-components";

const StyledNavbar = Styled.div`
    position: fixed;
    top:0;
    width: 90%;
    display: flex;
    padding:0 5%;
    align-items: baseline;
    z-index:3;
    background:linear-gradient(#0f0d16,transparent);
    transition: all 1s;
    transform: translateY(${(props) => (props.hidden ? "-100%" : "0%")});

    .left{
        flex:1;
        .heading{
            color: white;
            font-weight: bold;
            font-size: 2.1rem;
            margin: 5px 0;
        }
        

    }
    a{
        text-decoration:none;
        color: white;
    }
    .right{
        display: flex;
        & > div{
            color: white;
            font-size:23px;
            font-weight:bold;
            margin: 15px 10px;
            opacity: 0.7;
            transition: opacity 0.5s;
        }   
        & > div:hover{
            opacity: 1;
        }
        & > div::after{
            content: " />";
            color: #494949;

        }
    }
    @media only screen and (max-width: 600px) {
        .right div{
            font-size:19px;
        }
        .right div::after{
            display: none;
        }
    }
    @media only screen and (max-width: 900px) {
        .heading{
            display:none;
        }        
    }

`;

function Navbar(props) {
    return (
        <StyledNavbar hidden={props.hidden}>
            <div className="left">
                <div className="heading">&lt; Karan /&gt;</div>
            </div>
            <div className="right">
                <div>
                    <a href="#start">Start</a>
                </div>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#about">About</a>
                </div>
                <div>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;
