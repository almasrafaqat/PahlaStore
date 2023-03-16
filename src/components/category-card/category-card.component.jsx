import { Link } from "../../GlobalStyle"
import { CategoryContainer, Image, ImageContainer, InfoContainer, Text, Title } from "./category-card.style"




const CategoryCard = ({ category }) => {
    return (
        <CategoryContainer key={category.id} bg={category.bg}>
            <ImageContainer>
                <Image src={category.imageUrl} />
            </ImageContainer>
            <InfoContainer>
                <Title>
                    <Link>{category.title}</Link>
                </Title>
            </InfoContainer>
            <Text>{category.items} Items</Text>
        </CategoryContainer>
    )
}

export default CategoryCard