import React from 'react'
import CollectionMovie from '../collection-movie/collection-movie'
import { Container, Row, Col } from 'react-bootstrap';

const Preview = ({ title, items }) => {
    
 
//https://stackoverflow.com/questions/39455224/is-it-possible-to-map-only-a-portion-of-an-array-array-map

    return (
        <div>

            {

                items.filter((item, idx) => idx < 4).map(({ id, ...otherCollectionProps }) => (

                    <Container>
                        <Row>

                            <Col xs={12}>
                                <CollectionMovie key={id} {...otherCollectionProps} /></Col>
                        
                        </Row>

                    </Container>


                )
                )

            }


        </div>
    )
}

export default Preview;



