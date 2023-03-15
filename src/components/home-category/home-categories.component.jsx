import { Categories } from "../../data";
import { Link } from "../../GlobalStyle";
import {
  Box,
  CategoryContainer,
  Container,
  Heading,
  Image,
  ImageContainer,
  InfoContainer,
  Text,
  Title,
  Wrapper,
} from "./home-categories.style";

const HomeCategories = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Featured Categories</Heading>
        <Box>
          {Categories.map((category) => {
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
            );
          })}
        </Box>
      </Wrapper>
    </Container>
  );
};

export default HomeCategories;
