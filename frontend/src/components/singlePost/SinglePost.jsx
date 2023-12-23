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
  } = post;
  const [support, setSupport] = useState(false);
  const [noSupport, setNoSupport] = useState(false);
  const [updateLike, likeStatus] = usePostLikesMutation();
  const token = useSelector((state) => state.user.token);
  const [like, setLikes] = useState(likes.length);
  const { isLoading, data, error } = likeStatus;

  if (isLoading) {
    return <div>loding..</div>;
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setLikes(data.likes);
    }
  }, [data]);

  useEffect(() => {
    likes.forEach((item) => {
    //   if (item === userId) {
    //     setSupport(true);
    //     return;
    //   }
    });
  }, []);

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
        <LikeDiv>
          <IconDiv
            disabled={support}
            onClick={() => {
              setSupport(true);
              setNoSupport(false);
              updateLike({ postId: _id, token });
            }}
          >
            {support ? <BiSolidUpvote /> : <BiUpvote />}
          </IconDiv>
          <span>{like} </span>
          <IconDiv
            onClick={() => {
              setNoSupport(true);
              setSupport(false);
            }}
          >
            {noSupport ? <BiSolidDownvote /> : <BiDownvote />}
          </IconDiv>
        </LikeDiv>
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
