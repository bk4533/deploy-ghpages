import React from 'react';
import './aboutme.css';
import Contact from './Contact';
import { Container, Row, Col } from 'react-bootstrap';
import meimg from '../../img/me.jpg';

const Aboutme = () => {
    return (
        <div id='Aboutme'>
            <Container>
                <div className='Aboutme_title'>
                    ABOUTME   
                </div>
                <Row>
                    <Col>
                        <div className='myimg'>
                            <img src={meimg} alt="프로필"/>
                        </div>
                    </Col>
                    <Col>
                        <div className='about_detail'>
                            <p>
                                이젠아카데미컴퓨터학원 Java 풀스택 웹 개발자 과정을 수료하였습니다.
                                학원 과정중 팀 프로젝트로 '이젠시네마' 웹페이지 개발 프로젝트에 참여했습니다.
                                팀구성은 디자이너 3명, 프론트엔드 개발자 1명, 백엔드 개발자 3명으로 구성되었고,  
                                프론트엔드 개발자로서 주로 화면 구현과 디자이너와의 소통을 통한 기능 구현에 집중했습니다. 
                                프로젝트 완성 후에는 오류 수정과 메인 페이지 및 상세 페이지에 slick.js 라이브러리를 사용한 
                                슬라이드 기능 구현 등의 경험을 얻을 수 있었습니다.
                                <br/>
                                <br/>
                                학원 수료이전에 이전에 보안 업체에서 2년 7개월 동안 관리자로 근무한 경험이 있습니다. 
                                그 동안 많은 사람들과 상호작용하고, 팀 내에서 사원들을 관리하는 업무를 맡았습니다. 
                                서비스직의 특성상 많은 사람들과 직접 소통하면서 고객들의 요구를 이해하고 처리해야했습니다. 
                                또한, 사원들이 업무를 원활하게 수행할 수 있도록 지원하고 도움을 주는 역할을 맡았습니다.
                            </p>
                            <p>

                            </p>
                        </div>
                    </Col>
                </Row>             
            </Container>
            <Contact/>
        </div>
    );
};

export default Aboutme;