import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation updateComment($id: ID!, $commentInput: CommentInput!) {
    updateComment(id: $id, commentInput: $commentInput) {
      id
      content
    }
  }
`;
