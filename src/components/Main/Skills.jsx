import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './skills.css'


const Skills = () => {
    return (
        <div id='Skills'>
            <Container>
                <div className='Skills_title'>
                    SKILLS   
                </div>
                <Row>
                    <Col lg={6} xs={12} className='Front-End'>
                        <h3>Front-End</h3>
                        <div className="Front-End_img">
                            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/>
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
                            <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jQuery&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white" />
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className='Back-End'>
                        <h3>Back-End</h3>
                        <div className="Back-End_img">
                            <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Conda-Forge&logoColor=white" />
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className='Database'>
                        <h3>Database</h3>
                        <div className="Database_img">
                            <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className='Tools'>
                        <h3>Tools</h3>
                        <div className="Tools_img">
                        <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat&logo=EclipseIDE&logoColor=white" />
                            <img src="https://img.shields.io/badge/Spring Tool Suite-6DB33F?style=flat&logo=Spring&logoColor=white" />
                            <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=VisualStudioCode&logoColor=white" />
                            <img src="https://img.shields.io/badge/Tomcat-F8DC75?style=flat&logo=ApacheTomcat&logoColor=white" />
                            <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;