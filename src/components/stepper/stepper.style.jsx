import styled, { css } from "styled-components";
import { mobile } from "../../responsive";
import { Check } from "@mui/icons-material";

export const Container = styled.div`
  margin-bottom: 4rem;
`;

export const Row = styled.div`
  width: 80%;
  margin: 0 auto;
  
`;

export const StepperContainer = styled.div`
  
  margin: 0 auto;
  border: 1px solid #ececec;
  &:nth-child(1) {
  }
`;

export const StepperRow = styled.div`
  width: 40vw;
  margin: 0 auto;
  padding: 1rem;
  
`;

export const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid #ececec;
 
  
`;

export const OrderNoteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;


  ${mobile({ flexDirection: "column", gap: "2rem", width: "100%" })}
`;

export const DelieveryAddressDate = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
`;

export const DelieveryDay = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const DeliveryAddress = styled.p``;

export const OrderTableContainer = styled.div`

  border-right: 2px solid teal;
  background: #fafafc;
  /**Media Query */
  ${mobile({ width: "100%" })}
`;

export const OrderNoteTable = styled.div`
  // border: 2px dashed ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  // border-radius: 0.3rem;
  width: 450px;

  /**Media Query */
  ${mobile({ width: "100%" })}
`;

export const OrderNote = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 5px;
  margin: 1rem 0;

  padding: 1rem 0.5rem;
  text-align: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray};

  &:nth-last-child(2) {
    border-bottom: 0;
  }
`;

const FlexItemHeadingCss = css`
  font-weight: 600;
  font-size: 1.08rem;
`;

export const FlexItems = styled.div`
  margin: 1rem 0;

  ${(props) => props.heading && FlexItemHeadingCss}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 350px;
  height: 480px;
  text-align: center;
  padding: 50px;
  background-color: white;
  

  /**Media Query */
  ${mobile({ width: "100%" })}
`;

export const CheckIconContainer = styled.p`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin:0 auto;
`;

export const CheckIcon = styled(Check)``;

export const OrderConfirmMessage = styled.p``;
