import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation CreateComment($taskId: ID!, $comment: CommentInput!) {
    createComment(taskId: $taskId, comment: $comment) {
      id
    }
  }
`;
