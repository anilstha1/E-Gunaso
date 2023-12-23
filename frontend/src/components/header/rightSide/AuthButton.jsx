import React from "react";
import { AuthButtonDiv, LoginButton, SignupButton } from "./style";

function AuthButton() {
  return (
    <AuthButtonDiv>
      <SignupButton to='/signup'>Signup</SignupButton>

      <LoginButton to='/login'>Login</LoginButton>
    </AuthButtonDiv>
  );
}

export default AuthButton;
