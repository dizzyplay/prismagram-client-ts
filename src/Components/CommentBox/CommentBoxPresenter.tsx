import React, { useState } from "react";
import Avatar from "../Avatar";
import FatText from "../FatText";
import styled from "styled-components";
import { TextareaAutosize } from "react-autosize-textarea/lib/TextareaAutosize";
import { mytheme } from "../../Styles/Theme";

type Props = {
  comments: any;
  newComment: any;
  handleKeyPress: any;
};

export default (props: Props) => {
  const { comments, newComment, handleKeyPress } = props;
  return (
    <Container>
      <CommentUl>
        {comments.map((comment: any) => (
          <Comment key={comment.id}>
            <Avatar size={"sm"} url={comment.user.avatar} key={comment.id} />
            <CommentText>
              <FatText text={comment.user.username} /> {comment.text}
            </CommentText>
          </Comment>
        ))}
      </CommentUl>
      <ReplyBox>
        <Textarea
          onChange={newComment.onChange}
          value={newComment.value}
          placeholder={"댓글달기..."}
          onKeyPress={handleKeyPress}
        />
        <span onClick={handleKeyPress}>게시</span>
      </ReplyBox>
    </Container>
  );
};
const Comment = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0;
  width: auto;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const CommentUl = styled.ul`
  overflow-y: scroll;
  left: 0;
  padding: 16px 12px;
`;
const CommentText = styled.div`
  padding: 0 10px 0 10px;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 90%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
const ReplyBox = styled.div`
  border-top: 1px solid ${(props: mytheme) => props.theme.lightGreyColor};
  padding: 10px;
  display: flex;
  flex-direction: row;
`;
