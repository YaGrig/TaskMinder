import { gql } from "@apollo/client";

export const GET_ALL_COMMENTS_TASK = gql`
  query commentsByTask($id: ID!) {
    commentsByTask(id: $id) {
      id
      content
      user {
        firstname
      }
    }
  }
`;
