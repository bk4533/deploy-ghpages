import React from 'react';
import './contact.css';
import { Col } from 'react-bootstrap';
import { BiSolidUser,BiSolidCalendar,BiSolidMap,BiSolidPhone,BiSolidEnvelope } from "react-icons/bi";

const Card = (props) => {
    return (
        <>
            <Col lg={4} xs={6} className='Contact_row_col'>      
                {props.icon}
                <div className='Contact_box'>
                    <div className='Contact_box_title'>{props.title}</div>
                    <div className='Contact_box_detail'>{props.detail}</div>
                </div>
            </Col>
        </>
    );
};

export default Card;