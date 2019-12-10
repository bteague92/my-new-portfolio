import React from 'react';
import styled from "styled-components";
import Data from "./../data/data.js";
import ProjectBox from "./projectBox.js"

const ProjectHeader = styled.h1`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
color: white;
font-size: 5vw;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-bottom: 40px;
margin-top: 40px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    border-radius: 20px;
    box-shadow: 1.5vw 1.5vw 5px black;
    background: rgb(0, 50, 128);
    margin: 3%;
    text-align: center;
    color: white;
    padding: 1.5vw;

    h3{
        font-size: 2.6vw;
        margin: 0 0 1vw 0;
    }

    a{
        color: rgb(60, 200, 200);
        margin: 0.3vw;
        text-decoration: none;
        font-size: 2vw;
    }

    h4{
        font-size: 1.5vw;
    }
}
`;

const Projects = (props) => {
    return (
        <div>
            <ProjectHeader>PROJECTS:</ProjectHeader>
            <Container>
                {Data.map(i => {
                    return(
                        <ProjectBox techUsed={i.techUsed} name={i.name} teamSize={i.teamSize} description={i.decription} link={i.link} />
                    )
                })}
            </Container >
        </div>
    )
}

export default Projects;