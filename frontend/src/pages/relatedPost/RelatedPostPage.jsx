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

  const data = [
    {
      _id: "65872ea0c444030ec77539bd",
      user: {
        _id: "658707a894de2bb5da4a76db",
        name: "jeevan",
        random_name: "extremistknighthood248",
      },
      isanonymous: true,
      title: "Bad Road condition",
      post: "Way to my home is very bad",
      target_office: "metropolitan city",
      status: "pending",
      likes: [],
      dislikes: [],
      comments: [],
      createdAt: "2023-12-23T19:01:52.464Z",
      updatedAt: "2023-12-23T19:01:52.464Z",
      __v: 0,
    },
    {
      _id: "65872ea0c444030ec77539bd",
      user: {
        _id: "658707a894de2bb5da4a76db",
        name: "jeevan",
        random_name: "extremistknighthood248",
      },
      isanonymous: true,
      title: "Bad Road condition",
      post: "Way to my home is very bad",
      target_office: "metropolitan city",
      status: "pending",
      likes: [],
      dislikes: [],
      comments: [],
      createdAt: "2023-12-23T19:01:52.464Z",
      updatedAt: "2023-12-23T19:01:52.464Z",
      __v: 0,
    },
    {
      _id: "65872ea0c444030ec77539bd",
      user: {
        _id: "658707a894de2bb5da4a76db",
        name: "jeevan",
        random_name: "extremistknighthood248",
      },
      isanonymous: true,
      title: "Bad Road condition",
      post: "Way to my home is very bad",
      target_office: "metropolitan city",
      status: "pending",
      likes: [],
      dislikes: [],
      comments: [],
      createdAt: "2023-12-23T19:01:52.464Z",
      updatedAt: "2023-12-23T19:01:52.464Z",
      __v: 0,
    },
    {
      _id: "65872ea0c444030ec77539bd",
      user: {
        _id: "658707a894de2bb5da4a76db",
        name: "jeevan",
        random_name: "extremistknighthood248",
      },
      isanonymous: true,
      title: "Bad Road condition",
      post: "Way to my home is very bad",
      target_office: "metropolitan city",
      status: "pending",
      likes: [],
      dislikes: [],
      comments: [],
      createdAt: "2023-12-23T19:01:52.464Z",
      updatedAt: "2023-12-23T19:01:52.464Z",
      __v: 0,
    },
    {
      _id: "65872ea0c444030ec77539bd",
      user: {
        _id: "658707a894de2bb5da4a76db",
        name: "jeevan",
        random_name: "extremistknighthood248",
      },
      isanonymous: true,
      title: "Bad Road condition",
      post: "Way to my home is very bad",
      target_office: "metropolitan city",
      status: "pending",
      likes: [],
      dislikes: [],
      comments: [],
      createdAt: "2023-12-23T19:01:52.464Z",
      updatedAt: "2023-12-23T19:01:52.464Z",
      __v: 0,
    },
  ];
  return (
    <MainRelatedPostDiv>
      <YourPostDiv>
        <SinglePost post={post} />
      </YourPostDiv>

      <RelatedPostDiv>
        <SimilarPostHeading>Similar Gunaso</SimilarPostHeading>
        {data.map((item) => {
          return <SinglePost post={item} />;
        })}
      </RelatedPostDiv>
    </MainRelatedPostDiv>
  );
}

export default RelatedPostPage;
