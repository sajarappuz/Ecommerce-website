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
width:25%;
background-color:pink;
${mobile({ width: "75%"})};
`;
const Title = styled.h1 `
font-size:24px;
font-weight:300;
`;
const Form = styled.form `
display:flex;
flex-direction:column;
`;

const Input = styled.input `
flex:1;
min-width:40%;
margin: 10px 0px;
padding:10px;
`;
const Button = styled.button `
width:40%;
height:40px;
border:none;
margin:15px 0px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`;
const Link = styled.a `
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`;
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />  
                <Input placeholder="Password" />
                <Button>LOGIN IN</Button>
                <Link>FORGOT PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login