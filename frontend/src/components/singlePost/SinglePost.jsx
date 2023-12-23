import React, { useEffect, useState } from "react";
import {
  Avatar,
  CardContainer,
  CommentDiv,
  Description,
  IconDiv,
  LikeAndComment,
  LikeDiv,
  NameDateDiv,
  Status,
  TimeDiv,
  Title,
  UserInfo,
  UserName,
  UserSection,
  ViewCommentButton,
} from "./style";
import avatar from "../../assets/profile.png";
import calculateDateDifference from "../../utilis/DateDiff";
import { LiaComments } from "react-icons/lia";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { usePostLikesMutation } from "../../store/api/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotLoggedIn from "../like/NotLoggedIn";
import LoggedInLike from "../like/LoggedInLike";
function SinglePost({ post }) {
  const {
    _id,
    user,
    status,
    title,
    likes,
    post: desc,
    createdAt,
    comments,
    dislikes,
  } = post;

  const userStatus = useSelector((state) => state.user.status);

  const navigate = useNavigate();

  const time = calculateDateDifference(createdAt);
  return (
    <CardContainer>
      <UserSection>
        <UserInfo>
          <Avatar
            src={avatar}
            alt='User Avatar'
          />
          <NameDateDiv>
            <UserName>{user?.name ? user.name : user.random_name}.</UserName>
            <TimeDiv>
              {time.days === 0
                ? time.hours === 0
                  ? `${time.minutes} minutes ago`
                  : `${time.hours} hours ago`
                : `${time.days} days ago`}
            </TimeDiv>
          </NameDateDiv>
        </UserInfo>
        <Status status={status}>{status}</Status>
      </UserSection>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <LikeAndComment>
        {!userStatus ? (
          <NotLoggedIn likes={likes} />
        ) : (
          <LoggedInLike
            _id={_id}
            likes={likes}
            dislikes={dislikes}
          />
        )}
        <CommentDiv>
          <ViewCommentButton
            onClick={() => {
              navigate(`/post/${_id}`);
            }}
          >
            <IconDiv>
              {" "}
              <LiaComments />
              {comments.length} comments
            </IconDiv>
          </ViewCommentButton>
        </CommentDiv>
      </LikeAndComment>
    </CardContainer>
  );
}

export default SinglePost;
