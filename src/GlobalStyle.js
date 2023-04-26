import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  ClearSharp,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  StarHalfOutlined,
  StarOutlined,
  StarOutlineOutlined,
} from "@mui/icons-material";
import { mobile, IpadTablets } from "./responsive";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
  }

`;

export const theme = {
  colors: {
    white: "#fff",
    star: "#ffaa0f",
    red: "#cc0c39",
    lightred: "#fcadad",
    gray: "#adadad",
    lightgray: "#f7f7f6",
    black: " #253d4e",
    lightblack: "#00000094",
    primary: "#009688",
    secondary: "#20B2AA",
    hover: "#20B2AA",
    cardhover: "translate(0px, -8px)",
    cardshadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    cardtransition: "all 0.3s ease-in-out",
    border: "#ececec",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    shadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
  },
};

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const PrimaryLogo = styled.div`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const MarginBottomContainer = styled.div`
  margin-bottom: 4.5rem;

  ${IpadTablets({ marginBottom: "1.7rem" })}
`;

export const ButtonPrimary = styled.button`
  padding: 0.6rem;
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export const PaddingContainer = styled.div`
  padding: 0 1.9rem;
  ${mobile({ padding: "0.6rem" })}
  ${IpadTablets({ padding: "0 1rem" })}
`;

export const HeadingPrimary = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  ${mobile({ fontSize: "1.5rem" })}
`;

/** Typography */

export const TextPrimary = styled.span`
  font-weight: 500;
`;

export const TitlePrimary = styled.h6`
  font-size: 1rem;
  ${mobile({ fontSize: "0.8rem" })}
`;

/**Coupon Container */

export const CouponContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled(ClearSharp)`
  font-size: 1.1rem;
  margin: 0 0.3rem;
  cursor: pointer;
`;

/**Image */
export const ImageWrapperPrimary = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 0.7rem;
  overflow: hidden;
`;

export const ImagePrimary = styled.img`
  // max-width: 70%;
  // max-height:70%;
  width: ${(props) => (props.width ? props.width : "70")}%;
  height: ${(props) => (props.height ? props.height : "70")}%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  object-fit: contain;
`;

export const HorizontalLinePrimary = styled.hr`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 1px;
  border: none;
  margin-top: 0.5rem;
`;

/**Colors */

export const ColorContainerPrimary = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorPrimary = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-left: 0.7rem;
  cursor: pointer;

  ${IpadTablets({ width: "0.9rem", height: "0.9rem", marginLeft: "0.4rem" })}
`;

/** Size */

export const SizeContainerPrimary = styled.div`
  display: flex;
  align-items: center;
`;

export const SizePrimary = styled.div`
  margin-left: 0.7rem;
  padding: 0.9rem;
  border-radius: 0.3rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: ${(props) =>
    props.active && (({ theme }) => theme.colors.primary)};
  color: ${(props) => props.active && (({ theme }) => theme.colors.white)};

  ${IpadTablets({
      width: "0.9rem",
      height: "0.9rem",
      padding: "0.6rem",
      fontSize: "0.7rem",
      marginLeft: "0.4rem",
    })}
`;

/** Flex  */

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 0.3rem;
`;

export const BoxPrimary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/** Add to Cart Container */
export const AddToCardContainerPrimary = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
`;

/**Cart Container */

export const CartContainerPrimary = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.8rem;
  padding: 1.3rem;

`;

/** Stars Rating */

export const RatingContainerPrimary = styled.div`
  margin: 0.19rem 0;
  color: ${({ theme }) => theme.colors.star};
`;

export const StarFullPrimary = styled(StarOutlined)`
  ${mobile({ fontSize: "1.2rem !important" })}
  ${IpadTablets({ fontSize: "1.2rem !important" })}
`;
export const StarEmptyPrimary = styled(StarOutlineOutlined)`
  ${mobile({ fontSize: "1.2rem !important" })}
  ${IpadTablets({ fontSize: "1.2rem !important" })}
`;
export const StarHalfPrimary = styled(StarHalfOutlined)`
  ${mobile({ fontSize: "1.2rem !important" })}
  ${IpadTablets({ fontSize: "1.2rem !important" })}
`;

/** Price Container */

export const PriceContainerPrimary = styled.div``;

export const PricePrimary = styled(TextPrimary)`
  font-size: 1.08rem;
  font-weight: bold;
  margin-right: 0.6rem;
`;

export const DiscountPricePrimary = styled(PricePrimary)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: line-through;
`;

export const DiscountPercentagePrimary = styled.span`
  color: ${({ theme }) => theme.colors.star};
  font-size: 1.2rem;
  position: absolute;
  font-weight: 500;
  top: 25%;

  ${IpadTablets({ fontSize: "0.8rem", top: "20%" })}
`;
/** Arrows  */

export const ArrowContainerPrimary = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "0.5rem"};
  right: ${(props) => props.direction === "right" && "0.5rem"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${mobile({ width: "2rem", height: "2rem" })}
`;

/** Breadcrumbs */

export const BreadCrumbsContainer = styled.div`

  margin-top: -1.5rem;
  margin-bottom: 2.5rem;
  text-transform: capitalize;
 
`;

export const ArrowLeftPrimary = styled(KeyboardArrowLeft)``;
export const ArrowRightPrimary = styled(KeyboardArrowRight)``;

/** Slider Settings */

export var SliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

/** Deal of Week Slide */
export var DealSlideSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
