import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import { mobile } from "../Responsive"

const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
${mobile({ padding: "10px"})}
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:ponter;
border: ${props=>props.type === "filled"  && "none"};
background-color: ${props=>props.type === "filled"  ? "black" : "transparent"};
color: ${props=>props.type === "filled"  && "white"};
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;

`;
const TopTexts = styled.div`
${mobile({ display: "none"})}

`;
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column"})}
`;
const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column"})}
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:200px;
`;
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor= styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({ margin: "5px 15px"})}
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({ marginBottom: "20px"})}
`;

const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`;

const Summary = styled.div`
flex:1;
border:1px solid lightgray;
border-radius:10px;
padding:12px;
height:70vh;
`;
const SummaryTitle = styled.h1`
font-weight:200;

`;
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
cursor:pointer;
font-weight:600;
`;
const Cart = () => {
  return (
    <Container>
       
      <Navbar />
       <Announcement/>
       <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                          <Details>
                            <ProductName><b>Product:</b>JACKET</ProductName>
                            <ProductId><b>ID:</b>5588494</ProductId>
                            <ProductColor  color="brown"/>
                            <ProductSize><b>Size:</b>34</ProductSize>

                          </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>3</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>400rs</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src = "https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                          <Details>
                            <ProductName><b>Product:</b>KIDSWEAR</ProductName>
                            <ProductId><b>ID:</b>35473863</ProductId>
                            <ProductColor  color="blue"/>
                            <ProductSize><b>Size:</b>20</ProductSize>

                          </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>250rs</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>1000rs</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>40rs</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice> -40rs</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>1000rs</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
       </Wrapper>
       <Footer/>
    </Container>
  )
}

export default Cart