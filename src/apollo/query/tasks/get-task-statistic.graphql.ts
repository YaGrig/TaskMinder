import { gql } from "@apollo/client";

export const TASK_STATISTIC = gql`
  query tasksStatistics {
    tasksStatistics {
      name
      value
    }
  }
`;
