import Logo from "./logo/Logo";
import AuthButton from "./rightSide/AuthButton";
import SearchBar from "./searchbar/SearchBar";
import { CenterDiv, LeftDiv, NavbarDiv, OuterMostDiv, RightDiv } from "./style";
import { useSelector } from "react-redux";
import UserBox from "./userbox/Usebox";

function Header() {
  const { status } = useSelector((state) => state.user);
  console.log(status);

  return (
    <OuterMostDiv>
      <NavbarDiv>
        <LeftDiv>
          <Logo />
        </LeftDiv>
        <CenterDiv>
          <SearchBar />
        </CenterDiv>

        <RightDiv>{status ? <UserBox /> : <AuthButton />}</RightDiv>
      </NavbarDiv>
    </OuterMostDiv>
  );
}

export default Header;
