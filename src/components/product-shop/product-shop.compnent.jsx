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
import { useRef } from "react";

const ShopProduct = () => {
  const ref = useRef();
  const [filterName, setFilterName] = useState([]);

  const NavActiveHandler = (event) => {
    if (filterName.includes(event)) {
      setFilterName((prevState) =>
        prevState.filter((prevItem) => prevItem !== event)
      );
    } else {
      setFilterName([...filterName, event]);
    }
  };

  const HeightHanlder = (event) => {
    /** gettting filter text value */
    const getFilterName = event.target.innerText;
    let lowercasetext = getFilterName.toLowerCase(); //To convert Lower Case

    let SubItems = event.target.nextSibling;

    if (SubItems.style.maxHeight) {
      SubItems.style.maxHeight = null;

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
                  <SubFilterItem search>
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
                          filterName.includes("category") ? "90deg" : 0
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

              <FilterBrand onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("brand") ? "90deg" : 0
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

              <FilterColor onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("color") ? "90deg" : 0
                        })`,
                      }}
                    />{" "}
                    Color
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
              <FilterPrice onClick={HeightHanlder}>
                <FilterItem>
                  <FilterList>
                    <ArrowRightIcon
                      style={{
                        transition: "all 0.5s ease",
                        transform: `rotate(${
                          filterName.includes("price") ? "90deg" : 0
                        })`,
                      }}
                    />{" "}
                    Price
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
