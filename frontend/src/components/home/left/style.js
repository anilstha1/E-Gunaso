import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeLeftDiv = styled.div`
width:15%;
border-right:2px solid ${props => props.theme.border};



`
export const TopMostDiv = styled.div`
margin-top:2rem;
position:fixed;
top:60px;
bottom: 0;
`

export const LinkList = styled.li`
list-style:none;
margin-top:1rem;
`

export const LinkDiv = styled(Link)`

display: flex;
color:${props => props.theme.text};
text-decoration:none;
font-size:2rem;
gap:2rem;

`

export const IconsDiv = styled.div``

export const LinkTitle = styled.p``
