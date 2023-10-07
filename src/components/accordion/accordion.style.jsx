import { CheckOutlined, Search } from "@mui/icons-material";
import styled, { css } from "styled-components";


/*** CSS Applied */
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
  color: white;
  width: 100px;
  text-align: center;
  font-size: 0.8rem;
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

export const FilterSection = styled.section``;

export const FilterItem = styled.ul`
  margin-top: 0.5rem;
  padding-left: 10px;
  display: ${(props) => props.color && "flex"};
`;

export const FilterList = styled.li`
  cursor: pointer;
  margin: 0.9rem 0.3rem;
  list-style: none;
  padding: 0.2rem;
  font-weight: 500;

  ${(props) => props.search && FilterSearchStyle}
  ${(props) => props.active && ActiveClassStyle}
  ${(props) => props.color && FilterColorStyle}
  ${(props) => props.activeColor && FilterColorStyleActive}

`;
export const SearchIcon = styled(Search)`
  color: #ccc;
`;

export const SearchInput = styled.input`
  font-size: 0.7rem;
  width: 100%;
  border: none;
  outline: none;
`;


