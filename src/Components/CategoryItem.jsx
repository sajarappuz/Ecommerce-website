import styled from "styled-components";
import {mobile} from "../Responsive";

const Container = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;

`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height: "30vh"})};
`;
const Info = styled.div`
position:absolute;
top:0px;
left:0px;
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;
const Title = styled.h1`
text-align:center;
padding:10px;
`;
const Button = styled.button`
 
  border:none;
  cursor:pointer;
  height:30px;
  font-weight:600px;

`;

const CategoryItem = ({item}) => {
  return (
    <Container>
         <Image src ={item.img}/>
         <Info>
            <Title>{item.title}</Title>
         
        <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem