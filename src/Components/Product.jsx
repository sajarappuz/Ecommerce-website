import { FavoriteBorder, SearchOutlined } from "@mui/icons-material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Info = styled.div`
width:100%;
height:100%;
top:0px;
left:0px;
position:absolute;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(0,0,0,0.3);
opacity:0;
z-index:3;
transition:all 0.7s ease;
`;
const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`;
const Circle = styled.div `
width:200px;
height:200px;
border-radius:50%;
position:absolute;
background-color:#fff;
`;


const Image = styled.img`
height:75%;
width:70%;
z-index:2;
`;

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
margin:10px;
align-items:center;
justify-content:center;
transition: all 0.5s ease;
&:hover{
    background-color:#e9f5f5;
    transform: scale(1.1);

}
`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src ={item.img} />
        
        <Info>
          <Icon>
            <Link to ="/singleproduct">
            <ShoppingCart />
            </Link>
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorder />
          </Icon>

        </Info>
    </Container>
  )
}

export default Product