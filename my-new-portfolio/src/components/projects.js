import React from 'react';
import styled from "styled-components";

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
    height: 14vw;
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
                <div id="projects" className="box">
                    <h3>Github Rabbit Hole</h3>
                    <a href="https://githubrabbithole.now.sh/" target="_blank">(Check It Out Here)</a>
                    <h4>(HTML, React, Javascript)</h4>
                </div>
                <div className="box">
                    <h3>Pintereach</h3>
                    <a href="https://github.com/BuildWeek-Pintereach/FrontEnd" target="_blank">(See Github Repo)</a>
                    <h4>(HTML, React, Javascript)</h4>
                </div>
                <div className="box">
                    <h3>React Wars</h3>
                    <a href="https://github.com/bteague92/Sprint-Challenge-React-Wars" target="_blank">(See Github Repo)</a>
                    <h4>(HTML, Javascript)</h4>
                </div>
                <div className="box">
                    <h3>Car Sales</h3>
                    <a href="https://github.com/bteague92/Car-Sales" target="_blank">(See Github Repo)</a>
                    <h4>(Redux, React, Javascript)</h4>
                </div>
            </Container >
        </div>
    )
}

export default Projects;