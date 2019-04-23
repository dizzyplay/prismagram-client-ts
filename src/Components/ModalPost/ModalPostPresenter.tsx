import React from "react";
import styled from "styled-components";
import { mytheme } from "../../Styles/Theme";
import { PostType } from "../Post/Container";
import Avatar from "../Avatar";
import FatText from "../FatText";
import FollowButton from "../FollowButton";
import { TextareaAutosize } from "react-autosize-textarea/lib/TextareaAutosize";

export default (props: PostType) => {
  const { id, files, caption, comments, createdAt, user, likesCount, location, isLiked, newComment, handleComment } = props;
  console.log(files[0].url);
  return (
    <Divider onClick={(e: any) => e.stopPropagation()}>
      <Photo src={files[0].url}/>
      <Meta>
        <UserProfile>
          <Avatar url={user.avatar} size={"sm"}/>
          <User><FatText text={user.username}/></User>
          <span style={{ padding: "6px" }}>•</span>
          {!user.isSelf && <FollowButton isFollowing={user.isFollowing} isText={true} id={user.id}/>}
        </UserProfile>
        <CommentBox>
          <CommentUl>
            {comments.map((comment) => (
              <Comment key={comment.id}>
                <Avatar size={"sm"} url={comment.user.avatar} key={comment.id}/>
                <CommentText>
                  <FatText text={comment.user.username}/>{" "}
                  {comment.text}
                </CommentText>
              </Comment>
            ))}
          </CommentUl>
        </CommentBox>
        <ReplyBox>
          <Textarea onChange={newComment.onChange} value={newComment.value} placeholder={"댓글달기..."}
                    onKeyPress={newComment.keyPress}/>
          <span onClick={handleComment}>게시</span>
        </ReplyBox>
      </Meta>
      <CloseButton onClick={props.modalClose}>close</CloseButton>
    </Divider>
  );
}
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

const User = styled.div`
  padding: 0 10px 0 10px;
  
`;
const CommentBox = styled.div`
display:flex;
flex-direction: column;
`;

const CommentUl = styled.ul`
  overflow-y: scroll;
  left:0;
  padding: 16px 12px;
`;

const Comment = styled.div`
  display:flex;
  flex-direction: row;
  padding: 10px 0 10px 0;
  width: auto;
  align-items: center;
`;

const CommentText = styled.div`
  padding: 0 10px 0 10px;
`;

const CloseButton = styled.button`
width: 100px;
position:fixed;
right:0;
top:0;
z-index:3;
`;

const Photo = styled.div`
height: 600px;
background-image: url(${(props: mytheme) => props.src});
background-position: center;
background-size:cover;
width:100%;
`;

const Divider = styled.div`
  background: white;
  width:${(props: mytheme) => props.theme.maxWidth};
  height: 600px;
  display: flex;
  flex-direction: row;
`;

const Meta = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
`;

const UserProfile = styled.div`
  width: 350px;
  height: 80px;
  border-bottom: ${(props: mytheme) => props.theme.lightGreyColor} 1px solid;
  background: white;
  display:flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;
