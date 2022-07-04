import { Heading, Line, RightContainer } from "./StyledComponents";

import ProjectCard from "./ProjectCard";
import React from "react";
import Styled from "styled-components";
import projectData from "./projectsData.json";

const StyledProjects = Styled.div`
    background:linear-gradient(#191426,#0f0d16);
    position: relative;
    min-height: 950px;
    border: 1px solid #00000000;
`;

function Projects() {
    let locations = [
        { top: "80px", left: "12%" },
        { top: "380px", left: "34%" },
        { top: "80px", right: "8%" },
        { top: "680px", left: "12%" },
        { top: "680px", right: "8%" }
    ];
    return (
        <StyledProjects id="projects">
            <Line></Line>
            <RightContainer>
                <Heading>Projects</Heading>
            </RightContainer>
            <RightContainer>
                {projectData?.map((project, index) => (
                    <ProjectCard
                        data={project}
                        location={locations[index]}
                        key={project.name}
                    />
                ))}
            </RightContainer>
        </StyledProjects>
    );
}

export default Projects;
