import { useForm } from "react-hook-form";
import { AddButton, ButtonDiv, FormContainer, Input, Label } from "./style";

import { useSelector, useDispatch } from "react-redux";
import { setSingleComment, useAddPostCommentMutation } from "../../store";
import { useEffect } from "react";

const CommentForm = ({ id }) => {
  const token = useSelector((state) => state.user.token);

  const [addComment, status] = useAddPostCommentMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const { isLoading, error, data } = status;
  const onSubmit = (data) => {
    data.postId = id;
    addComment({ formData: data, token });
    console.log(data);
  };

  console.log(error, data);

  useEffect(() => {
    if (data) {
      dispatch(setSingleComment(data));
    }
  }, [data]);
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor='comment'>Add a Comment:</Label>
      <Input
        {...register("comment", {
          required: "Comment is required",
        })}
        id='comment'
        type='text'
        placeholder='What are your thoughts...'
      />

      <ButtonDiv>
        <AddButton type='submit'>Submit</AddButton>
      </ButtonDiv>
    </FormContainer>
  );
};

export default CommentForm;
