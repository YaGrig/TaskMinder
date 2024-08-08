/* ЭТОТ ФАЙЛ АВТОМАТИЧЕСКИ СГЕНЕРИРОВАН, ЕСЛИ НУЖНО ПЕРЕСОБРАТЬ ФАЙЛ yarn graphql */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  task?: Maybe<Task>;
  user?: Maybe<User>;
};

export type CommentInput = {
  content: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Мутации для CommentController */
  createComment?: Maybe<Comment>;
  /**  Мутации для ProjectController */
  createProject?: Maybe<Project>;
  /**  Мутации для TaskController */
  createTask?: Maybe<Task>;
  /**  Мутации для UserController */
  createUser?: Maybe<User>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deleteProject?: Maybe<Scalars['Boolean']['output']>;
  deleteTask?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  reorderTask?: Maybe<Task>;
  updateComment?: Maybe<Comment>;
  updateProject?: Maybe<Project>;
  updateTask?: Maybe<Task>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCommentArgs = {
  comment: CommentInput;
  taskId: Scalars['ID']['input'];
};


export type MutationCreateProjectArgs = {
  project: ProjectInput;
};


export type MutationCreateTaskArgs = {
  projectId: Scalars['ID']['input'];
  task: TaskInput;
};


export type MutationCreateUserArgs = {
  user: UserInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationReorderTaskArgs = {
  newOrd?: InputMaybe<Scalars['Int']['input']>;
  newStatus?: InputMaybe<Scalars['String']['input']>;
  taskId: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  commentInput: CommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  project: ProjectInput;
};


export type MutationUpdateTaskArgs = {
  id: Scalars['ID']['input'];
  input: TaskInput;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Maybe<User>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  membersIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tasksIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  title: Scalars['String']['input'];
};

export type ProjectTaskStatisticsDto = {
  __typename?: 'ProjectTaskStatisticsDto';
  projectName?: Maybe<Scalars['String']['output']>;
  taskCount?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  ProjectTaskStatistics?: Maybe<Array<Maybe<ProjectTaskStatisticsDto>>>;
  allComments?: Maybe<Array<Maybe<Comment>>>;
  allProjects?: Maybe<Array<Maybe<Project>>>;
  allTasks?: Maybe<Array<Maybe<Task>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Методы для CommentController */
  commentById?: Maybe<Comment>;
  commentsByTask?: Maybe<Array<Maybe<Comment>>>;
  getUserByEmail?: Maybe<User>;
  /**  Методы для ProjectController */
  projectById?: Maybe<Project>;
  /**  Методы для TaskController */
  taskById?: Maybe<Task>;
  tasksStatistics?: Maybe<Array<Maybe<TaskStatisticsDto>>>;
  /**  Методы для UserController */
  userById?: Maybe<User>;
};


export type QueryAllProjectsArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllTasksArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TaskSort>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommentByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsByTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByEmailArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskByIdArgs = {
  id: Scalars['ID']['input'];
};

/**  Дополнительные типы, такие как Board, Comment и Task, также должны быть определены в вашем GraphQL schema. */
export type ReorderTaskResponse = {
  __typename?: 'ReorderTaskResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Task = {
  __typename?: 'Task';
  assignedUserId?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ord?: Maybe<Scalars['ID']['output']>;
  priority?: Maybe<TaskPriority>;
  status?: Maybe<TaskStatus>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type TaskInput = {
  assignedUserEmail?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<TaskPriority>;
  project?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<TaskStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskPriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export enum TaskSort {
  Date = 'DATE',
  Name = 'NAME',
  Status = 'STATUS'
}

export type TaskStatisticsDto = {
  __typename?: 'TaskStatisticsDto';
  name?: Maybe<TaskStatus>;
  value?: Maybe<Scalars['Int']['output']>;
};

export enum TaskStatus {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Todo = 'TODO'
}

export enum TaskTypes {
  Analitic = 'ANALITIC',
  Bug = 'BUG',
  Improvement = 'IMPROVEMENT',
  Task = 'TASK'
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  /**  GraphQL не имеет встроенного типа Date, поэтому используется String */
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCommentMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
  comment: CommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', id: string } | null };

export type CreateProjectMutationVariables = Exact<{
  project: ProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'Project', id: string, title?: string | null, description?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null, members?: Array<{ __typename?: 'User', id: string, username?: string | null } | null> | null } | null };

export type CreateTaskMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  task: TaskInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask?: { __typename?: 'Task', id: string, title?: string | null, description?: string | null, status?: TaskStatus | null, priority?: TaskPriority | null, dueDate?: string | null, ord?: string | null } | null };

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: boolean | null };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask?: boolean | null };

export type ReorderTaskMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
  newOrd: Scalars['Int']['input'];
  newStatus: Scalars['String']['input'];
}>;


export type ReorderTaskMutation = { __typename?: 'Mutation', reorderTask?: { __typename?: 'Task', id: string, ord?: string | null, status?: TaskStatus | null } | null };

export type UpdateCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  commentInput: CommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment?: { __typename?: 'Comment', id: string, content?: string | null } | null };

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  project: ProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'Project', id: string, title?: string | null, description?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null, members?: Array<{ __typename?: 'User', id: string, username?: string | null } | null> | null } | null };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: TaskInput;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask?: { __typename?: 'Task', id: string, title?: string | null, description?: string | null, status?: TaskStatus | null, priority?: TaskPriority | null, dueDate?: string | null, ord?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, username?: string | null, email: string, firstname?: string | null, lastname?: string | null, avatar?: string | null, createdAt?: string | null, role?: Role | null, comments?: Array<{ __typename?: 'Comment', id: string, content?: string | null } | null> | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null } | null };

export type CommentsByTaskQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CommentsByTaskQuery = { __typename?: 'Query', commentsByTask?: Array<{ __typename?: 'Comment', id: string, content?: string | null, user?: { __typename?: 'User', firstname?: string | null } | null } | null> | null };

export type ProjectTaskStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectTaskStatisticsQuery = { __typename?: 'Query', ProjectTaskStatistics?: Array<{ __typename?: 'ProjectTaskStatisticsDto', projectName?: string | null, taskCount?: number | null } | null> | null };

export type CommentByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CommentByIdQuery = { __typename?: 'Query', commentById?: { __typename?: 'Comment', id: string, content?: string | null, createdAt?: string | null, task?: { __typename?: 'Task', id: string, title?: string | null } | null } | null };

export type AllCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCommentsQuery = { __typename?: 'Query', allComments?: Array<{ __typename?: 'Comment', id: string, content?: string | null, createdAt?: string | null, task?: { __typename?: 'Task', id: string, title?: string | null } | null } | null> | null };

export type ProjectByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProjectByIdQuery = { __typename?: 'Query', projectById?: { __typename?: 'Project', id: string, title?: string | null, description?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null, members?: Array<{ __typename?: 'User', id: string, username?: string | null } | null> | null } | null };

export type AllProjectsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AllProjectsQuery = { __typename?: 'Query', allProjects?: Array<{ __typename?: 'Project', id: string, title?: string | null, description?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null, members?: Array<{ __typename?: 'User', id: string, username?: string | null } | null> | null } | null> | null };

export type TaskByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TaskByIdQuery = { __typename?: 'Query', taskById?: { __typename?: 'Task', id: string, title?: string | null, description?: string | null, status?: TaskStatus | null, priority?: TaskPriority | null, dueDate?: string | null, user?: { __typename?: 'User', id: string } | null } | null };

export type UserByIdQueryVariables = Exact<{ [key: string]: never; }>;


export type UserByIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', id: string, username?: string | null, email: string, firstname?: string | null, lastname?: string | null, createdAt?: string | null, role?: Role | null, comments?: Array<{ __typename?: 'Comment', id: string, content?: string | null } | null> | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null } | null };

export type AllUsersQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AllUsersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'User', id: string, username?: string | null, email: string, firstname?: string | null, lastname?: string | null, createdAt?: string | null, role?: Role | null, comments?: Array<{ __typename?: 'Comment', id: string, content?: string | null } | null> | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null } | null> | null };

export type AllTasksQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TaskSort>;
}>;


export type AllTasksQuery = { __typename?: 'Query', allTasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, status?: TaskStatus | null, priority?: TaskPriority | null, ord?: string | null, dueDate?: string | null, user?: { __typename?: 'User', firstname?: string | null, lastname?: string | null } | null, assignedUserId?: { __typename?: 'User', firstname?: string | null, lastname?: string | null, avatar?: string | null } | null } | null> | null };

export type TasksStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksStatisticsQuery = { __typename?: 'Query', tasksStatistics?: Array<{ __typename?: 'TaskStatisticsDto', name?: TaskStatus | null, value?: number | null } | null> | null };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserByEmailQuery = { __typename?: 'Query', getUserByEmail?: { __typename?: 'User', id: string, username?: string | null, email: string, firstname?: string | null, lastname?: string | null, avatar?: string | null, createdAt?: string | null, role?: Role | null, comments?: Array<{ __typename?: 'Comment', id: string, content?: string | null } | null> | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null } | null> | null } | null };


export const CreateCommentDocument = gql`
    mutation CreateComment($taskId: ID!, $comment: CommentInput!) {
  createComment(taskId: $taskId, comment: $comment) {
    id
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateProjectDocument = gql`
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
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      project: // value for 'project'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateTaskDocument = gql`
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
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      task: // value for 'task'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($id: ID!) {
  deleteComment(id: $id)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation deleteTask($id: ID!) {
  deleteTask(id: $id)
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const ReorderTaskDocument = gql`
    mutation reorderTask($taskId: ID!, $newOrd: Int!, $newStatus: String!) {
  reorderTask(taskId: $taskId, newOrd: $newOrd, newStatus: $newStatus) {
    id
    ord
    status
  }
}
    `;
export type ReorderTaskMutationFn = Apollo.MutationFunction<ReorderTaskMutation, ReorderTaskMutationVariables>;

/**
 * __useReorderTaskMutation__
 *
 * To run a mutation, you first call `useReorderTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderTaskMutation, { data, loading, error }] = useReorderTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      newOrd: // value for 'newOrd'
 *      newStatus: // value for 'newStatus'
 *   },
 * });
 */
export function useReorderTaskMutation(baseOptions?: Apollo.MutationHookOptions<ReorderTaskMutation, ReorderTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReorderTaskMutation, ReorderTaskMutationVariables>(ReorderTaskDocument, options);
      }
export type ReorderTaskMutationHookResult = ReturnType<typeof useReorderTaskMutation>;
export type ReorderTaskMutationResult = Apollo.MutationResult<ReorderTaskMutation>;
export type ReorderTaskMutationOptions = Apollo.BaseMutationOptions<ReorderTaskMutation, ReorderTaskMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation updateComment($id: ID!, $commentInput: CommentInput!) {
  updateComment(id: $id, commentInput: $commentInput) {
    id
    content
  }
}
    `;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      commentInput: // value for 'commentInput'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, options);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const UpdateProjectDocument = gql`
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
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      project: // value for 'project'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: ID!, $input: TaskInput!) {
  updateTask(id: $id, input: $input) {
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
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UserInput!) {
  updateUser(input: $input) {
    id
    username
    email
    firstname
    lastname
    avatar
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
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CommentsByTaskDocument = gql`
    query commentsByTask($id: ID!) {
  commentsByTask(id: $id) {
    id
    content
    user {
      firstname
    }
  }
}
    `;

/**
 * __useCommentsByTaskQuery__
 *
 * To run a query within a React component, call `useCommentsByTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsByTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsByTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommentsByTaskQuery(baseOptions: Apollo.QueryHookOptions<CommentsByTaskQuery, CommentsByTaskQueryVariables> & ({ variables: CommentsByTaskQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsByTaskQuery, CommentsByTaskQueryVariables>(CommentsByTaskDocument, options);
      }
export function useCommentsByTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsByTaskQuery, CommentsByTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsByTaskQuery, CommentsByTaskQueryVariables>(CommentsByTaskDocument, options);
        }
export function useCommentsByTaskSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CommentsByTaskQuery, CommentsByTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CommentsByTaskQuery, CommentsByTaskQueryVariables>(CommentsByTaskDocument, options);
        }
export type CommentsByTaskQueryHookResult = ReturnType<typeof useCommentsByTaskQuery>;
export type CommentsByTaskLazyQueryHookResult = ReturnType<typeof useCommentsByTaskLazyQuery>;
export type CommentsByTaskSuspenseQueryHookResult = ReturnType<typeof useCommentsByTaskSuspenseQuery>;
export type CommentsByTaskQueryResult = Apollo.QueryResult<CommentsByTaskQuery, CommentsByTaskQueryVariables>;
export const ProjectTaskStatisticsDocument = gql`
    query ProjectTaskStatistics {
  ProjectTaskStatistics {
    projectName
    taskCount
  }
}
    `;

/**
 * __useProjectTaskStatisticsQuery__
 *
 * To run a query within a React component, call `useProjectTaskStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectTaskStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectTaskStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectTaskStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectTaskStatisticsQuery, ProjectTaskStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectTaskStatisticsQuery, ProjectTaskStatisticsQueryVariables>(ProjectTaskStatisticsDocument, options);
      }
export function useProjectTaskStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectTaskStatisticsQuery, ProjectTaskStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectTaskStatisticsQuery, ProjectTaskStatisticsQueryVariables>(ProjectTaskStatisticsDocument, options);
        }
export function useProjectTaskStatisticsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProjectTaskStatisticsQuery, ProjectTaskStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProjectTaskStatisticsQuery, ProjectTaskStatisticsQueryVariables>(ProjectTaskStatisticsDocument, options);
        }
export type ProjectTaskStatisticsQueryHookResult = ReturnType<typeof useProjectTaskStatisticsQuery>;
export type ProjectTaskStatisticsLazyQueryHookResult = ReturnType<typeof useProjectTaskStatisticsLazyQuery>;
export type ProjectTaskStatisticsSuspenseQueryHookResult = ReturnType<typeof useProjectTaskStatisticsSuspenseQuery>;
export type ProjectTaskStatisticsQueryResult = Apollo.QueryResult<ProjectTaskStatisticsQuery, ProjectTaskStatisticsQueryVariables>;
export const CommentByIdDocument = gql`
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

/**
 * __useCommentByIdQuery__
 *
 * To run a query within a React component, call `useCommentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommentByIdQuery(baseOptions: Apollo.QueryHookOptions<CommentByIdQuery, CommentByIdQueryVariables> & ({ variables: CommentByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentByIdQuery, CommentByIdQueryVariables>(CommentByIdDocument, options);
      }
export function useCommentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentByIdQuery, CommentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentByIdQuery, CommentByIdQueryVariables>(CommentByIdDocument, options);
        }
export function useCommentByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CommentByIdQuery, CommentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CommentByIdQuery, CommentByIdQueryVariables>(CommentByIdDocument, options);
        }
export type CommentByIdQueryHookResult = ReturnType<typeof useCommentByIdQuery>;
export type CommentByIdLazyQueryHookResult = ReturnType<typeof useCommentByIdLazyQuery>;
export type CommentByIdSuspenseQueryHookResult = ReturnType<typeof useCommentByIdSuspenseQuery>;
export type CommentByIdQueryResult = Apollo.QueryResult<CommentByIdQuery, CommentByIdQueryVariables>;
export const AllCommentsDocument = gql`
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

/**
 * __useAllCommentsQuery__
 *
 * To run a query within a React component, call `useAllCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCommentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCommentsQuery(baseOptions?: Apollo.QueryHookOptions<AllCommentsQuery, AllCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCommentsQuery, AllCommentsQueryVariables>(AllCommentsDocument, options);
      }
export function useAllCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCommentsQuery, AllCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCommentsQuery, AllCommentsQueryVariables>(AllCommentsDocument, options);
        }
export function useAllCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllCommentsQuery, AllCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllCommentsQuery, AllCommentsQueryVariables>(AllCommentsDocument, options);
        }
export type AllCommentsQueryHookResult = ReturnType<typeof useAllCommentsQuery>;
export type AllCommentsLazyQueryHookResult = ReturnType<typeof useAllCommentsLazyQuery>;
export type AllCommentsSuspenseQueryHookResult = ReturnType<typeof useAllCommentsSuspenseQuery>;
export type AllCommentsQueryResult = Apollo.QueryResult<AllCommentsQuery, AllCommentsQueryVariables>;
export const ProjectByIdDocument = gql`
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

/**
 * __useProjectByIdQuery__
 *
 * To run a query within a React component, call `useProjectByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectByIdQuery(baseOptions: Apollo.QueryHookOptions<ProjectByIdQuery, ProjectByIdQueryVariables> & ({ variables: ProjectByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectByIdQuery, ProjectByIdQueryVariables>(ProjectByIdDocument, options);
      }
export function useProjectByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectByIdQuery, ProjectByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectByIdQuery, ProjectByIdQueryVariables>(ProjectByIdDocument, options);
        }
export function useProjectByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProjectByIdQuery, ProjectByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProjectByIdQuery, ProjectByIdQueryVariables>(ProjectByIdDocument, options);
        }
export type ProjectByIdQueryHookResult = ReturnType<typeof useProjectByIdQuery>;
export type ProjectByIdLazyQueryHookResult = ReturnType<typeof useProjectByIdLazyQuery>;
export type ProjectByIdSuspenseQueryHookResult = ReturnType<typeof useProjectByIdSuspenseQuery>;
export type ProjectByIdQueryResult = Apollo.QueryResult<ProjectByIdQuery, ProjectByIdQueryVariables>;
export const AllProjectsDocument = gql`
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

/**
 * __useAllProjectsQuery__
 *
 * To run a query within a React component, call `useAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllProjectsQuery(baseOptions?: Apollo.QueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
      }
export function useAllProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
        }
export function useAllProjectsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
        }
export type AllProjectsQueryHookResult = ReturnType<typeof useAllProjectsQuery>;
export type AllProjectsLazyQueryHookResult = ReturnType<typeof useAllProjectsLazyQuery>;
export type AllProjectsSuspenseQueryHookResult = ReturnType<typeof useAllProjectsSuspenseQuery>;
export type AllProjectsQueryResult = Apollo.QueryResult<AllProjectsQuery, AllProjectsQueryVariables>;
export const TaskByIdDocument = gql`
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

/**
 * __useTaskByIdQuery__
 *
 * To run a query within a React component, call `useTaskByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskByIdQuery(baseOptions: Apollo.QueryHookOptions<TaskByIdQuery, TaskByIdQueryVariables> & ({ variables: TaskByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskByIdQuery, TaskByIdQueryVariables>(TaskByIdDocument, options);
      }
export function useTaskByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskByIdQuery, TaskByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskByIdQuery, TaskByIdQueryVariables>(TaskByIdDocument, options);
        }
export function useTaskByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TaskByIdQuery, TaskByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TaskByIdQuery, TaskByIdQueryVariables>(TaskByIdDocument, options);
        }
export type TaskByIdQueryHookResult = ReturnType<typeof useTaskByIdQuery>;
export type TaskByIdLazyQueryHookResult = ReturnType<typeof useTaskByIdLazyQuery>;
export type TaskByIdSuspenseQueryHookResult = ReturnType<typeof useTaskByIdSuspenseQuery>;
export type TaskByIdQueryResult = Apollo.QueryResult<TaskByIdQuery, TaskByIdQueryVariables>;
export const UserByIdDocument = gql`
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

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
      }
export function useUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
        }
export function useUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdSuspenseQueryHookResult = ReturnType<typeof useUserByIdSuspenseQuery>;
export type UserByIdQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>;
export const AllUsersDocument = gql`
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

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export function useAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersSuspenseQueryHookResult = ReturnType<typeof useAllUsersSuspenseQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const AllTasksDocument = gql`
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

/**
 * __useAllTasksQuery__
 *
 * To run a query within a React component, call `useAllTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTasksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useAllTasksQuery(baseOptions?: Apollo.QueryHookOptions<AllTasksQuery, AllTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTasksQuery, AllTasksQueryVariables>(AllTasksDocument, options);
      }
export function useAllTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTasksQuery, AllTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTasksQuery, AllTasksQueryVariables>(AllTasksDocument, options);
        }
export function useAllTasksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllTasksQuery, AllTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllTasksQuery, AllTasksQueryVariables>(AllTasksDocument, options);
        }
export type AllTasksQueryHookResult = ReturnType<typeof useAllTasksQuery>;
export type AllTasksLazyQueryHookResult = ReturnType<typeof useAllTasksLazyQuery>;
export type AllTasksSuspenseQueryHookResult = ReturnType<typeof useAllTasksSuspenseQuery>;
export type AllTasksQueryResult = Apollo.QueryResult<AllTasksQuery, AllTasksQueryVariables>;
export const TasksStatisticsDocument = gql`
    query tasksStatistics {
  tasksStatistics {
    name
    value
  }
}
    `;

/**
 * __useTasksStatisticsQuery__
 *
 * To run a query within a React component, call `useTasksStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<TasksStatisticsQuery, TasksStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksStatisticsQuery, TasksStatisticsQueryVariables>(TasksStatisticsDocument, options);
      }
export function useTasksStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksStatisticsQuery, TasksStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksStatisticsQuery, TasksStatisticsQueryVariables>(TasksStatisticsDocument, options);
        }
export function useTasksStatisticsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TasksStatisticsQuery, TasksStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TasksStatisticsQuery, TasksStatisticsQueryVariables>(TasksStatisticsDocument, options);
        }
export type TasksStatisticsQueryHookResult = ReturnType<typeof useTasksStatisticsQuery>;
export type TasksStatisticsLazyQueryHookResult = ReturnType<typeof useTasksStatisticsLazyQuery>;
export type TasksStatisticsSuspenseQueryHookResult = ReturnType<typeof useTasksStatisticsSuspenseQuery>;
export type TasksStatisticsQueryResult = Apollo.QueryResult<TasksStatisticsQuery, TasksStatisticsQueryVariables>;
export const GetUserByEmailDocument = gql`
    query getUserByEmail($email: String!) {
  getUserByEmail(email: $email) {
    id
    username
    email
    firstname
    lastname
    avatar
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

/**
 * __useGetUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables> & ({ variables: GetUserByEmailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options);
      }
export function useGetUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options);
        }
export function useGetUserByEmailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options);
        }
export type GetUserByEmailQueryHookResult = ReturnType<typeof useGetUserByEmailQuery>;
export type GetUserByEmailLazyQueryHookResult = ReturnType<typeof useGetUserByEmailLazyQuery>;
export type GetUserByEmailSuspenseQueryHookResult = ReturnType<typeof useGetUserByEmailSuspenseQuery>;
export type GetUserByEmailQueryResult = Apollo.QueryResult<GetUserByEmailQuery, GetUserByEmailQueryVariables>;