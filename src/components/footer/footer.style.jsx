import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import styled from "styled-components";
import { HeadingPrimary, MarginBottomContainer, PaddingContainer } from "../../GlobalStyle";


export const Container = styled.div``;


export const Wrapper = styled(PaddingContainer)``;

export const Box = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex: 1;
`;

export const Title = styled.h4``;

export const LogoContainer = styled.div``;

export const Logo = styled(HeadingPrimary)``;

export const ShortDescription = styled.p``;

export const Email = styled.p``;

export const Address = styled.p``;

export const Telephone = styled.p``;


export const FlexContainer = styled.div`
display: flex;
align-items: center;
gap: 15px;
margin: 8px 0px;

`;


export const SocialContainer = styled.div``;

export const IconBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: teal;
    color: white;
    cursor: pointer;
  `;

export const Text = styled.span`
font-size: 14px;
font-weight: 500;

&:hover {
  color: ${(props) => props.type !== "social" && "teal"};
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
`;

export const HR = styled.hr``;

export const CopyRightContainer = styled.div`
margin: 1.5rem 0;
font-size: 1.02rem;
font-weight: 200;
text-align: center;
`;