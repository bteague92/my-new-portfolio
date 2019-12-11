import React from 'react';
import styled from "styled-components";

const Container = styled.div`
.sectionRight {
    display: flex;
    justify-content: flex-end;

    .middleSectionTwo {
      .display(row, space-around, center);
      width: 80%;
      background: rgb(0, 50, 128);
      padding: 2vw;
      margin: 2% 0 5% 0;
      box-shadow: -1.5vw 1.5vw 5px black;
      border-radius: 25px 0 0 25px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      
      .skills {
        color: white;
        width: 100%;
        display: flex;
        flex-direction: column;

        .sectionHeader {
          .display(row, center, center);
          h2 {
            font-size: 2.9vw;
            border-bottom: 0.1vw solid white;
            margin: 1% auto;
            text-align: center;
            
          }
        }
        .sectionText {
          display: flex;
          justify-content: space-around;

          ul {
            margin: 1% auto;
            .display(column, flex-start, flex-start);
            li {
              font-size: 2.1vw;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;

const Skills = (props) => {
  return (
    <Container>
      <div className="sectionRight">
        <section id="skills" className="middleSectionTwo">
          <div className="skills">
            <div className="sectionHeader">
              <h2>Skills</h2>
            </div>
            <div className="sectionText">
              <ul>
                <li>Adobe Iluustrator</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>NodeJs</li>
                <li>SQLite</li>
              </ul>
              <ul>
                <li>Preprocessors(LESS, SCSS, etc.)</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Skills;