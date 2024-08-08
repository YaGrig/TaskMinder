import { gql } from "@apollo/client";

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $project: ProjectInput!) {
    updateProject(id: $id, project: $project) {
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
