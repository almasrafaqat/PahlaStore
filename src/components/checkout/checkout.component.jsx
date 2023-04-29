import {
  BreadCrumbsContainer,
  CloseIcon,
  CouponCode,
  CouponContainer,
  Link,
} from "../../GlobalStyle";
import BasicBreadcrumbs from "../breadcrumb/breadcrumb.component";
import {
  AdditionalText,
  AlreadySignInContainer,
  BillingContainer,
  Box,
  CashOnDelivery,
  CashOnDeliveryNote,
  CheckoutContainer,
  CheckoutTable,
  CheckoutTableBody,
  CheckoutTableCell,
  CheckoutTableContainer,
  CheckoutTableHead,
  CheckoutTableRow,
  Container,
  CountryContainer,
  CreditCard,
  CreditCardNote,
  FormContainer,
  GridWrapper,
  Header,
  Heading,
  Image,
  ImageContainer,
  InfoContainer,
  OptionText,
  PaymentOptionsContainer,
  ProductContainer,
  Qty,
  QtyIcon,
  RedirectTo,
  SingInCouponContainer,
  Text,
  TextContainer,
  Title,
  UserIcon,
  Wrapper,
  WrapperFlex,
} from "./checkout.style";
import FormatPrice from "../../helpers/FormatPrice";
import FormInput from "../form-input/form-input.component";
import CountrySelect from "../country-list/country-list.component";
import Coupon from "../coupon-checkout/coupon-checkout.component";
import AddToCart from "../add-to-cart/add-to-cart.component";

const Checkout = () => {
  return (
    <Container>
      <Wrapper>
        <BreadCrumbsContainer>
          <BasicBreadcrumbs category="chekcout" />
        </BreadCrumbsContainer>
        <Box>
          <Header>
            <Heading>Checkout</Heading>
          </Header>
          <GridWrapper>
            <BillingContainer>
              <SingInCouponContainer>
                <AlreadySignInContainer>
                  <UserIcon />
                  <Text>Already have an account ?</Text>
                  <RedirectTo to="/login">Click here to login</RedirectTo>
                </AlreadySignInContainer>
                <Coupon
                  text="Apply Coupon"

                />
              </SingInCouponContainer>

              <Heading billing>Billing Details</Heading>
              <FormContainer>
                <TextContainer>
                  <FormInput label="First Name *" value="" type="text" />
                </TextContainer>
                <TextContainer>
                  <FormInput label="Last Name *" value="" type="text" />
                </TextContainer>
                <TextContainer>
                  <FormInput label="Address *" value="" type="text" />
                </TextContainer>
                <TextContainer>
                  <FormInput label="Addres line2" value="" type="text" />
                </TextContainer>
                <CountryContainer country>
                  <CountrySelect />
                </CountryContainer>

                <TextContainer>
                  <FormInput label="City/Town *" value="" type="text" />
                </TextContainer>
                <TextContainer>
                  <FormInput label="Post Code / Zip *" value="" type="text" />
                </TextContainer>

                <TextContainer>
                  <FormInput label="Phone *" value="" type="text" />
                </TextContainer>

                <TextContainer>
                  <FormInput label="Company Name" value="" type="text" />
                </TextContainer>

                <TextContainer>
                  <FormInput label="Email address *" value="" type="text" />
                </TextContainer>

                <TextContainer textarea>
                  <AdditionalText>Additional Information</AdditionalText>

                  <FormInput
                    label=" Notes about your order, e.g. special notes for delivery"
                    value=""
                    type="textarea"
                    textarea
                    rows="8"
                  />
                </TextContainer>
              </FormContainer>
            </BillingContainer>
            <CheckoutContainer>
              <CheckoutTableContainer>
                <CheckoutTable>
                  <CheckoutTableHead>
                    <CheckoutTableRow>
                      <CheckoutTableCell>Products</CheckoutTableCell>
                      <CheckoutTableCell>SUBTOTAL</CheckoutTableCell>
                    </CheckoutTableRow>
                  </CheckoutTableHead>
                  <CheckoutTableBody>
                    <CheckoutTableRow>
                      <CheckoutTableCell>
                        <ProductContainer>
                          <ImageContainer>
                            <Link>
                              <Image src="images/products/iphone.png" />
                            </Link>
                          </ImageContainer>
                          <InfoContainer>
                            <Link>
                              <Title>
                                New Apple iPhone 14 Pro (512 GB) - Gold
                              </Title>
                            </Link>
                            <Qty>
                              {" "}
                              <QtyIcon style={{ fontSize: "0.8rem" }} /> 2{" "}
                            </Qty>
                          </InfoContainer>
                        </ProductContainer>
                      </CheckoutTableCell>
                      <CheckoutTableCell >
                        <FormatPrice price="14500" />
                      </CheckoutTableCell>
                    </CheckoutTableRow>
                    <CheckoutTableRow>
                      <CheckoutTableCell>
                        <ProductContainer>
                          <ImageContainer>
                            <Link>
                              <Image src="images/products/iphone.png" />
                            </Link>
                          </ImageContainer>
                          <InfoContainer>
                            <Link>
                              <Title>
                                New Apple iPhone 14 Pro (512 GB) - Gold
                              </Title>
                            </Link>
                            <Qty>
                              {" "}
                              <QtyIcon style={{ fontSize: "0.8rem" }} /> 2{" "}
                            </Qty>
                          </InfoContainer>
                        </ProductContainer>
                      </CheckoutTableCell>
                      <CheckoutTableCell>
                        <FormatPrice price="14500" />
                      </CheckoutTableCell>
                    </CheckoutTableRow>
                    <CheckoutTableRow>
                      <CheckoutTableCell>Subtotal </CheckoutTableCell>
                      <CheckoutTableCell>
                        <FormatPrice price="14500" />
                      </CheckoutTableCell>
                    </CheckoutTableRow>

                    <CheckoutTableRow>
                      <CheckoutTableCell>Shipping </CheckoutTableCell>
                      <CheckoutTableCell>
                        <FormatPrice price="500" />
                      </CheckoutTableCell>
                    </CheckoutTableRow>
                    <CheckoutTableRow>
                      <CheckoutTableCell>
                        {" "}
                        <CouponContainer>
                          {" "}
                          <CloseIcon /> Coupon Applied <CouponCode>EidOffer</CouponCode>
                        </CouponContainer>{" "}
                      </CheckoutTableCell>
                      <CheckoutTableCell>
                        <FormatPrice price="200" />
                      </CheckoutTableCell>
                    </CheckoutTableRow>
                    <CheckoutTableRow>
                      <CheckoutTableCell
                        style={{ fontWeight: "500", fontSize: "1.1rem" }}
                      >
                        Total{" "}
                      </CheckoutTableCell>
                      <CheckoutTableCell
                        style={{ fontWeight: "500", fontSize: "1.1rem" }}
                        type="total"
                      >
                        <FormatPrice price="15000" />
                      </CheckoutTableCell>
                    </CheckoutTableRow>
                  </CheckoutTableBody>
                </CheckoutTable>
              </CheckoutTableContainer>
              <PaymentOptionsContainer>
                <WrapperFlex>
                  <CashOnDelivery
                    type="radio"
                    name="payment-method"
                    checked
                  ></CashOnDelivery>
                  <OptionText style={{ marginTop: "-20px" }}>
                    Cash on Delivery
                  </OptionText>
                  <CashOnDeliveryNote>
                    Pay with cash upon delivery. For more details Call/WhatsApp
                    at (+01) - 8888 475
                  </CashOnDeliveryNote>
                </WrapperFlex>

                <WrapperFlex>
                  <CreditCard type="radio" name="payment-method"></CreditCard>
                  <OptionText>Credit Card</OptionText>

                  <CreditCardNote>
                    It will be redirect to payment gateway website
                  </CreditCardNote>
                </WrapperFlex>
              </PaymentOptionsContainer>

              <Link to="/ordersuccess" style={{ marginTop: "1rem" }}>
                <AddToCart
                  content="center"
                  bgColor={({ theme }) => theme.colors.primary}
                  width="100"
                  radius="0.2"
                  text="Place an order"
                  orderPlaceIcon
                />
              </Link>
            </CheckoutContainer>
          </GridWrapper>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
