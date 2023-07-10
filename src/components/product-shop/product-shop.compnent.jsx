import {
  ArrowRightIcon,
  CheckIcon,
  Column,
  Container,
  FilterBrand,
  FilterCategory,
  FilterColor,
  FilterItem,
  FilterList,
  FilterPrice,
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

import RangeSlider from "../range-slider/range-slider.component";
import { useState } from "react";


const ShopProduct = () => {
  
  const [filterName, setFilterName] = useState(["search", "category", "brand", "color", "price"]);



  const HeightHanlder = (event) => {
    /** gettting filter text value */
    const getFilterName = event.target.innerText;
    let lowercasetext = getFilterName.toLowerCase(); //To convert Lower Case

    let SubItems = event.target.nextSibling;

    if (SubItems.style.maxHeight) {

      // SubItems.style.maxHeight = null;

      SubItems.style.maxHeight = "10px";

      /** remove an array of filter name text */
      if (filterName.includes(lowercasetext)) {
        setFilterName((prevState) =>
          prevState.filter((prevItem) => prevItem !== lowercasetext)
        );
      }
    } else {
      SubItems.style.maxHeight = SubItems.scrollHeight + "px";

      /** add an array of filter name text */
      setFilterName([...filterName, lowercasetext]);
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
              <FilterSearch onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("search") ? "90deg" : 0
                        })`,
                      }}
                    />{" "}
                    Search
                  </FilterList>
                  <SubFilterItem search style={{maxHeight: "100%"}}>
                    <SubFilterList search>
                      <SearchIcon />
                      <SearchInput placeholder="Search the Product" />
                    </SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterSearch>
              <FilterCategory onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("category") ? "90deg" : "0"
                        })`,
                      }}
                    />
                    Category
                  </FilterList>
                  <SubFilterItem category style={{maxHeight: "100px"}}>
                    <SubFilterList>All</SubFilterList>
                    <SubFilterList active>Smartphone</SubFilterList>
                    <SubFilterList>Electronics</SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterCategory>

              <FilterBrand onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("brand") ?  "90deg" : "0"
                        })`,
                      }}
                    />{" "}
                    Brand
                  </FilterList>
                  <SubFilterItem brand style={{maxHeight: "100%"}}>
                    <SubFilterList>Dell</SubFilterList>
                    <SubFilterList>HP</SubFilterList>
                    <SubFilterList active>Leonova</SubFilterList>
                  </SubFilterItem>
                </FilterItem>
              </FilterBrand>

              <FilterColor onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("color") ? "90deg" : "0"
                        })`,
                      }}
                    />{" "}
                    Color
                  </FilterList>
                  <SubFilterItem color style={{maxHeight: "100%"}}>
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
              <FilterPrice onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("price") ? "90deg" : "0"
                        })`,
                      }}
                    />{" "}
                    Price
                  </FilterList>
                  <SubFilterItem price style={{maxHeight: "100%"}}>
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
