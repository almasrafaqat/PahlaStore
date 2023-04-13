import {
  Facebook,
  ForwardToInboxOutlined,
  Instagram,
  TtyOutlined,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import styled from "styled-components";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { HeadingPrimary, HorizontalLinePrimary, PaddingContainer } from "../../GlobalStyle";
import { DesktopsLargeScreens, IpadTablets } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled(PaddingContainer)``;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${IpadTablets({ flexDirection: "column" })};
`;

export const Col = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  ${DesktopsLargeScreens({ margin: "0 1rem" })}
`;

export const Title = styled.h3`
  margin-bottom: 1.3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0.5rem 0px;
`;

export const LogoContainer = styled.div`
  margin-bottom: 1.3rem;
`;

export const Logo = styled(HeadingPrimary)``;

export const EmailIcon = styled(ForwardToInboxOutlined)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Email = styled.p`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LocationIcon = styled(PlaceOutlinedIcon)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Address = styled.p`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TelephoneIcon = styled(TtyOutlined)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Telephone = styled.p`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialContainer = styled.div`
  margin: 1rem 0;
`;

export const IconBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: ${(props) =>
      props.type !== "social" && (({ theme }) => theme.colors.primary)};
  }
`;

export const FacebookIcon = styled(Facebook)``;

export const YoutubeIcon = styled(YouTube)``;

export const TwitterIcon = styled(Twitter)``;

export const InstagramIcon = styled(Instagram)``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin: 0.3rem 0;
`;

export const CustomerCareContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Content = styled.div``;

export const Description = styled.p`
  margin: 0.9rem 0;
`;

export const Image = styled.img`
  max-width: ${(props) => props.type === "store" && "150px"};
  transition: ${(props) =>
    props.type === "store" && "transform 0.3s ease-in-out"};
  &:hover {
    transform: ${(props) => props.type === "store" && "scale(1.05)"};
  }
`;

export const HR = styled(HorizontalLinePrimary)`
 
`;

export const CopyRightContainer = styled.div`
  margin: 1.5rem 0;
  font-size: 1.02rem;
  font-weight: 200;
  text-align: center;
`;
