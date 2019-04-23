import React, { useState } from "react";
import { FollowButtonPresenter } from "./FollowButtonPresenter";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW_USER, UNFOLLOW_USER } from "./FollowButtonQueries";

type Props = {
  isFollowing: boolean;
  id: string;
  isText: boolean;
};

export default ({ isFollowing, id, isText }: Props) => {
  const followUserMutation = useMutation(FOLLOW_USER);
  const unfollowUserMutation = useMutation(UNFOLLOW_USER);
  const [isFollow, setIsFollow] = useState(isFollowing);
  const handleFollow = async (id: string) => {
    console.log("hi");
    console.log(id);
    if (isFollow) {
      await unfollowUserMutation({ variables: { id } });
      setIsFollow(false);
    } else {
      await followUserMutation({ variables: { id } });
      setIsFollow(true);
    }
  };
  return (
        <FollowButtonPresenter
          isFollowing={isFollow}
          handleFollow={handleFollow}
          id={id}
          isText={isText}
        />
  );
};
