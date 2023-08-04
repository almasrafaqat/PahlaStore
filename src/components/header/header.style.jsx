import {
  Person2Outlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";


import styled from "styled-components";
import {   PaddingContainer, PrimaryLogo } from "../../GlobalStyle";


export const Container = styled.div`
  margin-bottom: 30px;
  
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
    padding: 5px; 
  
  `;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 10px;
  `;
export const Input = styled.input`
    outline: none;
    border: none;
    width: 100%;
    font-size: 14px;
    letter-spacing: 1px;
    
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
    
    font-weight: 500;
  `;