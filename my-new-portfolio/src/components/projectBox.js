import React from 'react';
import Data from "./../data/data.js";

const ProjectBox = props => {
    return (
        <div id="projects" className="box">
            <h3>{props.name}</h3>
            <a href="Data.link" target="_blank">(Check It Out Here)</a>
            <h4>{props.techUsed}</h4>
            <h3>Team size: {props.teamSize}</h3>
            <h3>{props.description}</h3>
        </div>
    );
};

export default ProjectBox;