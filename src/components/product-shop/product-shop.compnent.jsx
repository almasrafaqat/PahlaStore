import {
  ArrowRightIcon,
  CheckIcon,
  Column,
  Container,
  FilterBrand,
  FilterCategory,
  FilterItem,
  FilterList,
  FilterSearch,
  ProductsContainer,
  Row,
  SearchIcon,
  SearchInput,
  ShopPageContainer,
  SidebarContainer,
  SubFilterItem,
  SubFilterList,
  Wrapper,
} from "./product-shop.style";
import BasicBreadcrumbs from "../breadcrumb/breadcrumb.component";
import { BreadCrumbsContainer } from "../../GlobalStyle";
import { ArrowBack, ArrowRight, KeyboardArrowRight } from "@mui/icons-material";

const ShopProduct = () => {
  const HeightHanlder = (event) => {
    let SubItems = event.target.nextSibling;
    if (SubItems.style.maxHeight) {
      SubItems.style.maxHeight = null;
    } else {
      SubItems.style.maxHeight = SubItems.scrollHeight + "px";
    }
  };

  return (
    <Container>
      <Wrapper>
        <Row>
          <BreadCrumbsContainer>
            <BasicBreadcrumbs category="mens" link="/shop" />
          </BreadCrumbsContainer>
        </Row>

        <Row>
          <Column width="25%">
            <SidebarContainer>
              <h2>Filter by:</h2>
              <FilterSearch>
                <FilterItem onClick={HeightHanlder}>
                  <FilterList>
                    <ArrowRightIcon /> Search
                  </FilterList>
                  <SubFilterItem search>
                    <SubFilterList search>
                      <SearchIcon />
                      <SearchInput placeholder="Search the Product" />
                    </SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterSearch>
              <FilterCategory>
                <FilterItem onClick={HeightHanlder}>
                  <FilterList>
                    <ArrowRightIcon />
                    Category
                  </FilterList>
                  <SubFilterItem category>
                    <SubFilterList>All</SubFilterList>
                    <SubFilterList active>Smartphone</SubFilterList>
                    <SubFilterList>Electronics</SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterCategory>

              <FilterBrand>
                <FilterItem onClick={HeightHanlder}>
                  <FilterList>
                    <ArrowRightIcon /> Brand
                  </FilterList>
                  <SubFilterItem brand>
                    <SubFilterList>Dell</SubFilterList>
                    <SubFilterList>HP</SubFilterList>
                    <SubFilterList active>Leonova</SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterBrand>

              <FilterBrand>
                <FilterItem onClick={HeightHanlder}>
                  <FilterList>
                    <ArrowRightIcon /> Color
                  </FilterList>
                  <SubFilterItem color>
                  <SubFilterList>
                      All
                    </SubFilterList>
                    <SubFilterList activeColor color="black">
                      <CheckIcon />
                    </SubFilterList>
                    <SubFilterList color="red"></SubFilterList>
                    <SubFilterList color="red"></SubFilterList>
                    <SubFilterList color="yellow"></SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterBrand>
            </SidebarContainer>
          </Column>
          <Column>
            <ShopPageContainer>
              <ProductsContainer>
                <h2>Products:</h2>
                {/* Iterate over products here */}
              </ProductsContainer>
            </ShopPageContainer>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default ShopProduct;
