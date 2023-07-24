import React from 'react';
import { Container, Row} from 'react-bootstrap';
import './contact.css';
import Card from './Card';
import data from '../../data/api';

const Aboutme = () => {
    return (
        <div className='Contact'>
        <Container>
            <Row className='Contact_row'>
                {data.map((dt, index)=>{
                    return <Card key={index} icon={dt.icon} title={dt.title} detail={dt.detail}/>
                })}
            </Row>
        </Container>
    </div>
    );
};

export default Aboutme;