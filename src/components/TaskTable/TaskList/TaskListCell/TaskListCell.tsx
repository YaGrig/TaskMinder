import React from "react";
import { TableCell, TableSortLabel, Menu, MenuItem } from "@material-ui/core";
import { TaskSort } from "@/apollo/generated-hooks";

interface SortableHeaderCellProps {
  sortOptions: TaskSort[];
  sortField?: (field: TaskSort) => void;
}

type SortDirection = "asc" | "desc";

const SortableHeaderCell: React.FC<SortableHeaderCellProps> = ({
  sortOptions,
  sortField = () => {}, 
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedSortField, setSelectedSortField] = React.useState<TaskSort>(
    TaskSort.Name
  );
  const [sortDirection, setSortDirection] =
    React.useState<SortDirection>("asc");

  const handleOpenMenu = (event: React.MouseEvent<HTMLSpanElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (field: TaskSort) => {
    setSelectedSortField(field);
    sortField(field);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    setAnchorEl(null);
  };

  return (
    <TableCell>
      <TableSortLabel
        active={!!anchorEl}
        direction={sortDirection}
        onClick={handleOpenMenu}
      >
        Sort by : {selectedSortField}
      </TableSortLabel>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {sortOptions.map((option) => (
          <MenuItem
            key={option}
            selected={option === selectedSortField}
            onClick={() => handleMenuItemClick(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </TableCell>
  );
};

export default SortableHeaderCell;
