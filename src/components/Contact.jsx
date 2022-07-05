import { Heading, Line, RightContainer } from "./StyledComponents";

import React from "react";
import Styled from "styled-components";

const StyledContact = Styled.div`
    position: relative;
    border: 1px solid transparent;
    background-color: #0e0d10;
`;

const StyledFindMe = Styled(RightContainer)`
    height: 400px;
    .container{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .heading{
            color: white;
            font-size: 45px;
            margin-bottom:30px;
        }
        .contactGrid{
            width: 900px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            font-size: 30px;
            div a{
                color: white;
                display: flex;
                text-decoration: none;
                align-items: center;
            }
            
            @media only screen and (max-width: 1000px) {
                grid-template-columns: 1fr 1fr;
                font-size: 35px;
            }

            @media only screen and (max-width: 850px) {
                grid-template-columns: 1fr;
                font-size: 20px;
            }
        }
    }
`;

const Icon = Styled.img`
    height: 40px;
    margin: 10px;
`;

function Contact() {
    return (
        <StyledContact id="contact">
            <Line />
            <StyledFindMe>
                <Heading>Contact</Heading>
                <div className="container">
                    <div className="heading">Find me on :</div>
                    <div className="contactGrid">
                        <div>
                            <a
                                href="https://www.linkedin.com/in/km2707/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/linkedin.svg" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/km9807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/github.svg" />
                                Github
                            </a>
                        </div>
                        <div>
                            <a
                                href="mailto:karanmalhotra9807@gmail.com"
                                rel="noopener noreferrer"
                            >
                                <Icon src="./images/icons/gmail.svg" />
                                Gmail
                            </a>
                        </div>
                    </div>
                </div>
            </StyledFindMe>
        </StyledContact>
    );
}

export default Contact;
