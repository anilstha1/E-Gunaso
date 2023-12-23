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
} from "./style";
import { useDispatch } from "react-redux";
import LoadingButton from "../loading/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/api/api";
import { setStatus, setToken, setTokenInLocalStorage } from "../../store/slice/userSlice";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser, status] = useLoginUserMutation();

  const { isLoading, error, data } = status;

  const onSubmit = (data) => {
    registerUser(data);
  };

  useEffect(() => {
    if (data) {
      dispatch(setToken(data.data));
      dispatch(setStatus(true));
      dispatch(setTokenInLocalStorage());
    }
  }, [data]);


  return (
    <FormContainer>
      <LoginHeading>Login </LoginHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type='submit'>Login</Button>
      </form>

      <ForgotPassword>
        Don't have an accound ?<ForgotLink to='/signup'>signup</ForgotLink>
      </ForgotPassword>
    </FormContainer>
  );
};

export default LoginForm;
