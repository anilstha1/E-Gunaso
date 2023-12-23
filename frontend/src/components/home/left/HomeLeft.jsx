import React from "react";
import {
  HomeLeftDiv,
  IconsDiv,
  LinkDiv,
  LinkList,
  LinkTitle,
  TopMostDiv,
} from "./style";
import { LeftNavData } from "../../../data/leftHomeData";
function HomeLeft() {
  return (
    <HomeLeftDiv>
      <TopMostDiv>
        {LeftNavData.map((item) => {
          return (
            <LinkList key={item.id}>
              <LinkDiv to={item.to}>
                <IconsDiv>
                  <item.icon />
                </IconsDiv>
                <LinkTitle>{item.text}</LinkTitle>
              </LinkDiv>
            </LinkList>
          );
        })}
      </TopMostDiv>
    </HomeLeftDiv>
  );
}

export default HomeLeft;
