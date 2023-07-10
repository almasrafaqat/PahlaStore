import styled, { css } from "styled-components";
import { MarginBottomContainer, PaddingContainer } from "../../GlobalStyle";
import { CheckOutlined, KeyboardArrowDown, KeyboardArrowRight, Search } from "@mui/icons-material";

export const Container = styled(MarginBottomContainer)``;

export const Wrapper = styled(PaddingContainer)``;

export const Row = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 1100px;
  z-index: 1;
`;

export const ShopPageContainer = styled.div``;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 16px;
  box-shadow: 0 1px 4px rgba(18, 22, 33, 0.12);
`;

export const FilterItem = styled.ul``;

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
  height: 100%;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  display: ${(props) => props.color && "flex"};
`;

const FilterSearchStyle = css`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.8rem 0.2rem 0.8rem 0.2rem;
  border-radius: 5px;
`;

const ActiveClassStyle = css`
  background-color: teal;
  border-radius: 0.9rem;
  padding: 0.2rem;
  color: white;
  width: 100px;
  text-align: center;
  font-size: 0.7rem;
`;

const FilterColorStyle = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  opacity: 0.6;
`;
const FilterColorStyleActive = css`
  opacity: 1;
`;
export const CheckIcon = styled(CheckOutlined)`
  color: white;
`;

export const SubFilterList = styled.li`
  margin: 0.9rem 0.3rem;
  list-style: none;
  cursor: pointer;
  font-size: 0.8rem;

  ${(props) => props.search && FilterSearchStyle}
  ${(props) => props.active && ActiveClassStyle}
  ${(props) => props.color && FilterColorStyle}
  ${(props) => props.activeColor && FilterColorStyleActive}
`;

export const FilterSearch = styled.div``;

export const SearchIcon = styled(Search)`
  color: #ccc;
`;

export const SearchInput = styled.input`
  font-size: 0.7rem;
  width: 100%;
  border: none;
  outline: none;
`;

export const FilterCategory = styled.div``;

export const FilterBrand = styled.div``;

export const FilterColor = styled.div``;

export const FilterPrice = styled.div`
  
`;

export const FilterPriceValue = styled.small`
  font-weight: 500;
  font-size: medium;
  color: teal;
  
`;





export const ProductsContainer = styled.div``;
