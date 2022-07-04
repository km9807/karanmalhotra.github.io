import React from "react";
import Styled from "styled-components";

const StyledProjectCard = Styled.div`
    width: 480px;
    position: absolute;
    transition: transform 0.2s;
    margin-left:50px;

    .overlay{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        background: linear-gradient(45deg,#191426,transparent);
        transition: opacity 0.5s;
    }

    
    
    .textWrapper{
        position:absolute;
        bottom: 0;
        /* border: 1px solid white; */
        left: -40px;
        width: 140px;
        font-size: 25px;
        font-weight:700;
        /* padding-bottom:10px; */
        color: white;
        
        img{
            width:30px;
            margin-right:5px;
            margin-top:15px;
        }
    }

    .textWrapper::after{
        bottom:45px;
        left:0;
        content:"";
        position: absolute;
        width:100%;
        height: 4px;
        box-shadow: 0 0 15px 0px black;
        background: white;
    }

    .bgImage {
        width:100%;
        display: block;
    }

    .techStack{
        position : absolute;
        top: 0;
        bottom: 0;
        right:0;
        display: flex;
        flex-direction: column;

        img{
            transition: transform 0.7s;
            transform: translateX(55%)
        }


    }
    &: hover{
        z-index:2;
        transform: scale(1.075);
        box-shadow: 0px 0px 100px 15px black;
        
        .textWrapper{
            text-shadow: 0 0 8px black;
        }
        .overlay{
            opacity: 0;
        }
        .techStack{
            img{

            transform: scale(1.3) translateX(60%)
            }
        }
    }
    
    @media only screen and (max-width: 1450px) {
        width: 350px;

    }

    @media only screen and (max-width: 1350px) {
        width: 300px;

    }

    @media only screen and (max-width: 1200px) {
        width: 290px;

    }

    @media only screen and (max-width: 1100px) {
        width: 70%;
        position: static;
        margin:  30px 10px 30px 50px;
    }
`;

const Icon = Styled.img`
    width: 30px;
    margin: 10px 0;
`;

export function I(props) {
    let { name } = props;
    return <Icon src={`./images/icons/${name}.svg`} />;
}

function ProjectCard(props) {
    const { name, image, stack, gitHubLink, liveLink, videoLink } = props.data;

    return (
        <StyledProjectCard style={props.location}>
            <div style={{ position: "relative" }}>
                <div className="overlay"></div>
                <div className="textWrapper">
                    {name}
                    <br />
                    {gitHubLink && (
                        <a
                            href={gitHubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/icons/github.svg"
                                alt="github icon"
                            />
                        </a>
                    )}
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/icons/chain.svg"
                                alt="liveIcon"
                            />
                        </a>
                    )}
                    {videoLink && (
                        <a
                            href={videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="./images/icons/play.png" alt="playIcon" />
                        </a>
                    )}
                </div>
                <div className="techStack">
                    {stack.map((name) => (
                        <I key={name} name={name} />
                    ))}
                </div>
                <img className="bgImage" src={image} alt={name} />
            </div>
        </StyledProjectCard>
    );
}

export default ProjectCard;
