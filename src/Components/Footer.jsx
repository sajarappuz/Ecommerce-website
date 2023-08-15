import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../Responsive"


const Container = styled.div `
display:flex;
background-color:gray;
color:white;
${mobile({ flexDirection: "column"})};
`;
const Left = styled.div `
flex:1;
display:flex;
flex-direction:column;
padding:20px;
margin-left:30px;
`;

const Logo = styled.h1 ``;
const Desc = styled.p `
margin:20px 0px;
font-weight:700;
`;
const SocialContainer = styled.div `
display:flex;
`;
const SocialIcon = styled.div `
height:40px;
width:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;
const Center = styled.div  `
flex:1;
padding:20px;
${mobile({ display: "none"})};
` ;
const Title = styled.h3 `
margin-bottom:30px;
`;
const List = styled.ul `
margin:0px;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem = styled.a`
padding:10px;
cursor:pointer;
margin:10px;
text-decoration:none;
color:white;
font-weight:600;
`
;


const Right = styled.div `
flex:1;
padding:20px;
`
;
const ContactItem = styled.div `

padding:20px;
display:flex;
align-items:center;
font-weight:500;
`;


const Footer = () => {
  return (
    
    <Container>
       <Left>
        <Logo>WIZBUY</Logo>
        <Desc>
            Buy products of your Choice
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="#A020F0">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
       </Left>
       <Center>
        <Title> Links</Title>

          <List>
            <ListItem as="a" href="/">
               Home
                </ListItem>
            <ListItem as="a" href="/cart">
            Cart
                </ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Privacy</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            
          </List>
       </Center>
       <Right>
        <Title>Contact Us</Title>
        <ContactItem>
            Second Street, Berut Road, LA
        </ContactItem>
        <ContactItem>
            +342 5246862892
        </ContactItem>
        <ContactItem>
            Contact@gmail.com
        </ContactItem>
       </Right>
    </Container>
  )
}

export default Footer