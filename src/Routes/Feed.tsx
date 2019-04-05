import * as React from "react";
// @ts-ignore
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from "../Components/Loader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;
const FEED = gql`
  {
    seeFeed {
      location
      caption
    }
  }
`;
export default () => {
  console.log("asdf");
  const { data, loading } = useQuery(FEED);
  return <Wrapper>{loading && <Loader />}</Wrapper>;
};
