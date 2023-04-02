import {
  Person2Outlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";


import styled from "styled-components";
import {  MarginBottomContainer, PaddingContainer, PrimaryLogo } from "../../GlobalStyle";


export const Container = styled(MarginBottomContainer)`
    height: 60px;
    line-height: 60px;
    
  `;

export const Wrapper = styled(PaddingContainer)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  `;

export const Left = styled.div`
    flex: 1;
  `;

export const Logo = styled(PrimaryLogo)`
    
  `;

export const Center = styled.div`
    flex: 3;
  
  `;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    padding: 10px;
  
  `;

export const CategorySelect = styled.select`
    outline: none;
    border: none;
    font-size: 14px;
    padding: 5px;
    color: #253d4e;
    min-width: 150px;
  `;

export const CategoryOption = styled.option`
    font-size: 16px;
    font-weight: 300;
  `;
export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
export const Input = styled.input`
    outline: none;
    border: none;
    width: 100%;
  `;

export const SearchIcon = styled(SearchOutlined)`
    color: gray;
    cursor: pointer;
  
    &:hover {
      transform: scale(1.4);
      transition: all 0.5s ease;
    }
  `;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-evenly;
  `;
export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
  `;

export const CartIcon = styled(ShoppingCartOutlined)`
    
  `;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
  `;

export const UserIcon = styled(Person2Outlined)``;

export const Text = styled.span`
    font-size: 18px;
    font-weight: 500;
  `;