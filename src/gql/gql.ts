/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateComment($taskId: ID!, $comment: CommentInput!) {\n    createComment(taskId: $taskId, comment: $comment) {\n      id\n    }\n  }\n": types.CreateCommentDocument,
    "\n  mutation CreateProject($project: ProjectInput!) {\n    createProject(project: $project) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n": types.CreateProjectDocument,
    "\n  mutation CreateTask($projectId: ID!, $task: TaskInput!) {\n    createTask(projectId: $projectId, task: $task) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      ord\n    }\n  }\n": types.CreateTaskDocument,
    "\n  mutation deleteComment($id: ID!) {\n    deleteComment(id: $id)\n  }\n": types.DeleteCommentDocument,
    "\n  mutation deleteTask($id: ID!) {\n    deleteTask(id: $id)\n  }\n": types.DeleteTaskDocument,
    "\n  mutation reorderTask($taskId: ID!, $newOrd: Int!, $newStatus: String!) {\n    reorderTask(taskId: $taskId, newOrd: $newOrd, newStatus: $newStatus) {\n      id\n      ord\n      status\n    }\n  }\n": types.ReorderTaskDocument,
    "\n  mutation updateComment($id: ID!, $commentInput: CommentInput!) {\n    updateComment(id: $id, commentInput: $commentInput) {\n      id\n      content\n    }\n  }\n": types.UpdateCommentDocument,
    "\n  mutation UpdateProject($id: ID!, $project: ProjectInput!) {\n    updateProject(id: $id, project: $project) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n": types.UpdateProjectDocument,
    "\n  mutation UpdateTask($id: ID!, $input: TaskInput!) {\n    updateTask(id: $id, input: $input) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      ord\n    }\n  }\n": types.UpdateTaskDocument,
    "\n  mutation UpdateUser( $input: UserInput!) {\n    updateUser(input: $input) {\n      id\n      username\n      email\n      firstname\n      lastname\n      avatar\n      createdAt\n      role \n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query commentsByTask($id: ID!) {\n    commentsByTask(id: $id) {\n      id\n      content\n      user {\n        firstname\n      }\n    }\n  }\n": types.CommentsByTaskDocument,
    "\n  query ProjectTaskStatistics {\n    ProjectTaskStatistics {\n      projectName\n      taskCount\n    }\n  }\n": types.ProjectTaskStatisticsDocument,
    "\n  query commentById($id: ID!) {\n    commentById(id: $id) {\n      id\n      content\n      createdAt\n      task {\n        id\n        title\n      }\n    }\n  }\n": types.CommentByIdDocument,
    "\n  query allComments {\n    allComments {\n      id\n      content\n      createdAt\n      task {\n        id\n        title\n      }\n    }\n  }\n": types.AllCommentsDocument,
    "\n  query projectById($id: ID!) {\n    projectById(id: $id) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n": types.ProjectByIdDocument,
    "\n  query allProjects($filter: String, $offset: Int, $limit: Int) {\n    allProjects(filter: $filter, offset: $offset, limit: $limit) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n": types.AllProjectsDocument,
    "\n  query taskById($id: ID!) {\n    taskById(id: $id) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      user {\n        id\n      }\n    }\n  }\n": types.TaskByIdDocument,
    "\n  query userById {\n    userById {\n      id\n      username\n      email\n      firstname\n      lastname\n      createdAt\n      role\n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n": types.UserByIdDocument,
    "\n  query allUsers($filter: String, $offset: Int, $limit: Int) {\n    allUsers(filter: $filter, offset: $offset, limit: $limit) {\n      id\n      username\n      email\n      firstname\n      lastname\n      createdAt\n      role\n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n": types.AllUsersDocument,
    "\n  query allTasks($filter: String, $offset: Int, $limit: Int, $sortBy: TaskSort) {\n    allTasks(filter: $filter, offset: $offset, limit: $limit, sortBy: $sortBy) {\n      id\n      title\n      description\n      status\n      priority\n      ord\n      dueDate\n      user {\n        firstname\n        lastname\n      }\n      assignedUserId {\n        firstname\n        lastname\n        avatar\n      }\n    }\n  }\n": types.AllTasksDocument,
    "\n  query tasksStatistics {\n    tasksStatistics {\n      name\n      value\n    }\n  }\n": types.TasksStatisticsDocument,
    "\n  query getUserByEmail( $email: String!) {\n    getUserByEmail(email: $email) {\n      id\n      username\n      email\n      firstname\n      lastname\n      avatar\n      createdAt\n      role \n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n": types.GetUserByEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateComment($taskId: ID!, $comment: CommentInput!) {\n    createComment(taskId: $taskId, comment: $comment) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateComment($taskId: ID!, $comment: CommentInput!) {\n    createComment(taskId: $taskId, comment: $comment) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateProject($project: ProjectInput!) {\n    createProject(project: $project) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProject($project: ProjectInput!) {\n    createProject(project: $project) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTask($projectId: ID!, $task: TaskInput!) {\n    createTask(projectId: $projectId, task: $task) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      ord\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTask($projectId: ID!, $task: TaskInput!) {\n    createTask(projectId: $projectId, task: $task) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      ord\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteComment($id: ID!) {\n    deleteComment(id: $id)\n  }\n"): (typeof documents)["\n  mutation deleteComment($id: ID!) {\n    deleteComment(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteTask($id: ID!) {\n    deleteTask(id: $id)\n  }\n"): (typeof documents)["\n  mutation deleteTask($id: ID!) {\n    deleteTask(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation reorderTask($taskId: ID!, $newOrd: Int!, $newStatus: String!) {\n    reorderTask(taskId: $taskId, newOrd: $newOrd, newStatus: $newStatus) {\n      id\n      ord\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation reorderTask($taskId: ID!, $newOrd: Int!, $newStatus: String!) {\n    reorderTask(taskId: $taskId, newOrd: $newOrd, newStatus: $newStatus) {\n      id\n      ord\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateComment($id: ID!, $commentInput: CommentInput!) {\n    updateComment(id: $id, commentInput: $commentInput) {\n      id\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation updateComment($id: ID!, $commentInput: CommentInput!) {\n    updateComment(id: $id, commentInput: $commentInput) {\n      id\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProject($id: ID!, $project: ProjectInput!) {\n    updateProject(id: $id, project: $project) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProject($id: ID!, $project: ProjectInput!) {\n    updateProject(id: $id, project: $project) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTask($id: ID!, $input: TaskInput!) {\n    updateTask(id: $id, input: $input) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      ord\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTask($id: ID!, $input: TaskInput!) {\n    updateTask(id: $id, input: $input) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      ord\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser( $input: UserInput!) {\n    updateUser(input: $input) {\n      id\n      username\n      email\n      firstname\n      lastname\n      avatar\n      createdAt\n      role \n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser( $input: UserInput!) {\n    updateUser(input: $input) {\n      id\n      username\n      email\n      firstname\n      lastname\n      avatar\n      createdAt\n      role \n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query commentsByTask($id: ID!) {\n    commentsByTask(id: $id) {\n      id\n      content\n      user {\n        firstname\n      }\n    }\n  }\n"): (typeof documents)["\n  query commentsByTask($id: ID!) {\n    commentsByTask(id: $id) {\n      id\n      content\n      user {\n        firstname\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectTaskStatistics {\n    ProjectTaskStatistics {\n      projectName\n      taskCount\n    }\n  }\n"): (typeof documents)["\n  query ProjectTaskStatistics {\n    ProjectTaskStatistics {\n      projectName\n      taskCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query commentById($id: ID!) {\n    commentById(id: $id) {\n      id\n      content\n      createdAt\n      task {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query commentById($id: ID!) {\n    commentById(id: $id) {\n      id\n      content\n      createdAt\n      task {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allComments {\n    allComments {\n      id\n      content\n      createdAt\n      task {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query allComments {\n    allComments {\n      id\n      content\n      createdAt\n      task {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query projectById($id: ID!) {\n    projectById(id: $id) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query projectById($id: ID!) {\n    projectById(id: $id) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allProjects($filter: String, $offset: Int, $limit: Int) {\n    allProjects(filter: $filter, offset: $offset, limit: $limit) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query allProjects($filter: String, $offset: Int, $limit: Int) {\n    allProjects(filter: $filter, offset: $offset, limit: $limit) {\n      id\n      title\n      description\n      tasks {\n        id\n        title\n      }\n      members {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query taskById($id: ID!) {\n    taskById(id: $id) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      user {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query taskById($id: ID!) {\n    taskById(id: $id) {\n      id\n      title\n      description\n      status\n      priority\n      dueDate\n      user {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userById {\n    userById {\n      id\n      username\n      email\n      firstname\n      lastname\n      createdAt\n      role\n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query userById {\n    userById {\n      id\n      username\n      email\n      firstname\n      lastname\n      createdAt\n      role\n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allUsers($filter: String, $offset: Int, $limit: Int) {\n    allUsers(filter: $filter, offset: $offset, limit: $limit) {\n      id\n      username\n      email\n      firstname\n      lastname\n      createdAt\n      role\n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query allUsers($filter: String, $offset: Int, $limit: Int) {\n    allUsers(filter: $filter, offset: $offset, limit: $limit) {\n      id\n      username\n      email\n      firstname\n      lastname\n      createdAt\n      role\n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allTasks($filter: String, $offset: Int, $limit: Int, $sortBy: TaskSort) {\n    allTasks(filter: $filter, offset: $offset, limit: $limit, sortBy: $sortBy) {\n      id\n      title\n      description\n      status\n      priority\n      ord\n      dueDate\n      user {\n        firstname\n        lastname\n      }\n      assignedUserId {\n        firstname\n        lastname\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query allTasks($filter: String, $offset: Int, $limit: Int, $sortBy: TaskSort) {\n    allTasks(filter: $filter, offset: $offset, limit: $limit, sortBy: $sortBy) {\n      id\n      title\n      description\n      status\n      priority\n      ord\n      dueDate\n      user {\n        firstname\n        lastname\n      }\n      assignedUserId {\n        firstname\n        lastname\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query tasksStatistics {\n    tasksStatistics {\n      name\n      value\n    }\n  }\n"): (typeof documents)["\n  query tasksStatistics {\n    tasksStatistics {\n      name\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserByEmail( $email: String!) {\n    getUserByEmail(email: $email) {\n      id\n      username\n      email\n      firstname\n      lastname\n      avatar\n      createdAt\n      role \n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserByEmail( $email: String!) {\n    getUserByEmail(email: $email) {\n      id\n      username\n      email\n      firstname\n      lastname\n      avatar\n      createdAt\n      role \n      comments {\n        id\n        content\n      }\n      tasks {\n        id\n        title\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;