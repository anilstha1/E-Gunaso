import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useGetPostCommentQuery, useGetPostQuery } from "../../store";
import SinglePost from "../../components/singlePost/SinglePost";
import { CommentDiv, CommentPostDiv, PostDiv, UserCommentDiv } from "./style";
import CommentForm from "../../components/addComments/AddComment";
import Comment from "../../components/comments/Comments";
import { useDispatch } from "react-redux";
import { setPostComment } from "../../store/slice/commentSlice";
import { useSelector } from "react-redux";
function CommentPostPage() {
  const comment = useSelector((state) => state.comment.comment);
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: postData,
    error: postError,
    isLoading: postLoading,
  } = useGetPostQuery(id);

  const {
    data: commentData,
    error: commentError,
    isLoading: isCommentLoading,
  } = useGetPostCommentQuery(id);

  useEffect(() => {
    if (commentData) {
      dispatch(setPostComment(commentData));
    }
  }, [commentData]);


  if (postLoading || isCommentLoading) {
    return <div>Loading...</div>;
  }
  return (
    <CommentPostDiv>
      <PostDiv>
        <SinglePost post={postData} />
      </PostDiv>

      <CommentDiv>
        <CommentForm id={id} />
        <UserCommentDiv>
          {comment?.map((item) => {
            return (
              <Comment
                comment={item}
                key={item._id}
              />
            );
          })}
        </UserCommentDiv>
      </CommentDiv>
    </CommentPostDiv>
  );
}

export default CommentPostPage;
