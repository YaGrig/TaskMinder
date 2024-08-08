import {
  Project,
  Task,
  TaskSort,
  User,
  ProjectTaskStatisticsDto,
  useAllProjectsQuery,
  useAllTasksQuery,
  useAllUsersQuery,
  useProjectTaskStatisticsQuery,
  useTasksStatisticsQuery,
  TaskStatisticsDto,
} from "@/apollo/generated-hooks";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface MyClassPageContextProps {
  data: Task[];
  projectData: Project[];
  setFilter: (filter: string) => void;
  setFilterUser: (filter: string) => void;
  setFilterProject: (filter: string) => void;
  setSort: (sort: TaskSort) => void;
  taskStatistic: TaskStatisticsDto[];
  projectTaskStatistics: ProjectTaskStatisticsDto[];
  filterProject: string;
  usersData: User[];
  filter: string;
  filterUser: string;
  taskLoading: boolean;
  sort: TaskSort;
  refetch: () => void;
  refetchProject: () => void;
  refetchTaskStatistic: () => void;
  refetchProjectTaskStatistics: () => void;
  setOffset: (offset: number) => void;
  setLimit: (limit: number) => void;
  totalCount: number;
  calledInvites: boolean;
  calledClasses: boolean;
}

interface MyClassPageProps {
  children: React.ReactNode;
}

const MyClassPageContext = createContext<Partial<MyClassPageContextProps>>({
  data: [],
  projectData: [],
  usersData: [],
  filter: "",
  filterUser: "",
  filterProject: "",
  sort: TaskSort.Name,
  totalCount: 0,
  calledInvites: false,
  calledClasses: false,
  taskStatistic: [],
  projectTaskStatistics: [],
});

export const useMyClassPageContext = () => useContext(MyClassPageContext);

export const MyClassPageProvider: React.FC<MyClassPageProps> = ({ children }) => {
  const [filter, setFilter] = useState<string>("");
  const [filterUser, setFilterUser] = useState<string>("");
  const [filterProject, setFilterProject] = useState<string>("");
  const [sort, setSort] = useState<TaskSort>(TaskSort.Name);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(100);

  const {
    data,
    called: calledInvites,
    refetch,
    loading: taskLoading,
  } = useAllTasksQuery({
    variables: { filter, sortBy: sort, offset, limit },
  });

  const totalCount = useMemo(() => data?.allTasks?.length || 0, [data]);

  const { data: usersData, refetch: refetchUsers } = useAllUsersQuery({
    variables: { filter: filterUser, offset, limit },
  });

  const { data: projectData, refetch: refetchProject } = useAllProjectsQuery({
    variables: { filter: filterProject, offset, limit },
  });

  const { data: taskStatistic, refetch: refetchTaskStatistic } =
    useTasksStatisticsQuery();

  const { data: projectTaskStatistics, refetch: refetchProjectTaskStatistics } =
    useProjectTaskStatisticsQuery();

  useEffect(() => {
    refetch({ filter, offset, limit });
  }, [filter, sort, offset, limit, refetch]);

  useEffect(() => {
    refetchUsers({ filter: filterUser, offset, limit });
  }, [filterUser, offset, limit, refetchUsers]);

  useEffect(() => {
    refetchProject({ filter: filterProject, offset, limit });
  }, [filterProject, offset, limit, refetchProject]);
  useEffect(() => {}, [projectTaskStatistics]);

  const value = useMemo(
    () => ({
      data: data?.allTasks || [],
      projectData: projectData?.allProjects || [],
      usersData: usersData?.allUsers || [],
      filter,
      filterUser,
      filterProject,
      sort,
      setFilter,
      setFilterUser,
      setFilterProject,
      setSort,
      setOffset,
      setLimit,
      taskStatistic: taskStatistic?.tasksStatistics || [],
      projectTaskStatistics: projectTaskStatistics?.ProjectTaskStatistics || [],
      taskLoading,
      totalCount,
      refetch,
      refetchProject,
      refetchTaskStatistic,
      refetchProjectTaskStatistics,
      calledInvites,
    }),
    [
      data,
      projectData,
      usersData,
      filter,
      filterUser,
      filterProject,
      sort,
      taskStatistic,
      projectTaskStatistics,
      taskLoading,
      totalCount,
      refetch,
      refetchProject,
      refetchTaskStatistic,
      refetchProjectTaskStatistics,
      calledInvites,
    ]
  );

  return (
    // @ts-ignore
    <MyClassPageContext.Provider value={value}>
      {children}
    </MyClassPageContext.Provider>
  );
};
