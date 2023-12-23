import React from "react";
import {
  SearchBarDiv,
  SearchBarInput,
  SearchBarInputDiv,
  SearchIconDiv,
} from "./style";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setSearchString } from "../../../store";
function SearchBar() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(setSearchString(data.searchQuery));
    navigate(`/search/${data.searchQuery}`);
  };
  return (
    <SearchBarDiv>
      <SearchIconDiv>
        <FaSearch />
      </SearchIconDiv>
      <SearchBarInputDiv onSubmit={handleSubmit(onSubmit)}>
        <SearchBarInput
          placeholder='Search Gunaso'
          {...register("searchQuery")}
        />
      </SearchBarInputDiv>
    </SearchBarDiv>
  );
}

export default SearchBar;
