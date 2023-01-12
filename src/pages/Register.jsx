
import styled from "styled-components"
import { mobile } from "../Responsive"
const Container = styled.div `
width:100vw;
height:100vh;
background : linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60") center;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper = styled.div `
padding:20px;
width:40%;
background-color:pink;
${mobile({ width: "75%"})};
`;
const Title = styled.h1 `
font-size:24px;
font-weight:300;
`;
const Form = styled.form `
display:flex;
flex-wrap:wrap;
`;

const Input = styled.input `
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span `
font-size:12px;
margin:20px 0px;
`;
const Button = styled.button `
width:40%;
height:40px;
border:none;
margin:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;
const Register = () => {
  return (
    <Container>R

        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    by creating an account, i consent that ... ... ... .. ... <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register