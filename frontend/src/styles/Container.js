import styled from "styled-components";
import { tabletLandScape } from "./responsive";

export const WrapperContainer = styled.div`
max-width:1440px;
width:100%;
padding:0rem 2rem;
margin:0 auto;
`

export const Main = styled(WrapperContainer)`padding-top:60px;
`

export const LayoutDivContainer = styled.div`


`
export const HomePageDiv = styled(WrapperContainer)`
margin:2rem 0;
`


export const SignUpDiv = styled(WrapperContainer)`
position:relative;
display: flex;
align-items:center;
justify-content:center;
width:100%;
margin:6rem 0;
`
export const LoginDiv = styled(WrapperContainer)`
position:relative;
display: flex;
align-items:center;
justify-content:center;
width:100%;
margin:6rem 0;
`

