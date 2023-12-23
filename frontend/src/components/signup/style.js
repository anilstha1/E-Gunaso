import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
width: 40rem;
  background-color:${props => props.theme.component};
  padding:1rem 2rem 2rem 2rem;
  margin-top:2rem; 
  margin-bottom:2rem;
  
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
 display: block;
  margin-bottom: 8px;
  font-size:1.6rem;
`;

export const Input = styled.input`
   width: 100%;
  padding:.8rem;
  font-size: 1.6rem;
  background-color:${props => props.theme.background};
  border:1px solid ${props => props.theme.border};
  outline:none;
  color:${props => props.theme.text};
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: ${props => props.theme.link};
  border: none;
  cursor: pointer;
  background-color:${props => props.theme.buttonColor};
  font-weight:600;
  width:100%;
  color: #fff;
`;

export const ErrorMessage = styled.p`

color:red;
margin-top:.5rem;
font-size:1.2rem;
`

export const LoginHeading = styled.h1`
margin-bottom:2rem;
text-align:center;
font-size:3rem;
color:${props => props.theme.otherText};
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const CheckboxInput = styled.input`
  margin-right: 1rem;
`;

export const CheckboxLabel = styled.label`
  font-size: 1.6rem;
`;

export const ForgotPassword = styled.div`
margin-top:1rem;
font-size:1.6rem;
`

export const ForgotLink = styled(Link)`
color:${props => props.theme.lightText};
`
export const Select = styled.select`
width:100%;
outline:none;
border:none;
padding:1rem;
background-color:${props => props.theme.background};
  border:1px solid ${props => props.theme.border};

`

export const Option = styled.option`

`