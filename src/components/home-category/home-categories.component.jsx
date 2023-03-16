import { Categories } from "../../data";
import CategoryCard from "../category-card/category-card.component";
import {
  Box,
  Container,
  Heading,
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
              <CategoryCard key={category.id} category={category} />
            );
          })}
        </Box>
      </Wrapper>
    </Container>
  );
};

export default HomeCategories;
