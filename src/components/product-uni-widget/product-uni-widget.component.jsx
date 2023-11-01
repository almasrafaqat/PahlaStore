import React from 'react'
import { ArrowContainer, ArrowLeft, ArrowRight, Box, Container, Header, Heading, MegaBox, ProductContainer, Wrapper } from './product-uni-widget.style';

const ProductUniWidgets = ({title, product}) => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Header>
            <Heading>{title}</Heading>
          </Header>
          <MegaBox>
            
            <ProductContainer>
              <ArrowContainer
                direction="left"
                
              >
                <ArrowLeft />
              </ArrowContainer>
              

              <ArrowContainer
                direction="right"
                
              >
                <ArrowRight />
              </ArrowContainer>
            </ProductContainer>
          </MegaBox>
        </Box>
      </Wrapper>
    </Container>
  )
}

export default ProductUniWidgets;