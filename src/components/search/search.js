import React from 'react'

import ReactSearchBox from 'react-search-box'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './search.style.scss';

export default class Search extends React.Component {
    constructor() {
        super()

    }

    data = [
        {
            key: 'emad',
            value: 'bey',
        },
        {
            key: 'jane',
            value: 'Jane Doe',
        },
        {
            key: 'mary',
            value: 'Mary Phillips',
        },
        {
            key: 'robert',
            value: 'Robert',
        },
        {
            key: 'karius',
            value: 'Karius',
        },

        {
            key: 'lol',
            value: 'Bay',
        },

    ]

    render() {
        return (
            <>

                <Container>

                    <Row>
                        <Col xs={10}>

                            <div className='search'>
                               
                                <ReactSearchBox

                                    placeholder="Search movie"
                                    value=""
                                    data={this.data}
                                    callback={record => console.log(record)}
                                />
                             
                            </div>
                        
                        </Col>
                        <Col xs={2} className='search'>

                        <Button variant="outline-danger" style={{ color: '#fcfcff' }}>Search</Button>

                        </Col>
                        
                      
                   
                   
                    </Row>
                </Container>

            </>
        );
    }
};