import React from 'react'
import './collection.style.scss';
import { Container, Row, Col } from 'react-bootstrap';
const CollectionMovie = ({ id, name, price, imageUrl }) => {
    return (


        <Container>
            <div className='collection-item'>

                <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}>

                </div>
                <span className='price' >{name}</span>
                <span className='price' >${price}</span>
            </div>

        </Container>

    )
}

export default CollectionMovie
