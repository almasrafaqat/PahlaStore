import {
  ArrowRightIcon,
  CheckIcon,
  Column,
  Container,
  FilterBrand,
  FilterCategory,
  FilterColor,
  FilterInputPrice,
  FilterItem,
  FilterList,
  FilterPrice,
  FilterPriceInput,
  FilterPriceValue,
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
import {
  ArrowBack,
  ArrowLeft,
  ArrowRight,
  KeyboardArrowRight,
} from "@mui/icons-material";
import RangeSlider from "../range-slider/range-slider.component";
import { useState } from "react";

const ShopProduct = () => {
  const [isNavActive, setNavActive] = useState(false);
  const [filterName, setFilterName] = useState({name: "", value: false});

  const NavActiveHandler = (event) => {
    // setNavActive((current) => !current);

    setFilterName({name: event, value: true});

    console.log(filterName);

   
  };

  const HeightHanlder = (event) => {
    let SubItems = event.target.nextSibling;
    if (SubItems.style.maxHeight) {
      SubItems.style.maxHeight = null;
      console.log(event.name);
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
                  <FilterList
                    onClick={() => NavActiveHandler("category")}
                    name="cat"
                  >
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.value && filterName.name === "category"  ? "90deg" : 0
                        })`,
                      }}
                    />
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
                <FilterItem onClick={HeightHanlder} name="brand">
                  <FilterList onClick={() => NavActiveHandler("brand")}>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                           filterName === "brand" ? "90deg" : 0
                        })`,
                      }}
                    />{" "}
                    Brand
                  </FilterList>
                  <SubFilterItem brand>
                    <SubFilterList>Dell</SubFilterList>
                    <SubFilterList>HP</SubFilterList>
                    <SubFilterList active>Leonova</SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterBrand>

              <FilterColor>
                <FilterItem onClick={HeightHanlder}>
                  <FilterList onClick={NavActiveHandler} name="category">
                    <ArrowRightIcon /> Color
                  </FilterList>
                  <SubFilterItem color>
                    <SubFilterList>All</SubFilterList>
                    <SubFilterList activeColor color="black">
                      <CheckIcon />
                    </SubFilterList>
                    <SubFilterList color="red"></SubFilterList>
                    <SubFilterList color="red"></SubFilterList>
                    <SubFilterList color="yellow"></SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterColor>
              <FilterPrice>
                <FilterItem onClick={HeightHanlder}>
                  <FilterList onClick={NavActiveHandler} name="price-range">
                    <ArrowRightIcon /> Price
                  </FilterList>
                  <SubFilterItem price>
                    <SubFilterList>
                      <RangeSlider min="0" max="5000" />
                    </SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterPrice>
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
