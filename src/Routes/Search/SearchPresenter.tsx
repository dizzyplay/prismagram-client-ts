import * as React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import { UserCard } from "../../Components/UserCard";
import { SquarePost } from "../../Components/SquarePost";

const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;
const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

type Props = {
  searchTerm: string;
  loading: boolean;
  data: { searchPost: []; searchUser: [] };
};

export const SearchPresenter = ({ searchTerm, loading, data }: Props) => {
  console.log(data);
  if (loading)
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  else if ((data && data.searchPost.length > 0) || data.searchUser.length > 0) {
    return (
      <>
        <Wrapper>
          {data.searchUser.map((user: any, idx: number) => (
            <UserCard
              key={idx}
              id={user.id}
              username={user.username}
              url={user.avatar}
              isSelf={user.isSelf}
              isFollowing={user.isFollowing}
            />
          ))}
        </Wrapper>
        <Wrapper>
          <PostSection>
            {data.searchPost.map((post: any, idx: number) => (
              <SquarePost
                key={idx}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
                url={post.files[0].url}
              />
            ))}
          </PostSection>
        </Wrapper>
      </>
    );
  } else if (data.searchUser.length === 0 && data.searchPost.length === 0) {
    return (
      <Wrapper>
        <FatText text={"No results..."} />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <FatText text={"Search for something..."} />
      </Wrapper>
    );
  }
};
