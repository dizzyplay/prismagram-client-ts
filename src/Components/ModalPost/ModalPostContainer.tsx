import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import Loader from "../Loader";
import Presenter from "./ModalPostPresenter";
import { ADD_COMMENT } from "../Post/Queries";

const SEE_FULL_FEED = gql`
  query($id: String!) {
    seeFullPost(id: $id) {
      id
      location
      caption
      user {
        id
        avatar
        username
        isSelf
        isFollowing
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
          avatar
        }
      }
      createdAt
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  id: string;
  modalClose: () => void;
};

const ModalPostContainer = (props: Props) => {
  const {
    data: { seeFullPost },
    loading
  }: any = useQuery(SEE_FULL_FEED, { variables: { id: props.id } });

  return (
    <ModalPortal>
      <Modal onClick={props.modalClose}>
        {loading ? (
          <Loader />
        ) : (
          <Presenter
            id={seeFullPost.id}
            user={seeFullPost.user}
            files={seeFullPost.files}
            location={seeFullPost.location}
            caption={seeFullPost.caption}
            likesCount={seeFullPost.likesCount}
            isLiked={seeFullPost.isLiked}
            comments={seeFullPost.comments}
            createdAt={seeFullPost.createdAt}
            modalClose={props.modalClose}
          />
        )}
      </Modal>
    </ModalPortal>
  );
};

const ModalPortal = ({ children }: any) => {
  const el: any = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
};

export default ModalPostContainer;
