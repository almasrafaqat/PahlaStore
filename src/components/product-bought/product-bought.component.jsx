import React from 'react'
import { Box, Container, Heading, Row, Wrapper } from './product-bought.style'
import ProductCard from '../product-card/product-card.component'
import { Products } from '../../data'

const ProductBought = () => {
    return (
        <Container>
            <Wrapper>
                <Box>
                    <Heading>Customers who bought this item also bought</Heading>
                    <Row>
                        {Products?.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}

                    </Row>
                </Box>

            </Wrapper>
        </Container>
    )
}

export default ProductBought