import React from "react";
import { LogoDiv, LogoImage, LogoImageDiv, LogoText } from "./style";
import logoImg from "../../../assets/logo.png";

function Logo() {
  return (
    <LogoDiv to='/'>
      <LogoImageDiv>
        <LogoImage src={logoImg} />
      </LogoImageDiv>
      <LogoText>e-gunaso</LogoText>
    </LogoDiv>
  );
}

export default Logo;
