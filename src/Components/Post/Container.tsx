import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { useFormInput } from "../../Hooks/form";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE } from "./Queries";

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
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: {
      postId: id
    }
  });
  const comment = useFormInput("");
  const toggleLIke = () => {
    toggleLikeMutation();
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
  };
  const slide = () => {
    const totalFiles: number = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slide();
  }, [currentItem]);

  return (
    <Presenter
      id={id}
      user={user}
      files={files}
      likesCount={likeCountS}
      isLiked={isLikedS}
      comments={comments}
      createdAt={createdAt}
      location={location}
      caption={caption}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      newComment={comment}
      currentItem={currentItem}
      toggleLike={toggleLIke}
    />
  );
};
