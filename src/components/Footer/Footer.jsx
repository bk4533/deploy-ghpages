import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiLogoGithub,BiLogoInstagram } from "react-icons/bi";
import './footer.css';


const Footer = () => {
    return (
        <div className='Footer'>
            <Container>
                <div className='footer_icons'>
                    <a href="https://github.com/bk4533"><BiLogoGithub/></a> 
                    <a href="https://www.instagram.com/baeng_gi/"><BiLogoInstagram/></a> 
                </div>
                <div className='footer_content'>
                    <p>© 2023. kim byeong gi. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;