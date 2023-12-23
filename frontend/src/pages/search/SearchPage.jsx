import React from "react";
import { useSelector } from "react-redux";
import { useSearchGunasoQuery } from "../../store";
import { SearchDiv } from "./style";
import SinglePost from "../../components/singlePost/SinglePost";

function SearchPage() {
  const { searchText } = useSelector((state) => state.user);
  const { data, isLoading, error } = useSearchGunasoQuery(searchText);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SearchDiv>
      {data?.map((post) => {
        return (
          <SinglePost
            key={post._id}
            post={post}
          />
        );
      })}
    </SearchDiv>
  );
}

export default SearchPage;
