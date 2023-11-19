import {
  Column,
  Container,
  PaginationContainer,
  ProductsContainer,
  Row,
  ShopPageContainer,
  SidebarContainer,
  SortByOrder,
  SortCountProduct,
  SortProductContainer,
  Wrapper,
} from "./product-shop.style";
import BasicBreadcrumbs from "../breadcrumb/breadcrumb.component";
import { BreadCrumbsContainer } from "../../GlobalStyle";
import { useState } from "react";
import ProductCard from "../product-card/product-card.component";
import ProductWidgetCard from "../product-widgets-card/product-widgets-card.component";
import { UseProductContext } from "../../context/ProductContext";
import { Pagination } from "@mui/material";
import Stack from '@mui/material/Stack';
import BasicAccordion from "../accordion/accordion.component";
import Promo from "../promo/promo.component";





const ShopProduct = () => {

  const { FeaturedProducts, AllProducts } = UseProductContext();

  /**Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const TotalProducts = Math.ceil(AllProducts.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const itemsToDisplay = AllProducts.slice(startIndex, endIndex);

  /**Pagination Handler */
  const PaginationOnChange = (event, page) => {
    setCurrentPage(page);
  }

  return (
    <Container>
      <Wrapper>
        <Row>
          <BreadCrumbsContainer>
            <BasicBreadcrumbs category="mens" link="/shop" />
          </BreadCrumbsContainer>
        </Row>
        <Row>
          <Column>
            <SidebarContainer className="sidebar">
              <BasicAccordion />
              <ProductWidgetCard
                products={FeaturedProducts}
                title="Recent Products"
                width="70"
                height="80"
                titleSize="14"
              />
              <Promo width="99" height="100" title="Sponsor" src="/images/promo/brush.jpg" />
            </SidebarContainer>
            <ShopPageContainer>  
              <SortProductContainer>
                <SortCountProduct><h2> Women Dresses </h2> Showing 1 - 10 of 35 Items</SortCountProduct>
                <SortByOrder>
                  <select style={{ fontSize: "16px", outline: "none", border: "1px solid gray", padding: "5px", borderRadius: "5px" }}>
                    <option style={{ margin: "50px" }}>Default Sorting</option>
                    <option>Sort by Popularity</option>
                    <option>Sort by a-z</option>
                    <option>Sort by z-a</option>
                    <option>Sort by Price: Low to High</option>
                    <option>Sort by Price: High to Low </option>
                  </select>
                </SortByOrder>
              </SortProductContainer>
              <ProductsContainer>
                {itemsToDisplay.map((product) => <ProductCard key={product.id} product={product} />)}
              </ProductsContainer>
              <PaginationContainer className="pagination">
                <Stack spacing={2}>
                  <Pagination onChange={PaginationOnChange} color="primary" size="large" count={TotalProducts} />
                </Stack>
              </PaginationContainer>               
            </ShopPageContainer>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default ShopProduct;
