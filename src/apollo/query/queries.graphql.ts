import { gql } from "@apollo/client";

// Comment Queries
export const GET_COMMENT_BY_ID = gql`
  query commentById($id: ID!) {
    commentById(id: $id) {
      id
      content
      createdAt
      task {
        id
        title
      }
    }
  }
`;

export const GET_ALL_COMMENTS = gql`
  query allComments {
    allComments {
      id
      content
      createdAt
      task {
        id
        title
      }
    }
  }
`;

// Project Queries
export const GET_PROJECT_BY_ID = gql`
  query projectById($id: ID!) {
    projectById(id: $id) {
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

export const GET_ALL_PROJECTS = gql`
  query allProjects($filter: String, $offset: Int, $limit: Int) {
    allProjects(filter: $filter, offset: $offset, limit: $limit) {
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

// Task Queries
export const GET_TASK_BY_ID = gql`
  query taskById($id: ID!) {
    taskById(id: $id) {
      id
      title
      description
      status
      priority
      dueDate
      user {
        id
      }
    }
  }
`;

// User Queries
export const GET_USER_BY_ID = gql`
  query userById {
    userById {
      id
      username
      email
      firstname
      lastname
      createdAt
      role
      comments {
        id
        content
      }
      tasks {
        id
        title
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query allUsers($filter: String, $offset: Int, $limit: Int) {
    allUsers(filter: $filter, offset: $offset, limit: $limit) {
      id
      username
      email
      firstname
      lastname
      createdAt
      role
      comments {
        id
        content
      }
      tasks {
        id
        title
      }
    }
  }
`;
