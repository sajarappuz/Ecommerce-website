
import { Add, Remove } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { mobile } from "../Responsive"

const Container = styled.div `` ;
const Wrapper = styled.div `
padding:50px;
display:flex;
${mobile({ padding: "10px", flexDirection:"column"})};
` ;
const ImgContainer = styled.div `
flex:1;
` ;
const Image = styled.img `
width:100%;
height:90vh;
object-fit:cover;
${mobile({ height: "40vh"})};
` ;
const InfoContainer = styled.div `
flex:1;
padding:0px 50px;
${mobile({ padding: "10px"})}
`
 ;
const Name = styled.h1 `
font-weight:200;
` 
;
const Desc = styled.p `
margin:20px 0px;
` ;
const Price = styled.span `
font-weight:100;
font-size:14px;
` ;

const FilterContainer = styled.div `
    width:40%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({ width: "100%"})}
`;
const Filter = styled.div `
display:flex;
align-items:center;
`;
const FilterTitle = styled.span `
font-size:20px;
font-weight:200;
`;
const FilterColor = styled.div `
width:20px;
height:20px;
border-radius:50%;
margin: 0px 5px ;
cursor:pointer;
background-color: ${props=>props.color}
`;
const FilterSize = styled.select `
margin-left:10px;
padding:5px;
`;
const FilterSizeOption = styled.option ``;
const AddContainer = styled.div `
display:flex;
align-items:center;
justify-content:space-between;
width:40%;
${mobile({ width: "100%"})}
`;
const AmountContainer = styled.div `
display:flex;
align-items:center;
font-weight:700;


`;
const Amount = styled.span `
width:30px;
height:30px;
border-radius:10px;
border:1px solid pink;
display:flex;
align-items:center;
justify-content:center;
margin:5px;
`;
const Button = styled.button `
padding:15px;
font-weight:500;
border:2px solid  pink;
border-radius:10px;
background-color:white;
cursor:pointer;
text-decoration:none;

&:hover{
    background-color:gray;
}
`;

const SingleProduct = () => {
  return (
    <Container >
        <Navbar />
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src = "https://images.unsplash.com/photo-1637069585336-827b298fe84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlbmltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </ImgContainer>
            <InfoContainer>
                <Name>DENIM</Name>
                <Desc>awesome product to be attractive and beautiful</Desc>
                <Price>5000rs</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="Green" />
                        <FilterColor color="Blue" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                            
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                          <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button as="a" href="/cart">
                    
                    Add To Cart
                      
                        </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container >
  )
}

export default SingleProduct