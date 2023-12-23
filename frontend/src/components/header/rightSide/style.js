import { Link } from "react-router-dom";
import styled from "styled-components";
export const AuthButtonDiv = styled.div`
display: flex;
gap:2rem;
align-items:center;
`


export const LoginButton = styled(Link)`
font-size:2rem;
background-color:${props => props.theme.buttonColor};
color:white;
border:none;
outline:none;
padding: .5rem 2rem;
cursor: pointer;
border-radius:2rem;
text-decoration:none;
`



export const SignupButton = styled(Link)`
font-size:2rem;
color:${props => props.theme.text};
text-decoration:none;

border:none;
outline:none;
padding: .5rem 2rem;
cursor: pointer;
border:1px solid ${props => props.theme.border};
background-color:transparent;
`