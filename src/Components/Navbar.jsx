import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
const Container = styled.div `
height: 60px;
${mobile({height:"50px", width: "100%"})};
`;

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({padding:"10px 0px"})};

`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language = styled.span `
font-size:14px;
cursor:  pointer;
${mobile({display:"none"})};
`
;

const SearchContainer = styled.div`

display:flex;
align-items:center;
border: 0.5px solid blue;
padding:5px;
margin-left:10px;
border-radius:10px;
`
;

const Input = styled.input`
border :none;
${mobile({width:"50px"})};
`
;
const Center = styled.div`
flex:1;
`;

const Logo = styled.h1`
font-weight:bold;
text-align:center;
${mobile({ fontSize: "24px"})};
`;
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ flex:2, justifyContent: "center"})};
`;

const MenuItems = styled.a`
font-size:14px;
cursor:pointer;
margin-left:25px;
text-decoration: none;
color:gray;
${mobile({ fontSize: "12px", marginLeft:"10px"})};
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                    <SearchContainer >
                        <Input placeholder = "Search"/>
                        <SearchIcon />
                    </SearchContainer>
                
            </Left>
            <Center><Logo>WIZBUY</Logo></Center>
            <Right>
               <MenuItems as= "a"href='/register'>
               Register
               </MenuItems>
               <MenuItems as= "a"href='/login'>
                SignIn
               </MenuItems>
               <MenuItems>
                  <IconButton aria-label="cart">
                     <Badge badgeContent={4} color="secondary">
                     <ShoppingCartIcon />
                     </Badge>
                  </IconButton>
                  
               </MenuItems>

            </Right>
        </Wrapper>
         
        
    </Container>
  )
}

export default Navbar