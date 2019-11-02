import React from 'react';
import styled from "styled-components";

const Container = styled.div`
.sectionRight {
    display: flex;
    justify-content: flex-end;

    .middleSectionTwo {
      .display(row, space-around, center);
      width: 80%;
      background: rgb(39, 77, 128);
      padding: 2vw;
      margin: 2% 0;
      box-shadow: -1.5vw 1.5vw 5px grey;
      border-radius: 25px 0 0 25px;
      
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
            <div class="sectionRight">
                <section id="skills" class="middleSectionTwo">
                    <div class="skills">
                        <div class="sectionHeader">
                            <h2>Skills</h2>
                        </div>
                        <div class="sectionText">
                            <ul>
                                <li>Adobe Iluustrator</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <ul>
                                <li>Preprocessors(LESS, SCSS, etc.)</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default Skills;