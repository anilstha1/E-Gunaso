
import styled from "styled-components"
export const SearchBarDiv = styled.div`
background-color:${props => props.theme.searchBar};
display: flex;
align-items:center;
padding:1rem;
border-radius:2rem 2rem  2rem 2rem;
gap:1rem;
`
export const SearchIconDiv = styled.div`
font-size:2rem;
display: flex;
align-items:center;
justify-content:center;
`


export const SearchBarInputDiv = styled.form`
flex:1;

`
export const SearchBarInput = styled.input`
width:100%;
border:none;
outline:none;
background-color:${props => props.theme.searchBar};
font-size:1.6rem;
`

