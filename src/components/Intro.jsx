import { Heading, Line, RightContainer } from "./StyledComponents";

import React from "react";
import Styled from "styled-components";

const StyledIntro = Styled.div`
    background-color: #0f0d16;
    position: relative;    
    color: white;
    min-height: 100vh;
    display: grid;
    align-items: center;
`;

const IntroPara = Styled(RightContainer)`
    margin-left: calc(10% + 20px);
    margin-right: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* bottom:0; */
    align-items:center;
    & > div {
        flex:1;
        min-width:300px;
    }
    .profileImg {
        margin:20px;
        border-radius: 50%;
        border: 20px solid #5918df;
        min-width: 200px;
        max-width: 400px;
        box-shadow: 0px 0px 30px 0px #5918df88,0px 0px 30px 0px #5918df88 inset;
        animation-duration: 2s;
        animation-name: slideIn;
        transition: box-shadow .2s;
        overflow: hidden;
    }
    .profileImg img {
        width:100%;
        animation-duration: 2.5s;
        animation-name: slideUp;
        transition: transform .2s;
        transform: translateY(10%)
    }
    .profileImg:hover img{
        transform: translateY(5%) scale(1.1);
    }
    .profileImg:hover{
        box-shadow: 0px 0px 40px 0px #5918df88;
    }
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0.5;
        }

        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }    
    @keyframes slideUp {
        from {
            transform: translateY(100%);
            opacity: 0.5;
        }

        to {
            transform: translateY(10%);
            opacity: 1;
        }
    }  
`;
const IntroText = Styled.div`
    font-weight: 900;
    line-height: 1.5;
    .name{
        color: #5918df;
    }
    font-size: 2vw;
    @media only screen and (max-width: 900px) {
        font-size: 4.5vw;
    }
`;

const SecondaryLine = Styled.div`
    color: #988e9f;
    font-weight: 500;
    margin:10px 0;
    font-size: 1.6vw;
    @media only screen and (max-width: 900px) {
        font-size: 4vw;
    }
`;

function Intro() {
    return (
        <>
            <StyledIntro id="start">
                <Line></Line>
                <IntroPara>
                    <div>
                        <Heading>Start</Heading>
                        <IntroText>
                            Hi, My name is{" "}
                            <span className="name">Karan Malhotra</span>
                            <br />I am a Fullstack Developer
                            <br />I love to bring ideas come true through code
                        </IntroText>
                        <SecondaryLine>Let me show you....</SecondaryLine>
                    </div>
                    <div className="profileImg">
                        <img src="./Karan.png" alt="karan malhotra" />
                    </div>
                </IntroPara>
            </StyledIntro>
        </>
    );
}

export default Intro;
