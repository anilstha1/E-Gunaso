import { Link } from "react-router-dom";
import styled from "styled-components";


export const LogoDiv = styled(Link)`
display: flex;
align-items:center;
gap:1rem;
text-decoration:none;
color:${props => props.theme.text};
`

export const LogoImageDiv = styled.div`
height:3.2rem;
width:3.2rem;
`

export const LogoImage = styled.img`
height:100%;
width:100%;
`

export const LogoText = styled.h1`
font-size:3.2rem;
font-family:${props => props.theme.font2};

`

