import {
  AddPostDiv,
  Avatar,
  BoxContainer,
  IconDiv,
  LogoutButton,
  UserBoxDiv,
  UserName,
  WrapperDiv,
} from "./style";
import avatar from "../../../assets/profile.png";
import { useSelector, useDispatch } from "react-redux";
import {
  removeStatus,
  removeTokenInLocalStorage,
  removeUser,
} from "../../../store/slice/userSlice";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
const UserBox = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLoginButtonClick = () => {
    dispatch(removeStatus());
    dispatch(removeTokenInLocalStorage());
    dispatch(removeUser());
  };
  return (
    <WrapperDiv>
      <AddPostDiv>
        <IconDiv>
          <Link to='/addPost'>
            <IoMdAdd />
          </Link>
        </IconDiv>
      </AddPostDiv>
      <BoxContainer>
        <Avatar
          src={avatar}
          alt='User Avatar'
        />
        <UserName>{user?.name}</UserName>
        <LogoutButton onClick={onLoginButtonClick}>Logout</LogoutButton>
      </BoxContainer>
    </WrapperDiv>
  );
};

export default UserBox;
