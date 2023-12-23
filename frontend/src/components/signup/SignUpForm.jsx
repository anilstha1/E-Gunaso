import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  ForgotLink,
  ForgotPassword,
  FormContainer,
  FormGroup,
  Input,
  Label,
  LoginHeading,
  Select,
  Option,
} from "./style";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "../../store/api/api";
import {
  setStatus,
  setToken,
  setTokenInLocalStorage,
} from "../../store/slice/userSlice";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [registerUser, status] = useRegisterUserMutation();

  const { isLoading, error, data } = status;

  const onSubmit = (data) => {
    console.log(data);
    registerUser(data);
  };

  console.log(error);

  useEffect(() => {
    if (data) {
      dispatch(setToken(data.data));
      dispatch(setStatus(true));
      dispatch(setTokenInLocalStorage());
      
    }
  }, [data]);

  return (
    <FormContainer>
      <LoginHeading>Sign Up </LoginHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Contact no</Label>
          <Input
            {...register("phoneNo", {
              required: "Contact no is required",
            })}
          />
          {errors.phoneNo && (
            <ErrorMessage>{errors.phoneNo.message}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input
            type='number'
            {...register("age", {
              required: "Age is required",
            })}
          />
          {errors.contactNo && (
            <ErrorMessage>{errors.contactNo.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup></FormGroup>

        <FormGroup>
          <Label>Sex</Label>
          <Select
            {...register("gender", {
              required: "Sex is required",
            })}
          >
            <Option value='male'>Male</Option>
            <Option value='female'>Female</Option>
          </Select>
          {errors.gender && (
            <ErrorMessage>{errors.gender.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>

        <Button type='submit'>Sign Up</Button>
      </form>
      <ForgotPassword>
        Alreday have an acccount ?<ForgotLink to='/login'>Login</ForgotLink>
      </ForgotPassword>
    </FormContainer>
  );
};

export default SignUpForm;
