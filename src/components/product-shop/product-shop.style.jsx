import styled from "styled-components";
import { MarginBottomContainer, PaddingContainer } from "../../GlobalStyle";
import { KeyboardArrowRight } from "@mui/icons-material";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Row = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;

`;

export const Column = styled.div`
  
  width: ${(props) => props.width ? props.width : "100%"};
`;

export const ShopPageContainer = styled.div`
 
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid lightgray;
  padding-right:  1rem;
`;


export const FilterItem = styled.ul`
  
`;




export const FilterList = styled.li`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  cursor: pointer;
`;


export const ArrowRightIcon = styled(KeyboardArrowRight)`
  color: gray;
`;

export const SubFilterItem = styled.ul`
  margin-top: 0.5rem;
  padding-left: 30px;
  max-height: 0;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  display: ${(props) => props.color && "flex"};

`;

export const SubFilterList = styled.li`
  margin: 0.9rem 0.3rem;
  list-style: none;
  
`;

export const FilterSearch = styled.div`
 
  
`;


export const SearchInput = styled.input`
  padding: 0.7rem;
  font-size: 0.7rem;
  width: 100%;
`;

export const FilterCategory = styled.div``;

export const FilterBrand = styled.div``;

export const FilterColor = styled.div``;



export const ProductsContainer = styled.div`
  
`;