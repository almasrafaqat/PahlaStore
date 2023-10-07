import styled from "styled-components";
import { GridContainer, MarginBottomContainer, PaddingContainer } from "../../GlobalStyle";
import { IpadTablets, LaptopsSmallScreen, mobile } from "../../responsive";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Row = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 18% 3fr;
  grid-gap: 10px;
  width: 100%;

  ${mobile({ gridTemplateColumns: "1fr"})}
  ${IpadTablets({ gridTemplateColumns: "1fr 3fr"})}
  ${LaptopsSmallScreen({ gridTemplateColumns: "1fr 3fr" })}


`;

export const ShopPageContainer = styled.div``;

export const SidebarContainer = styled.div`

`;
export const SortProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 10px 10px;

`;

export const SortCountProduct = styled.div``;

export const SortByOrder = styled.div``;

export const ProductsContainer = styled(GridContainer)`
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: 450px;
  grid-gap: 0.3rem;
`;


export const PaginationContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
