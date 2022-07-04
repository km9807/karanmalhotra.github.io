import Styled from "styled-components";
import React from "react";
export const Line = Styled.div`
    position: absolute;
    left: 10%;
    top: 0;
    bottom:0;
    width:0px;
    border-left: 2px solid #5918df;
`;
export const RightContainer = Styled.div`
    margin-left: calc(10% + 20px);
    margin-right: 10%;
`;
export const Heading = Styled.div`
    color: #988e9f;
    font-weight: 300;
    margin:20px 0;
    font-size: 18px;
    position: relative;
    &: before{
        content:"";
        position: absolute;
        top: 50%;
        left: -25px;
        width: 10px;
        height: 10px;
        transform: translateY(-50%);
        border-radius: 50%;
        border: 2px solid #5918df;
        background-color: #0f0d16;
    }
    &:after {
        content:"/>";
    }
`;

export const Icon = Styled.img`
    height: 40px;
    margin: 0 10px;
`;

export function I(props) {
    let { name } = props;
    return <Icon src={`./images/icons/${name}.svg`} />;
}
