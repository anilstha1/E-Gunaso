import React from "react";
import { useGetPostsQuery } from "../../../../store/api/api";
import { LatestDiv } from "./style";
import SinglePost from "../../../singlePost/SinglePost";
import BigLoading from "../../../loading/BigLoading";

function Latest() {
  const { data, isLoading, error } = useGetPostsQuery();
console.log(data)
  if (isLoading) {
    return (
      <LatestDiv>
        <BigLoading />
      </LatestDiv>
    );
  }
  return (
    <LatestDiv>
      {data.map((post) => {
        return (
          <SinglePost
            post={post}
            key={post._id}
          />
        );
      })}
    </LatestDiv>
  );
}

export default Latest;
