import { gql } from "@apollo/client";

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail( $email: String!) {
    getUserByEmail(email: $email) {
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
