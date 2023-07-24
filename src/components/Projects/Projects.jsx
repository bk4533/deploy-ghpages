import React from 'react';
import './projects.css';
import { Container, Row, Col } from 'react-bootstrap';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';


const Projects = () => {
    return (
        <div id='Projects'>
                <div className='Projects_title'>
                    PROJECTS   
                </div>
            <Container className='Project1'>
                <div className='Project_title1'>
                    이젠시네마   
                </div>
                <Row>
                     <Col className='project_imgbox1'>
                        <img src={project1} alt="img1" />
                     </Col>
                     <Col>
                        <div className='project_detail'>
                            <p>
                            이젠시네마는 Team EzenCinema의 팀원들이 수강했던 이젠아카데미컴퓨터학원의 EZEN 을 따서 만든 영화관 웹사이트이며,
                            이젠아카데미컴퓨터학원 김포캠퍼스 최초의 개발자반과 웹디자인반의 합작 프로젝트입니다.
                            </p>
                        </div>
                        <div className='project_content'>
                            <div className='project_content_box1'>
                                    <div className='project_content_box_title'>
                                        주요기능
                                    </div>
                                    <div className='project_content_box_detail'>
                                        <p>
                                        Docker 컨테이너로 MySQL, Tomcat 서버 실행
                                        <br/>
                                        MySQL과 연동하여 로그인, 회원가입, 프로필 수정 기능, 이미지 업로드, 영화 리뷰 등록, 영화 리뷰 좋아요 구현
                                        <br/>
                                        로그인 / 회원가입 / 아이디 비밀번호 찾기 구현
                                        <br/>
                                        카카오 / 네이버 / 구글 OAuth를 통한 싱크로 로그인 구현
                                        <br/>
                                        Oracle Cloud 발신 전용 전자 메일 구성
                                        <br/>
                                        Java로 메일 인증 코드 전송 및 JavaScript로 인증 구현
                                        <br/>
                                        Docker 컨테이너 Nginx Proxy Manager를 이용하여 프록시,  SSL 연결 (HTTPS)
                                        <br/>
                                        영화 예매기능 구현
                                        <br/>
                                        스토어 장바구니 및 구매 기능 구현
                                        <br/>
                                        실 사용자 피드백 반영 중 (메인페이지 패치노트 팝업)
                                        </p>
                                    </div>
                            </div>
                            <div className='project_content_box2'>
                                <div className='project_content_box_title'>
                                    GitHub
                                </div>
                                <div className='project_content_box_detail'>
                                    <a target={'_blank'} href="https://github.com/in1913/ezenCinema">github.com/in1913/ezenCinema</a>
                                </div>
                            </div>
                            <div className='project_content_box3'>
                                <div className='project_content_box_title'>
                                    URL
                                </div>
                                <div className='project_content_box_detail'>
                                    <a target={'_blank'} href="https://ezencinema.com/ezenCine/">ezencinema.com/ezenCine/</a>
                                </div>
                            </div>
                            <div className='project_content_box4'>
                                <div className='project_content_box_title'>
                                    SKILLS
                                </div>
                                <div className='project_content_box_detail'>
                                    <p>
                                        JAVA,CSS3,JAVASCRIPT,JQUERY,ORACLE CLOUD,MYSQL
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='Project2'>
                <div className='Project_title1'>
                    CGV   
                </div>
                <Row>
                     <Col className='project_imgbox1'>
                        <img src={project2} alt="img2" />
                     </Col>
                     <Col>
                        <div className='project_detail'>
                            <p>
                                CGV-Project Clone 프로젝트입니다. 
                                협업으로 CGV 영화사이트를 보고 만드는 작업을 하였습니다.
                            </p>
                        </div>
                        <div className='project_content'>
                            <div className='project_content_box1'>
                                    <div className='project_content_box_title'>
                                        주요기능
                                    </div>
                                    <div className='project_content_box_detail'>
                                        <p>
                                            메인,영화,예매,스토어,혜택페이지 템플릿 제작
                                            

                                        </p>
                                    </div>
                            </div>
                            <div className='project_content_box2'>
                                <div className='project_content_box_title'>
                                    GitHub
                                </div>
                                <div className='project_content_box_detail'>
                                    <a target={'_blank'} href="https://github.com/jgj9805/CGV-Project">github.com/jgj9805/CGV-Project</a>
                                </div>
                            </div>
                            <div className='project_content_box4'>
                                <div className='project_content_box_title'>
                                    SKILLS
                                </div>
                                <div className='project_content_box_detail'>
                                    <p>
                                        JAVA,CSS3,JAVASCRIPT,JQUERY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='Project3'>
                <div className='Project_title1'>
                timelady   
                </div>
                <Row>
                     <Col className='project_imgbox1'>
                        <img src={project3} alt="img1" />
                     </Col>
                     <Col>
                        <div className='project_detail'>
                            <p>
                            여성옷 쇼핑몰인 [timelady]와 몇가지 쇼핑몰을 결합하여 만든 쇼핑몰 웹 페이지 입니다.
                            </p>
                        </div>
                        <div className='project_content'>
                            <div className='project_content_box1'>
                                    <div className='project_content_box_title'>
                                        주요기능
                                    </div>
                                    <div className='project_content_box_detail'>
                                        <p>
                                        상품 이름 / 가격 / 색상 등이 저장된 JSON파일을 활용하여 상품내용 출력
                                        <br/>
                                        JSON 데이터 호출 및 상품 구매페이지 구현을 위한 비동기식 처리
                                        </p>
                                    </div>
                            </div>
                            <div className='project_content_box2'>
                                <div className='project_content_box_title'>
                                    GitHub
                                </div>
                                <div className='project_content_box_detail'>
                                    <a target={'_blank'} href="https://github.com/bk4533/timelady">github.com/bk4533/timelady</a>
                                </div>
                            </div>
                            <div className='project_content_box4'>
                                <div className='project_content_box_title'>
                                    SKILLS
                                </div>
                                <div className='project_content_box_detail'>
                                    <p>
                                    HTML5,CSS3,BOOTSRTAP,JAVASCRIPT,JSON
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;