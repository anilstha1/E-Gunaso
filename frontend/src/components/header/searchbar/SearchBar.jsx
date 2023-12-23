import React from "react";
import {
  SearchBarDiv,
  SearchBarInput,
  SearchBarInputDiv,
  SearchIconDiv,
} from "./style";
import { FaSearch } from "react-icons/fa";
function SearchBar() {
  return (
    <SearchBarDiv>
      <SearchIconDiv>
        <FaSearch />
      </SearchIconDiv>
      <SearchBarInputDiv>
        <SearchBarInput placeholder="Search Gunaso"/>
      </SearchBarInputDiv>
    </SearchBarDiv>
  );
}

export default SearchBar;
