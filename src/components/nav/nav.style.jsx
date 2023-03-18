import {
  HeadsetMicOutlined,
  LocalFireDepartmentOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import {
  Link,
  MarginBottomContainer,
  PaddingContainer,
} from "../../GlobalStyle";

export const Navbar = styled(MarginBottomContainer)`
  height: 70px;
  width: 100%;
  z-index: 2;
  margin-bottom: 1.3rem;
`;

export const Container = styled(PaddingContainer)`
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HotDealContainer = styled.div`
  margin-right: 0.4rem;
`;

export const HotDeal = styled(LocalFireDepartmentOutlined)``;

export const Text = styled.span``;

export const MenuItem = styled.ul`
  display: inline-flex;
`;

export const MenuLink = styled(Link)`
  padding: 0.6rem 0.9rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.type === "hotdeal" && "#008080"};
  color: ${(props) => props.type === "hotdeal" && "#fff"};
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    background: ${(props) => props.type === "hotdeal" && "#20B2AA"};
    color: ${({ theme }) => theme.colors.white};
  }
`;

/** Dropdown Menu */

export const DropdownItem = styled.ul`
  background: ${({ theme }) => theme.colors.border};
  width: 180px;
  line-height: 45px;
  position: absolute;
  top: 85px;
  transition: all 0.4s ease-in-out;
  visibility: hidden;
  opacity: 0;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  z-index: 2;
`;

export const DropdownList = styled.li`
  list-style: none;
`;

export const DropdownLink = styled(MenuLink)`
  padding: 0 0 0 0.9rem;
  width: 100%;
  display: block;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 400;
`;

/**Mega Menu */

export const MegaBox = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  width: 100%;
  padding: 0 1.8rem;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
  z-index: 2;
 
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem 1.3rem 0px 1.3rem;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

export const Image = styled.img`
  width: 100%; 
  height: 80%;
  object-fit: cover;
  text-align: center;
  margin: auto;
  border-radius: 0.3rem;
`;

export const HeaderTitle = styled.header`
  font-size: 20px;
  font-weight: 500;
`;

export const MegaItem = styled.ul`
  margin-left: -35px;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
`;

/** Row Border none */
export const Row = styled.div`
  line-height: 50px;
  width: calc(25% - 30px);

  &:nth-child(1) ${MegaItem}, &:nth-child(2) ${MegaItem} {
    border-left: 0px;
  }
`;

export const MegaList = styled.li`
  list-style: none;
  padding: 0 1.3rem;
`;

export const MegaLink = styled(DropdownLink)``;

/** Hover */
export const MenuList = styled.li`
  list-style: none;
  &:hover ${DropdownItem} {
    top: 70px;
    visibility: visible;
    opacity: 1;
  }
  &:hover ${MegaBox} {
    top: 70px;
    visibility: visible;
    opacity: 1;
  }
`;

export const HotLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HotIcon = styled(HeadsetMicOutlined)``;

export const TextContainer = styled.div`
  flex-direction: column;
  margin-left: 20px;
`;

export const Telephone = styled.div`
  color: teal;
  font-size: 20px;
  font-weight: 400;
`;

export const SubText = styled.span`
  font-size: 12px;
  /* font-weight: 200; */
`;
