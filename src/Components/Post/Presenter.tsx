import React from "react";
import { PostType } from "./Container";
import Avatar from "../Avatar";
// @ts-ignore
import styled from "styled-components";
import { mytheme } from "../../Styles/Theme";
import FatText from "../FatText";
import { HeartEmpty, HeartFull, Comment } from "../Icons";
import { TextareaAutosize } from "react-autosize-textarea/lib/TextareaAutosize";
import { dateParser } from "../../utils";
import { Link } from "react-router-dom";

const Post = styled.div`
  ${(props: mytheme) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

const File = styled.div`
  max-width: 100%;
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: ${(props: mytheme) => (props.showing ? 1 : 0)};
  background-image: url(${(props: mytheme) => props.src});
  transition: opacity 0.5s linear;
`;
const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
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

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentButton = styled.div`
  cursor: pointer;
  color: ${(props: mytheme) =>
    props.enabled ? props.theme.blueColor : props.theme.darkGreyColor}};
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentSpan = styled.span`
  padding: 6px;
`;
const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;
const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;
const Meta = styled.div`
  padding: 15px;
`;
const Button = styled.span`
  cursor: pointer;
`;
const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props: mytheme) => props.theme.lightGreyColor} 1px solid;
`;
export default ({
  id,
  user,
  files,
  location,
  likesCount,
  caption,
  isLiked,
  comments,
  newComment,
  createdAt,
  currentItem,
  toggleLike,
  onKeyPress
}: PostType) => (
  <Post>
    <Header>
      <Avatar size={"sm"} url={user.avatar} />
      <UserColumn>
        <Link to={`/${user.username}`}>
          <FatText text={user.username} />
        </Link>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, idx) => (
          <File key={file.id} src={file.url} showing={idx === currentItem} />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likesCount === 1 ? "1 like" : `${likesCount} likes`} />
      <CommentBox>
        <CommentSpan>
          <FatText text={user.username} /> {caption}
        </CommentSpan>
        {comments.map((comment, idx) => (
          <CommentSpan key={idx}>
            <FatText text={comment.user.username} /> {comment.text}
          </CommentSpan>
        ))}
      </CommentBox>
      <Timestamp>
        <>{dateParser(createdAt)}</>
      </Timestamp>
      <CommentWrapper>
        <Textarea
          placeholder={"Add a comment..."}
          onChange={newComment.onChange}
          value={newComment.value}
          onKeyPress={onKeyPress}
        />
        <CommentButton
          enabled={newComment.value.length > 0}
          onClick={onKeyPress}
        >
          게시
        </CommentButton>
      </CommentWrapper>
    </Meta>
  </Post>
);
