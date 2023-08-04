import {
  ClearSharp,
  Facebook,
  Instagram,
  KeyboardArrowDown,
  PermIdentityRounded,
  TtyOutlined,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import styled from "styled-components";
import { Link } from "../../GlobalStyle";

export const Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 350px;
    height: 100vh;
    z-index: 99;
  `;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
    width: 100%;
    padding: 20px 20px 0 20px;
    line-height: 20px;
    overflow-y: auto;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  
    &::-webkit-scrollbar {
      width: 0px;
    }
  `;

export const Header = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.white};
  `;

export const Logo = styled.div`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
  `;

export const CloseIcon = styled(ClearSharp)`
    cursor: pointer;
  
    &:hover {
      transform: scale(1.4);
      transition: all 0.3s ease-in-out;
    }
  `;

/** Navbar Menu */

export const MenuItem = styled.ul``;

export const MenuList = styled.li`
    list-style: none;
    margin: 10px 10px;
  `;

export const MenuLink = styled(Link)`
    display: block;
    width: 100%;
    padding: 9px 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.active === "active" ? (({ theme }) => theme.colors.primary) : ""};
    color: ${(props) => props.active === "active" ? "white" : ""};
  
  
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  `;

export const SubLink = styled(MenuLink)`
    font-size: 14px;
  `;

/** Dropdown Menu */

export const DropdownItem = styled.ul`
    padding-left: 20px;
    max-height: 0;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
  
  `;

export const DropdownList = styled(MenuList)`
    margin: 0;
    &:first-child {
      margin-top: 10px;
    }
  `;

export const ArrowIcon = styled(KeyboardArrowDown)`
    font-size: 24px;
  `;

/** Mega Menu */

export const MegaBox = styled.div`
    margin-top: 10px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
  `;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
  `;

export const Row = styled.div`
    padding: 20px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
  
    &:nth-child(1),
    &:nth-child(2) {
      border-top: 0;
    }
  `;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  `;

export const HeaderTitle = styled.header`
    font-size: 20px;
    font-weight: 500;
  `;

export const MegaItem = styled(DropdownItem)`
    max-height: 100%;
  `;

export const MegaList = styled(DropdownList)``;

/**Footer */
export const Footer = styled.div`
    width: 100%;
    line-height: 40px;
  `;

export const InfoContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 20px;
    margin: 17px 0 50px 0;
    border-radius: 5px;
  `;

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 8px 0px;
  `;

export const LocationIcon = styled(PlaceOutlinedIcon)`
    color: ${({ theme }) => theme.colors.primary};
  `;

export const UserIcon = styled(PermIdentityRounded)`
    color: ${({ theme }) => theme.colors.primary};
  `;

export const TelephoneIcon = styled(TtyOutlined)`
    color: ${({ theme }) => theme.colors.primary};
  `;

export const Text = styled.span`
    font-size: 14px;
    font-weight: 500;
  
    &:hover {
      color: ${(props) => props.type !== "social" && (({ theme }) => theme.colors.primary)};
    }
  `;

export const SocialContainer = styled.div``;

export const IconBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:  ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
  `;

export const FacebookIcon = styled(Facebook)``;

export const YoutubeIcon = styled(YouTube)``;

export const TwitterIcon = styled(Twitter)``;

export const InstagramIcon = styled(Instagram)``;

export const CopyRightContainer = styled.div`
    margin-top: 30px;
    font-size: 14px;
    font-weight: 200;
  `;