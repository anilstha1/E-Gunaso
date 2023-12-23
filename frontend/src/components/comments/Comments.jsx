import {
  Avatar,
  BoxContainer,
  CommentContainer,
  CommentContent,
  CommentText,
  TimeDiv,
  UserName,
} from "./style";

import avatar from "../../assets/profile.png";
import calculateDateDifference from "../../utilis/DateDiff";

const Comment = ({ comment }) => {
  const { user, comment: commentText, createdAt } = comment;
  const time = calculateDateDifference(createdAt);
  return (
    <CommentContainer>
      <BoxContainer>
        <Avatar
          src={avatar}
          alt='User Avatar'
        />
        <UserName>{user?.random_name}</UserName>

        <TimeDiv>
          {time.days === 0
            ? time.hours === 0
              ? `${time.minutes} minutes ago`
              : `${time.hours} hours ago`
            : `${time.days} days ago`}
        </TimeDiv>
      </BoxContainer>

      <CommentContent>
        <CommentText>{commentText}</CommentText>
      </CommentContent>
    </CommentContainer>
  );
};
export default Comment;
