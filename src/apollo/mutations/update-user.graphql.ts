import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation UpdateUser( $input: UserInput!) {
    updateUser(input: $input) {
      id
      username
      email
      firstname
      lastname
      avatar
      createdAt
      role 
      comments {
        id
        content
      }
      tasks {
        id
        title
      }
    }
  }
`;
