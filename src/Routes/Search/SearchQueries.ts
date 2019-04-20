import {gql} from "apollo-boost";

export const SEARCH=gql`
  query search($term:String!){
    searchPost(term:$term){
      files{
        url
      }
      likesCount
      commentsCount
    }
    searchUser(term:$term){
      id
      avatar
      username
      isFollowing
      isSelf
    }
  }
`

