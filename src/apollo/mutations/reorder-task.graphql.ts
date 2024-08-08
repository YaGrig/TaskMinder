import { gql } from "@apollo/client";

export const REORDER_TASK = gql`
  mutation reorderTask($taskId: ID!, $newOrd: Int!, $newStatus: String!) {
    reorderTask(taskId: $taskId, newOrd: $newOrd, newStatus: $newStatus) {
      id
      ord
      status
    }
  }
`;
