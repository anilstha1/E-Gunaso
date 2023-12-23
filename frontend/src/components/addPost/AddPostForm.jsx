import React from "react";
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
  RadioButtonLabel,
  RadioButtonWrapper,
  RadioGroup,
  RadioInput,
  Select,
  TopDiv,
  TopLeftDiv,
} from "./style";
import { BsFillFilePostFill } from "react-icons/bs";
import { useForm, Controller } from "react-hook-form";
import { useAddPostMutation } from "../../store/api/api";
import { useSelector } from "react-redux";
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
    data.anonymous = Boolean(data.anonymous);
    console.log(data);
    // addPost({ formData: data, token });
  };

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
          <Label>Gender:</Label>
          <RadioButtonWrapper>
            <RadioButtonLabel>
              <Controller
                name='gender'
                control={control}
                defaultValue='male'
                render={({ field }) => (
                  <input
                    type='radio'
                    value='male'
                    {...field}
                    id='male'
                  />
                )}
              />
              Male
            </RadioButtonLabel>
            <RadioButtonLabel>
              <Controller
                name='gender'
                control={control}
                defaultValue='female'
                render={({ field }) => (
                  <input
                    type='radio'
                    value='female'
                    {...field}
                    id='female'
                  />
                )}
              />
              Female
            </RadioButtonLabel>
          </RadioButtonWrapper>
        </FormGroup>
        <BottomDiv>
          <PostButton>Post</PostButton>
        </BottomDiv>
      </AddPostForm>
    </AddPostFormDiv>
  );
}

export default AddPostPageForm;
