import React from "react";
import { CenterDiv, HomePageDiv } from "./style";
import HomeLeft from "../../components/home/left/HomeLeft";

import HomeRight from "../../components/home/right/HomeRight";
import { Outlet } from "react-router-dom";
function HomePage() {
  return (
    <HomePageDiv>
      <HomeLeft />
      <CenterDiv>
        <Outlet />
      </CenterDiv>
      <HomeRight />
    </HomePageDiv>
  );
}

export default HomePage;
