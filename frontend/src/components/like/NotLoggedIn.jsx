import React from "react";
import { IconDiv, LikeDiv } from "./style";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function NotLoggedIn({ likes }) {
  const navigate = useNavigate();
  return (
    <LikeDiv
      onClick={() => {
        navigate("/login");
      }}
    >
      <IconDiv>
        {" "}
        <BiUpvote />
      </IconDiv>
      <span>{likes.length} </span>
      <IconDiv
        onClick={() => {
          navigate("/login");
        }}
      >
        {" "}
        <BiDownvote />{" "}
      </IconDiv>
    </LikeDiv>
  );
}

export default NotLoggedIn;
