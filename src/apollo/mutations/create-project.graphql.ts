import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation CreateProject($project: ProjectInput!) {
    createProject(project: $project) {
      id
      title
      description
      tasks {
        id
        title
      }
      members {
        id
        username
      }
    }
  }
`;
