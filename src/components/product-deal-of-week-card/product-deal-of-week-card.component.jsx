import React from 'react'
import { Link } from '../../GlobalStyle'
import FormatPrice from '../../helpers/FormatPrice'
import { Available, Bold, Card, DealEndsContainer, Image, ImageContainer, InfoContainer, Price, PriceContainer, ProgressBar, ProgressContainer, SoldOut, StockContainer, TagContainer, Text, Title } from './product-deal-of-week-card.style'

const ProductDealCard = ({ product }) => {
    return (
        <Card>
            <TagContainer>
                <Text>15%</Text>
            </TagContainer>
            <ImageContainer>
                <Link>
                    <Image src={product.imageUrl} />
                </Link>
            </ImageContainer>

            <InfoContainer>
                <Link> <Title>{product.title.slice(0, 40)} </Title> </Link>
                <PriceContainer>
                    <Price>
                        <FormatPrice price={product.discount} />
                    </Price>
                </PriceContainer>
                <StockContainer>
                    <SoldOut>Sold <Bold>35</Bold></SoldOut>
                    <Available> Available <Bold>{product.stock}</Bold></Available>
                </StockContainer>
                <ProgressContainer>
                    <ProgressBar width={product.stock}>35</ProgressBar>
                </ProgressContainer>
                <DealEndsContainer>
                    Ends in : <Bold>{product.dealends} Days</Bold>
                </DealEndsContainer>
            </InfoContainer>
        </Card>
    )
}

export default ProductDealCard