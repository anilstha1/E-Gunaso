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
  TargeOfficeText,
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
    target_office
  } = post;
  const commentInStore = useSelector((state) => state.comment.comment);

  console.log(commentInStore?.length);

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
        <div>
        <Status status={status}>{status}</Status>
        <TargeOfficeText>
          {target_office}
        </TargeOfficeText>

        </div>
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
