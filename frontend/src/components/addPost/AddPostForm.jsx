import React, { useEffect } from "react";
import {
  AddPostForm,
  AddPostFormDiv,
  BottomDiv,
  FormGroup,
  IconDiv,
  InputField,
  InputTextArea,
  Label,
  Option,
  PostButton,

  Select,
  TopDiv,
  TopLeftDiv,
} from "./style";
import { BsFillFilePostFill } from "react-icons/bs";
import { useForm, Controller } from "react-hook-form";
import { useAddPostMutation } from "../../store/api/api";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../store/slice/postSlice";
function AddPostPageForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();

  const [addPost, status] = useAddPostMutation();
  const { isLoading, data, error } = status;
  const token = useSelector((state) => state.user.token);
  const onSubmit = (data) => {
    addPost({ formData: data, token });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setPosts(data));
    }
  }, [data]);


  return (
    <AddPostFormDiv>
      <TopDiv>
        <TopLeftDiv>
          <IconDiv>
            <BsFillFilePostFill />
            Post
          </IconDiv>
        </TopLeftDiv>
      </TopDiv>
      <AddPostForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Title</Label>
          <InputField
            placeholder='Enter a title'
            {...register("title", { required: "Title is required" })}
          />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <InputTextArea
            placeholder='Enter a Description'
            {...register("post", {
              required: "post is required",
            })}
          />
        </FormGroup>

        <FormGroup>
          <Label>Do you want to post this gunaso anonymously? </Label>
          <Select
            {...register("anonymous", {
              required: "Data  is required",
            })}
          >
            <Option value='true'>True</Option>
            <Option value='false'>False</Option>
          </Select>
          {errors.gender && (
            <ErrorMessage>{errors.gender.message}</ErrorMessage>
          )}
        </FormGroup>
        <BottomDiv>
          <PostButton>Post</PostButton>
        </BottomDiv>
      </AddPostForm>
    </AddPostFormDiv>
  );
}

export default AddPostPageForm;
