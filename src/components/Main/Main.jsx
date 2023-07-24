import React from 'react';
import Whois from './Whois';
import Skills from './Skills';
import './main.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import BackgroundImg from '../../img/main.jpg';


const Mains = styled.div`
    position: relative;
    width: 100%;
    height: 750px;
    background: linear-gradient(180deg,rgba(15, 15, 15, 0.8) 0,rgba(0, 0, 0, 0.6) 100%)
                ,url(${BackgroundImg}) 50% no-repeat;
    background-size: cover;
`

const Main = () => {
    return (
        <>
        <Mains>
            <Container>
                    <div className='main_title'>
                        <span>프론트엔드 개발자 포트폴리오</span>
                    </div>
                    <div className='main_line'></div>
                    <div className='main_content'>
                        <p>안녕하세요.</p>
                        <br/>
                        <p>프론트엔드 개발자가 되고 싶은 김병기입니다.</p>
                        <br/>
                        <p>잘부탁드립니다 ♥</p>
                    </div>
            </Container>
        </Mains>
            <Whois/>
            <Skills/>
        </>
    );
};

export default Main;