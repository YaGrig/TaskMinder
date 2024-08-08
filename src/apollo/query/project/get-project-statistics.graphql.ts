import { gql } from "@apollo/client";

export const GET_PROJECT_STATISTICS = gql`
  query ProjectTaskStatistics {
    ProjectTaskStatistics {
      projectName
      taskCount
    }
  }
`;
