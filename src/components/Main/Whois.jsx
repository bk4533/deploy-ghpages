import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hero1 from '../../img/hero1.jpg';
import hero2 from '../../img/hero2.png';
import './whois.css';

const Whois = () => {
    return (
        <div className='Whois'>
            <Container>
                <div className='Whois_title'>
                    Who is beang gi ?!   
                </div>
                <Row>
                    <Col lg={6} xs={12}>
                        <img className='hero1_img' src={hero1} alt="이미지 1번" />
                    </Col>
                    <Col lg={6} xs={12}>
                        <div className='hero1_title'>
                            <h4>새로운 것에 도전하다 !</h4>
                            <h3>개발자가 된 계기 !</h3>
                        </div>
                        <div className='hero_line'/>
                        <div className='hero1_detail'>
                            <p>
                                새로운 것을 창작하고 만드는 것을 좋아합니다 !
                            </p>
                            <p>
                                지인을 통해 개발자직업을 알았고 개발공부에 흥미를 느끼고 공부를 시작하게 되었습니다 !
                            </p>
                            <p>
                                학원과정중 팀프로젝트를 하게 되었고 프론트엔드 작업을 맡았는데 매력을 느끼고 프론트엔드 개발자의 길을 걷게 되었습니다 !
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className='hero2'>
                    <Col lg={6} xs={12}>
                        <div className='hero2_title'>
                            <h4>빠르게 성장하는 개발자 !</h4>
                            <h3>배움에 대한 열정 !</h3>
                        </div>
                        <div className='hero_line'/>
                        <div className='hero2_detail'>
                            <p>
                                학원 학생들과 스터디 그룹을 만들어 정보를 공유 했습니다.
                            </p>
                            <p>
                                매주 일요일 현직자들과 스터디 그룹을 만들어 생소했던 언어들과 부족한 스킬들을 보완하는 시간을 가지고 있습니다.
                            </p>
                            <p>
                                개인으로 강의를 구매해 계속해서 배워나아가고 있습니다.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className='hero2_img' src={hero2} alt="이미지 2번" />
                    </Col>
                </Row>
                {/* <Row>
                    <Col lg={6}>
                        <img className='hero3_img' src={hero3} alt="이미지 3번" />
                    </Col>
                    <Col lg={6}>
                        <div className='hero3_title'>
                            <h4>빠르게 성장하는 개발자 !</h4>
                            <h3>배움에 대한 열정 !</h3>
                        </div>
                        <div className='hero_line'/>
                        <div className='hero3_detail'>
                            <p>
                                호기심이 많고 새로운 기술을 배우는 것을 좋아합니다.
                            </p>
                            <p>
                                호기심이 많고 새로운 기술을 배우는 것을 좋아합니다.
                            </p>
                            <p>
                                호기심이 많고 새로운 기술을 배우는 것을 좋아합니다.
                            </p>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
};

export default Whois;