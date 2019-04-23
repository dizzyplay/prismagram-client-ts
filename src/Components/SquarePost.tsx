import * as React from "react";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";
import { HeartFull, Comment } from "./Icons";
import ModalPost from "../Components/ModalPost";
import { useState } from "react";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.1s linear;
  svg {
    fill: white;
  }
`;

const Container = styled.div`
  background-image: url(${(props: mytheme) => props.bg});
  background-size: cover;
  cursor: pointer;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Number = styled.div`
  color: white;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 30px;
  }
`;

const NumberText = styled.span`
  margin-left: 10px;
`;

type Props = {
  likesCount: number;
  commentsCount: number;
  url: string;
  id: string;
};

export const SquarePost = (props: Props) => {
  const [modal, setModal] = useState(false)
  const modalOpen=()=>{
    setModal(true)
  }
  const modalClose=()=>{
    setModal(false)
  }
  return (
    <Container bg={props.url}>
      {modal ? <ModalPost id={props.id} modalClose={modalClose} /> : null}
      <Overlay onClick={modalOpen}>
        <Number>
          <HeartFull />
          <NumberText>{props.likesCount}</NumberText>
        </Number>
        <Number>
          <Comment />
          <NumberText>{props.commentsCount}</NumberText>
        </Number>
      </Overlay>
    </Container>
  );
};
