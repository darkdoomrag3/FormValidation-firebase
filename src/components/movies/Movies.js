import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie_DATA from './Movie.data'
import Preview from '../movie-preview/Preview';
import { Row, Col, Container } from 'react-bootstrap';

class Movies extends React.Component {
  constructor(props) {
  super(props)
this.state={
  collections : Movie_DATA
}

  }



  render() {

    const {collections} = this.state;

    return (
   
      <Container>
        <Row>
        {
          collections.map(({id ,...otherprops})=>(
            <Col xs="4">
          
          <Preview key={id} {...otherprops} />
            </Col>
         
          ))
        }
      
        </Row>
        </Container>
   
    )
  }

}

export default Movies;
