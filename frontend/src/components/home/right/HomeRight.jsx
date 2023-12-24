import React from 'react';
import styled from 'styled-components';
import { RightDiv } from './style';
import { TopMostDiv } from '../left/style';
import complaint from "../../../assets/decorate.png"
// Define the styled component
const ImageContainer = styled.div`
 width:80%;
 height:10%;
 padding-left:2rem;

`;

const Image = styled.img`
width:100%;
width:100%;

`;
const BottomImage=styled.div`
width:100%;
height:100%;
padding-left:2rem;
`

function HomeRight() {
  return (
    <RightDiv>
      <TopMostDiv>

    <ImageContainer>
      <Image src="https://nitc.gov.np/frontsite/img/logo-eng.png" alt="Nitc Logo" />
    </ImageContainer>

    <BottomImage>
      <Image src={complaint} alt="Nitc Logo" />
    </BottomImage>
      </TopMostDiv> 
    </RightDiv> 
  )
}

export default HomeRight