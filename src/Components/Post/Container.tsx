import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { useFormInput } from "../../Hooks/form";
import { useMutation } from "react-apollo-hooks";
import { ADD_COMMENT, TOGGLE_LIKE } from "./Queries";
import { toast } from "react-toastify";

export interface PostType {
  id: string;
  user: {
    id: string;
    avatar: string;
    username: string;
  };
  files: { id: string; url: string }[];
  likesCount: number;
  isLiked: boolean;
  location: string;
  caption: string;
  comments: {
    id: string;
    text: string;
    user: { id: string; username: string };
  }[];
  createdAt: string;
  [key: string]: any;
}

export default ({
  id,
  user,
  files,
  location,
  caption,
  likesCount,
  isLiked,
  comments,
  createdAt
}: PostType) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likesCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState(comments);
  const comment = useFormInput("");
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: {
      postId: id
    }
  });
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });

  const onKeyUp = async (e: any) => {
    const { charCode } = e;
    if (charCode === 13 || e.type === "click") {
      e.preventDefault();
      if (comment.value.length) {
        const { data } = await addCommentMutation();
        setSelfComments([...selfComments, data.addComment]);
        comment.setValue("");
      }
    }
  };
  const toggleLIke = async () => {
    try {
      await toggleLikeMutation();
      if (isLikedS) {
        setIsLiked(false);
        setLikeCount(likeCountS - 1);
      } else {
        setIsLiked(true);
        setLikeCount(likeCountS + 1);
      }
    } catch (e) {
      toast.error("Something is wrong");
    }
  };
  let timeId: any;
  const slide = () => {
    const totalFiles: number = files.length;
    if (currentItem === totalFiles - 1) {
      timeId = setTimeout(() => setCurrentItem(0), 3000);
    } else {
      timeId = setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };

  const unSlide = () => {
    clearTimeout(timeId);
  };
  useEffect(() => {
    slide();
    return () => {
      unSlide();
    };
  }, [currentItem]);

  return (
    <Presenter
      id={id}
      user={user}
      files={files}
      likesCount={likeCountS}
      isLiked={isLikedS}
      comments={selfComments}
      createdAt={createdAt}
      location={location}
      caption={caption}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      newComment={comment}
      currentItem={currentItem}
      toggleLike={toggleLIke}
      onKeyPress={onKeyUp}
    />
  );
};
