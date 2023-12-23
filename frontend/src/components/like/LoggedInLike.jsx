import React, { useEffect, useState } from "react";
import { IconDiv, LikeDiv } from "./style";
import { useSelector } from "react-redux";
import {
  BiDownvote,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
} from "react-icons/bi";
import { usePostDikesMutation, usePostLikesMutation } from "../../store";
function LoggedInLike({ _id, likes, dislikes }) {
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const [noOfLike, setNoOfLike] = useState(likes.length - dislikes.length);

  const token = useSelector((state) => state.user.token);
  const [likePost, likeStatus] = usePostLikesMutation();
  const [dislikePost, dislikeStatus] = usePostDikesMutation();

  const {
    data: likeData,
    error: likeError,
    isLoading: isLikeLoading,
  } = likeStatus;

  const {
    data: dislikeData,
    error: dislikeError,
    isLoading: isdisLikeLoading,
  } = dislikeStatus;
  const onLeftButtonClick = () => {
    likePost({ postId: _id, token });
  };

  useEffect(() => {
    if (likeData) {
      console.log(likeData);
      setNoOfLike(likeData.likes - likeData.dislikes);
      setRightArrow(!rightArrow);
      setLeftArrow(false);
    }
  }, [likeData]);

  console.log(dislikeData, likeData);

  useEffect(() => {
    if (dislikeData) {
      setNoOfLike(dislikeData.likes - dislikeData.dislikes);
      setLeftArrow(!leftArrow);
      setRightArrow(false);
    }
  }, [dislikeData]);

  console.log(dislikeData);
  const onRightButtonClick = () => {
    dislikePost({ postId: _id, token });
  };
  return (
    <LikeDiv>
      <IconDiv onClick={onLeftButtonClick}>
        {rightArrow ? <BiSolidUpvote /> : <BiUpvote />}
      </IconDiv>
      <span>{noOfLike} </span>
      <IconDiv onClick={onRightButtonClick}>
        {leftArrow ? <BiSolidDownvote /> : <BiDownvote />}
      </IconDiv>
    </LikeDiv>
  );
}

export default LoggedInLike;
