import React from "react";
import {
  SearchBarDiv,
  SearchBarInput,
  SearchBarInputDiv,
  SearchIconDiv,
} from "./style";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
function SearchBar() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // Handle your search logic here using the data object
    console.log(data.searchQuery);
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
