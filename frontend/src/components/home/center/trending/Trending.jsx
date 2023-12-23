import React from "react";
import { TrendingPostDiv } from "./style";
import posts from "../../../../data/post";
import SinglePost from "../../../singlePost/SinglePost";

function Trending() {
  return (
    <TrendingPostDiv>
      {posts.map((post) => {
        return (
          <SinglePost
            post={post}
            key={post.id}
          />
        );
      })}
    </TrendingPostDiv>
  );
}

export default Trending;
