import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import { mobile } from "../Responsive"

const Container = styled.div `

` 
;
const Title = styled.h1 `
margin:20px;
` 
;
const FilterContainer = styled.div `
display:flex;
justify-content:space-between;

` 
;
const Filter = styled.div `
margin:20px;
${mobile({ margin: "0px 20px", display:"flex", flexDirection:"column"})};
` 
;
const FilterText = styled.span `
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({ marginRight: "0px"})};
`
;
const Select = styled.select `
padding:1opx;
margin-right:20px;
${mobile({ margin: "10px 0px"})};

` ;
const Option = styled.option ` ` ;

const ProductList = () => {
  return (
    <Container>
          <Navbar/>
          <Announcement/>
          <Title>Dresses</Title>
          <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    color
                </Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>White</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
                <Option>Pink</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
             <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
             </Select>
            </Filter>
          </FilterContainer>
          <Products />
          <Newsletter />
          <Footer />
    </Container>
  )
}

export default ProductList