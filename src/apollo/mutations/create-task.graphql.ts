import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation CreateTask($projectId: ID!, $task: TaskInput!) {
    createTask(projectId: $projectId, task: $task) {
      id
      title
      description
      status
      priority
      dueDate
      ord
    }
  }
`;
