import {gql} from "apollo-boost"

export const LOG_IN = gql`
    mutation requestSecret($email:String!){
        requestSecret(email:$email)
    }
`;

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
    ){
    createAccount(
        username:$username
        email:$email
        firstName:$firstName
        lastName:$lastName
      )
    }
`;

export const CONFIRM_SECRET = gql`
    mutation confirmSecret($secretKey:String!, $email:String!){
        confirmSecret(
            secret:$secretKey,
            email:$email
        )
    }
  `;

export const LOCAL_LOGIN = gql`
  mutation userLogin($token:String!){
      userLogin(token:$token) @client
  }`;