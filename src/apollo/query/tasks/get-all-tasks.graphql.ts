import { gql } from "@apollo/client";

export const GET_ALL_TASKS = gql`
  query allTasks($filter: String, $offset: Int, $limit: Int, $sortBy: TaskSort) {
    allTasks(filter: $filter, offset: $offset, limit: $limit, sortBy: $sortBy) {
      id
      title
      description
      status
      priority
      ord
      dueDate
      user {
        firstname
        lastname
      }
      assignedUserId {
        firstname
        lastname
        avatar
      }
    }
  }
`;
