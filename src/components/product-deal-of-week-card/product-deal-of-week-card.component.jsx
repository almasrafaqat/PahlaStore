import React from 'react'
import FormatPrice from '../../helpers/FormatPrice'
import { Available, Card, Image, ImageContainer, InfoContainer, Input, Price, PriceContainer, ProgressBar, ProgressContainer, SoldOut, StockContainer, TagContainer, Text, Title } from './product-deal-of-week-card.style'

const ProductDealCard = () => {
  return (
    <Card>
        <TagContainer>
            <Text>15%</Text>
        </TagContainer>
        <ImageContainer>
            <Image src="/images/products/iphone.png" />
        </ImageContainer>
        <InfoContainer>
            <Title>Berst Iphone of the 2023</Title>
            <PriceContainer>
                <Price>
                    <FormatPrice price="2500" />
                </Price>
            </PriceContainer>
            <StockContainer>
                <SoldOut>Sold 25</SoldOut>
                <Available> Available 25</Available>
            </StockContainer>
            <ProgressContainer>
            <ProgressBar width="15">35</ProgressBar>

            </ProgressContainer>
        </InfoContainer>
    </Card>
  )
}

export default ProductDealCard