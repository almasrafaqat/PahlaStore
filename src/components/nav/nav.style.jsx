import {
  HeadsetMicOutlined,
  LocalFireDepartmentOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import {
  Link,
  MarginBottomContainer,
  PaddingContainer,
  theme,
} from "../../GlobalStyle";

export const Navbar = styled(MarginBottomContainer)`
  height: 70px;
  width: 100%;
  z-index: 2;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  position: relative;
  margin: auto;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HotDealContainer = styled.div`
  margin-right: 10px;
`;

export const HotDeal = styled(LocalFireDepartmentOutlined)``;

export const Text = styled.span``;

export const MenuItem = styled.ul`
  display: inline-flex;
`;

export const MenuLink = styled(Link)`
  padding: 9px 15px;
  border-radius: 5px;
  font-size: 18px;
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
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;

export const DropdownList = styled.li`
  list-style: none;
`;

export const DropdownLink = styled(MenuLink)`
  padding: 0 0 0 15px;
  width: 100%;
  display: block;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
`;

/**Mega Menu */

export const MegaBox = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  width: 100%;
  padding: 0 30px;
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
  padding: 25px 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  line-height: 45px;
  width: calc(25% - 30px);

  &:nth-child(1) ${MegaItem}, &:nth-child(2) ${MegaItem} {
    border-left: 0px;
  }
`;

export const MegaList = styled.li`
  list-style: none;
  padding: 0 20px;
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
