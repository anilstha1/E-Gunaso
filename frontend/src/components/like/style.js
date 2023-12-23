
import styled from "styled-components"
export const LikeDiv = styled.div`
display:flex;
align-items:center;
gap:2rem;
`
export const IconDiv = styled.button`
font-size:1.6rem;
display: flex;
align-items:center;
justify-content:center;
cursor: pointer;
outline:none;
border:none;
background-color:${props => props.theme.background};
`