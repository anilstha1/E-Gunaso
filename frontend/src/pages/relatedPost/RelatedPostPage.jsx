import React from "react";
import {
  MainRelatedPostDiv,
  RelatedPostDiv,
  SimilarPostHeading,
  YourPostDiv,
} from "./style";

import { useSelector } from "react-redux";
import SinglePost from "../../components/singlePost/SinglePost";

function RelatedPostPage() {
  const post = useSelector((state) => state.post.addedPost);

  const recommendedGunaso=useSelector((state)=>state.post.recommendedPost)

  

 
  return (
    <MainRelatedPostDiv>
      <YourPostDiv>
        <SinglePost post={post} />
      </YourPostDiv>

      <RelatedPostDiv>
        <SimilarPostHeading>Similar Gunaso</SimilarPostHeading>
        {recommendedGunaso?.map((item) => {
          return <SinglePost post={item} key={item._id}/>; 
        })}
      </RelatedPostDiv>
    </MainRelatedPostDiv>
  );
}

export default RelatedPostPage;
