import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  MouseEvent,
} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
} from "@mui/material";
import { useMyClassPageContext } from "../Providers/ProviderTask";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "./Table.module.scss";
import WUIMenu, { MENU_ITEM } from "../header/actions/WUIMenu";
import WUIMenuItem from "../header/actions/WUIMenuItem/WUIMenuItem";
import {
  Task,
  TaskPriority,
  TaskStatus,
  TaskTypes,
  useUpdateTaskMutation,
} from "@/apollo/generated-hooks";
import { useModalState } from "@/api/hooks/use-modal-state";
import DateInput from "../DatePicker/DatePicker";

interface Props {
  columns: {
    id: string;
    label: string;
  }[];
}

interface DatePickerPosition {
  top: number;
  left: number;
}

interface MenuItem {
  label: string;
  onClick: () => void;
}

const MuiTable: React.FC<Props> = ({ columns }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(6);
  const menuModal = useModalState();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCell, setActiveCell] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeRowId, setActiveRowId] = useState<string | null>(null);
  const [datePickerPosition, setDatePickerPosition] =
    useState<DatePickerPosition>({
      top: 0,
      left: 0,
    });
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [dates, setDates] = useState<Record<string, Date>>({});
  const prevCellRef = useRef<HTMLElement | null>(null);

  const {
    data: dataTasks,
    totalCount,
    setOffset,
    refetch,
    setLimit,
  } = useMyClassPageContext();
  const [updateTask] = useUpdateTaskMutation();
  const taskPriorities = Object.values(TaskPriority);
  const taskStatuses = Object.values(TaskStatus);
  const taskTypes = Object.values(TaskTypes);

  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    if (dataTasks) {
      setData(dataTasks);
    }
  }, [dataTasks]);

  useEffect(() => {
    refetch && refetch();
  }, [page, rowsPerPage, refetch]);

  useEffect(() => {
    if (data) {
      const initialDates: Record<string, Date> = {};
      data.forEach((task) => {
        if (task.dueDate) {
          initialDates[task.id] = new Date(task.dueDate);
        }
      });
      setDates(initialDates);
    }
  }, [data]);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    const newOffset = newPage * rowsPerPage;
    setOffset && setOffset(newOffset);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = event.target.value;
    const newRowsPerPage = parseInt(value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    setLimit && setLimit(newRowsPerPage);
    setOffset && setOffset(0);
  };

  const handleDateChange = useCallback(
    (date: Date | null) => {
      const parsedDate = new Date(date as Date);
      const formattedDate = parsedDate.toISOString().split("T")[0];

      setDates((prevDates) => ({
        ...prevDates,
        [activeRowId!]: parsedDate,
      }));

      updateTask({
        variables: {
          id: activeRowId ?? "",
          input: { dueDate: formattedDate },
        },
      }).then(() => {
        menuModal.close();
        refetch && refetch();
        setOpenDate(false);
      });
    },
    [activeRowId, menuModal, refetch, updateTask]
  );

  const handleCellClick = useCallback(
    (
      cellData: any,
      column: { id: string; label: string },
      rowId: string,
      cellElement: HTMLElement
    ) => {
      const cellRect = cellElement.getBoundingClientRect();
      const cellCenter = {
        top: cellRect.top + cellRect.height / 3,
        left: cellRect.left,
      };
      setDatePickerPosition(cellCenter);
      setAnchorEl(cellElement);
      setActiveRowId(rowId);
      setActiveCell(cellData);
      setOpenDate(false);

      let newMenuItems: MenuItem[] = [];
      switch (column.label) {
        case "Priority":
          newMenuItems = taskPriorities.map((priority) => ({
            label: priority,
            onClick: () => {
              updateTask({
                variables: {
                  id: rowId,
                  input: { priority },
                },
              }).then(() => {
                menuModal.close();
                refetch && refetch();
              });
            },
          }));
          break;
        case "Status":
          newMenuItems = taskStatuses.map((status) => ({
            label: status,
            onClick: () => {
              updateTask({
                variables: {
                  id: rowId,
                  input: { status },
                },
              }).then(() => {
                menuModal.close();
                refetch && refetch();
              });
            },
          }));
          break;
        case "Type":
          newMenuItems = taskTypes.map((type) => ({
            label: type,
            onClick: () => {
              menuModal.close();
            },
          }));
          break;
        case "DueDate":
          setOpenDate(true);
          break;
        default:
          newMenuItems = [];
      }

      if (newMenuItems.length) {
        menuModal.open();
      }
      if (prevCellRef.current) {
        prevCellRef.current.classList.remove(styles.activeTab);
      }
      prevCellRef.current = cellElement;
      setMenuItems(newMenuItems);
      cellElement.classList.add(styles.activeTab);
    },
    [menuModal, refetch, taskPriorities, taskStatuses, taskTypes, updateTask]
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, overflowX: "visible", minHeight: 300 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={styles.divider}>#</TableCell>
              {columns.map((column) => (
                <TableCell
                  className={`${styles.divider} ${styles.fixedWidth}`}
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell
                  style={{
                    borderRight: "1px solid #e0e0e0",
                  }}
                  className={row.id === activeCell ? styles.activeTab : ""}
                  component="th"
                  scope="row"
                >
                  {page * rowsPerPage + index + 1}
                </TableCell>
                {columns.map((column, columnIndex) => (
                  <TableCell
                    key={column.id}
                    style={{
                      cursor: "pointer",
                      borderRight:
                        columnIndex !== columns.length - 1
                          ? "1px solid #e0e0e0"
                          : "none",
                    }}
                    className={`${styles.tableCell} ${styles.fixedWidth} ${
                      column.label === "DueDate"
                        ? styles.datePickerContainer
                        : ""
                    }`}
                    onClick={(e) =>
                      handleCellClick(
                        row[column.id as keyof Task],
                        column,
                        row.id,
                        e.currentTarget
                      )
                    }
                  >
                    {column.label === "DueDate" &&
                    row.id === activeRowId &&
                    openDate ? (
                      <DateInput
                        onChange={handleDateChange}
                        position={datePickerPosition}
                        setIsOpen={setOpenDate}
                      />
                    ) : (
                      <span>{row[column.id as keyof Task] as string}</span>
                    )}
                    {menuModal.opened &&
                      activeCell === row[column.id as keyof Task] && (
                        <WUIMenu
                          anchorEl={anchorEl}
                          className={styles.menu}
                          location={"top"}
                          onClose={() => {
                            if (prevCellRef.current) {
                              prevCellRef.current.classList.remove(
                                styles.activeTab
                              );
                            }
                            menuModal.close();
                          }}
                        >
                          {menuItems.map((item) => (
                            <WUIMenuItem
                              key={item.label}
                              title={item.label}
                              onClick={item.onClick}
                            />
                          ))}
                        </WUIMenu>
                      )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 24]}
        component="div"
        count={totalCount ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={(props) => {
          const { count, page, rowsPerPage, onPageChange } = props;
          return (
            <div className={styles.pagination}>
              <IconButton
                onClick={(event) => onPageChange(event, Math.max(0, page - 1))}
                disabled={page === 0}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <IconButton
                onClick={(event) =>
                  onPageChange(
                    event,
                    Math.min(Math.ceil(count / rowsPerPage) - 1, page + 1)
                  )
                }
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              >
                <KeyboardArrowRight />
              </IconButton>
            </div>
          );
        }}
      />
    </>
  );
};

export default MuiTable;
