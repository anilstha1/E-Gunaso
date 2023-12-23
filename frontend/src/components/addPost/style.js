import styled from "styled-components"
export const AddPostFormDiv = styled.div`
width:60%;
background-color:${props => props.theme.component};
`

export const TopDiv = styled.div`

border-bottom:1px solid ${props => props.theme.border};
padding:1rem;
color:${props => props.theme.lightText};
margin-bottom:2rem;
`

export const TopLeftDiv = styled.div`
display: flex;
align-items:center;
gap:1rem;
width:20%;
padding:1rem 0rem;
`


export const AddPostForm = styled.form`
padding:1rem 2rem;
`


export const InputField = styled.input`
width:100%;
outline:none;
border:1px solid ${props => props.theme.border};
padding:.5rem 1rem;
font-size:1.6rem;

`
export const RadioInput = styled.input`


`

export const InputTextArea = styled.textarea`
width:100%;
height:10rem;
resize: vertical;

outline:none;
border:1px solid ${props => props.theme.border};
padding:.5rem 1rem;
font-size:1.6rem;
`


export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
 display: block;
font-size:1.6rem;
margin-bottom:1rem;
  
`;

export const IconDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
font-size:2rem;
gap:1rem;
`


export const SelectionDiv = styled.div``


export const Select = styled.select`
width:100%;
border:none;
padding:1rem 2rem;
border:1px solid ${props => props.theme.border};
background-color:${props => props.theme.component};
`

export const Option = styled.option``

export const RadioGroup = styled.div`
  display: flex;
  gap:5rem;
`;

export const RadioButtonLabel = styled.label`
  margin-right: 1rem;
  font-size:1.6rem;
`;

export const BottomDiv = styled.div`
text-align:right;
`


export const PostButton = styled.button`
font-size:1.6rem;
padding:.5rem 3rem;
background-color:${props => props.theme.buttonColor};
border:none;
outline:none;

color:#fff;
cursor: pointer;
padding-bottom:1rem;

`

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;