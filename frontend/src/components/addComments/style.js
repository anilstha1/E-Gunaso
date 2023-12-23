import styled from 'styled-components';

export const FormContainer = styled.form`
 width:90%;
 margin:auto 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: .5rem;
  font-size:1.6rem;
`;

export const Input = styled.textarea`
  width: 100%;
  padding: 1rem;
  outline:none;
height:10rem;
resize:vertical;



`;

export const Error = styled.div`
  color: red;
  margin-top: 4px;
`;

export const AddButton = styled.button`
margin-left:auto;
outline:none;
padding:.5rem 2rem;
border:none;
font-size:1.6rem;
background-color:${props => props.theme.buttonColor};
color:white;
cursor: pointer;

`

export const ButtonDiv = styled.div`
text-align:right;
margin-top:1rem;
`