import * as React from "react";
// @ts-ignore
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from "../Components/Loader";
import Post from "../Components/Post";
import { PostType } from "../Components/Post/Container";
import { ReactElement, useEffect } from "react";
import Helmet from "react-helmet";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;
const FEED = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likesCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;
export default () => {
  const { data, loading } = useQuery(FEED);
  return (
    <Wrapper>
      <Helmet title={"Feed | prismagram"} />
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map(
          (post: PostType): ReactElement => (
            <Post
              key={post.id}
              id={post.id}
              user={post.user}
              files={post.files}
              likesCount={post.likesCount}
              isLiked={post.isLiked}
              caption={post.caption}
              comments={post.comments}
              location={post.location}
              createdAt={post.createdAt}
            />
          )
        )}
    </Wrapper>
  );
};
