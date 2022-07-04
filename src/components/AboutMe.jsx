import { Heading, I, Line, RightContainer } from "./StyledComponents";

import React from "react";
import Styled from "styled-components";

const AboutMeText = Styled(RightContainer)`
    color: white;
    line-height: 1.5;
    min-height:650px;
    font-size: 20px;
    letter-spacing: 1.5px;
    .blue{
        color:#5918df;
    }
    .yellow{
        color:#eeff31;
    }
    .dot{
        color: #3b3553;
    }
    .comment{
        color: #78707e
    }
    @media only screen and (max-width: 900px) {
        .dot{
            display: none;
        }
        font-size: 18px;

    }
    div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
`;
const StyledAboutMe = Styled.div`
    position: relative;
    border: 1px solid transparent;
    background-color: #14121c;
`;
const Blue = Styled.span`
     color:#5918df;
`;
const Red = Styled.span`
    color: #e3244c;
`;
const LightGreen = Styled.span`
    color: #24e394;
`;
const Green = Styled.span`
    display:flex;
    color: #24e33a;
    flex-wrap: wrap;
    &:div{
       display:flex; 
    }
`;
const Orange = Styled.span`
    color: #e39d24;
`;
const Yellow = Styled.span`
    color: #eeff31;
`;

function AboutMe() {
    return (
        <StyledAboutMe id="about">
            <Line></Line>
            <AboutMeText>
                <Heading>About</Heading>
                <div>
                    <span className="blue">class&nbsp;</span>
                    <span className="yellow">KaranMalhotra </span>
                    {"{"}
                </div>
                <div>
                    <span className="dot">....</span>
                    <span className="comment">
                        // I'm ambitious and love new challenges :)
                    </span>
                </div>
                <div>
                    <span className="dot">....</span>
                    <span className="comment">
                        // My variety of skills is continuously expanding.
                    </span>
                </div>
                <div>
                    <span className="dot">....</span>
                    <Yellow>constructor</Yellow>
                    {"() {"}
                </div>
                <div>
                    <span className="dot">........</span>
                    <Red>this</Red>.<LightGreen>name</LightGreen>
                    <Red>&nbsp;=&nbsp; </Red>
                    <Green>'Karan Malhotra'</Green>
                </div>
                <div>
                    <span className="dot">........</span>
                    <Red>this</Red>.<LightGreen>email</LightGreen>
                    <Red>&nbsp;=&nbsp; </Red>
                    <Green>'karanmalhotra9807@gamil.com'</Green>
                </div>
                <div>
                    <span className="dot">........</span>
                    <Red>this</Red>.<LightGreen>phoneNo</LightGreen>
                    <Red>&nbsp;=&nbsp;</Red>
                    <Orange>+91-9896873650</Orange>
                </div>
                <div>
                    <span className="dot">....</span>
                    {"}"}
                </div>
                <div>
                    <span className="dot">....</span>
                    <Yellow>skills</Yellow>()
                    {" {"}
                </div>
                <div>
                    <span className="dot">........</span>
                    <Blue>return</Blue>[
                    <Green>
                        <div>
                            <I name="html" /> 'HTML' ,
                        </div>
                        <div>
                            <I name="css" />
                            'CSS' ,
                        </div>
                        <div>
                            <I name="javascript" /> 'JS' ,
                        </div>
                        <I name="react" /> 'React' ,
                        <div>
                            <I name="redux" /> 'Redux' ,
                        </div>
                        <div>
                            <I name="bootstrap" /> 'Bootstrap' ,
                        </div>
                        <div>
                            <I name="node" /> 'Node.js' ,
                        </div>
                        <div>
                            <I name="express" />
                            'Express' ,
                        </div>
                        <div>
                            <I name="mongodb" />
                            'MongoDB'
                        </div>
                    </Green>
                    ]
                </div>
                <div>
                    <span className="dot">....</span>
                    <Yellow>tools</Yellow>()
                    {" {"}
                </div>
                <div>
                    <span className="dot">........</span>
                    <Blue>return</Blue>[
                    <Green>
                        <div>
                            <I name="git" /> 'Git' ,
                        </div>
                        <div>
                            <I name="npm" /> 'Npm'
                        </div>
                    </Green>
                    ]
                </div>
                <div>
                    <span className="dot">....</span>
                    {"}"}
                </div>
                <div>{"}"}</div>
            </AboutMeText>
        </StyledAboutMe>
    );
}

export default AboutMe;
