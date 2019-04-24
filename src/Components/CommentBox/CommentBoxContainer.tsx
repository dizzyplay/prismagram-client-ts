import React, { useState } from "react";
import Presenter from "./CommentBoxPresenter";
import { useMutation } from "react-apollo-hooks";
import { ADD_COMMENT } from "../Post/Queries";

type Props = {
  comments: any;
  postId: string;
};

export default (props: Props) => {
  const { comments, postId } = props;
  const [selfComments, setSelfComment] = useState(comments);
  const newComment = useFormInput("");
  const addCommentMutation = useMutation(ADD_COMMENT);
  const handleKeyPress = async (e: any) => {
    if (e.charCode === 13 || e.type === "click") {
      e.preventDefault();
      if (newComment.value !== "") {
        try {
          const {
            data: { addComment }
          } = await addCommentMutation({
            variables: { postId, text: newComment.value }
          });
          setSelfComment([...selfComments, addComment]);
          newComment.setValue("");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
  return (
    <Presenter
      comments={selfComments}
      newComment={newComment}
      handleKeyPress={handleKeyPress}
    />
  );
};

const useFormInput = (v: string) => {
  const [value, setValue] = useState(v);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return { value, setValue, onChange: handleChange };
};
