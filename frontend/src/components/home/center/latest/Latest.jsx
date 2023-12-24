import React from "react";
import { useGetPostsQuery } from "../../../../store/api/api";
import { LatestDiv } from "./style";
import SinglePost from "../../../singlePost/SinglePost";
import BigLoading from "../../../loading/BigLoading";

function Latest() {
  const { data, isLoading, error } = useGetPostsQuery();
  if (isLoading) {
    return <LatestDiv>Loading...</LatestDiv>;
  }

  return (
    <>
    <h1 style={{marginLeft:"2rem",marginTop:"2rem"}}>Recent Posts</h1>
    <LatestDiv>
      {data?.map((post) => {
        return (
          <SinglePost
            post={post}
            key={post._id}
          />
        );
      })}
    </LatestDiv>
    </> 
  );
}

export default Latest;
