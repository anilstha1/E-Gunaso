import React from "react";
import { TrendingPostDiv } from "./style";
import SinglePost from "../../../singlePost/SinglePost";
import { useGetTrendingPostQuery } from "../../../../store";

function Trending() {
  const { data, isLoading, error } = useGetTrendingPostQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
        <h1 style={{marginLeft:"2rem",marginTop:"2rem"}}>Trending</h1>
 
    <TrendingPostDiv>
      {data.map((post) => {
        return (
          <SinglePost
            post={post}
            key={post.id}
          />
        );
      })}
    </TrendingPostDiv>
    </> 
  );
}

export default Trending;
