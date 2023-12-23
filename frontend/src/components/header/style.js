import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";
export const NavbarDiv = styled(WrapperContainer)`
display: flex;
justify-content:space-between;
align-items:center;
padding:1rem 0;
`

export const LeftDiv = styled.div``

export const CenterDiv = styled.div`
flex:.6;
`

export const RightDiv = styled.div`
display: flex;
align-items:center;


`

export const OuterMostDiv = styled.div`
position:fixed;
left:0;
right:0;
width:100%;
height:60px;
border-bottom:1px solid ${props => props.theme.border};
background-color:white;
z-index:1000;
`