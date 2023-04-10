import React from 'react'
import { Box, Container, Heading, Row, Wrapper } from './product-related.style'
import { Products } from '../../data'
import ProductCard from '../product-card/product-card.component'

const ProductRelated = () => {
    return (
        <Container>
            <Wrapper>
                <Box>
                    <Heading>Related Products</Heading>
                    <Row>
                        {Products?.slice(0, 5).map((product) => <ProductCard product={product} />)}

                    </Row>
                </Box>

            </Wrapper>
        </Container>
    )
}

export default ProductRelated