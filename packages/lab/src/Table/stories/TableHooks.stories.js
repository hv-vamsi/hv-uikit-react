/* eslint-disable no-nested-ternary */

import React, { useCallback, useEffect, useMemo, useState } from "react";
import range from "lodash/range";
import {
  useFlexLayout,
  useBlockLayout,
  useAbsoluteLayout,
  useTable,
  useGroupBy,
} from "react-table";
import { useTheme } from "@material-ui/core";

import { Delete, Duplicate, Lock, Unlock, Preview, Ban } from "@hv/uikit-react-icons";

import {
  HvBulkActions,
  HvEmptyState,
  HvPagination,
  HvToggleButton,
  HvButton,
  HvDropdown,
  HvTypography,
  HvSwitch,
  HvDropDownMenu,
} from "@hv/uikit-react-core";

import {
  HvTable,
  HvTableBody,
  HvTableCell,
  HvTableContainer,
  HvTableHead,
  HvTableHeader,
  HvTableRow,
  useHvTable,
  useHvPagination,
  useHvSortBy,
  useHvRowSelection,
  useHvBulkActions,
  useHvTableSticky,
  useHvRowExpand,
  useHvHeaderGroups,
} from "../..";

import {
  makeData,
  makeSelectedData,
  getColumns,
  getGroupedColumns,
  getGroupedRowsColumns,
  useServerData,
} from "./utils";
import LoadingContainer from "./LoadingContainer";

export const Main = () => {
  const columns = useMemo(() => getColumns(), []);
  const data = useMemo(() => makeData(6), []);

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useTable({
    columns,
    data,
  });

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps({ align: col.align })}>
                  {col.render("Header")}
                </HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <HvTableRow hover {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <HvTableCell {...cell.getCellProps({ align: cell.column.align })}>
                    {cell.render("Cell")}
                  </HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const UseHvTable = () => {
  const data = useMemo(() => makeData(6), []);

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useHvTable({
    data,
  });

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <HvTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const Pagination = () => {
  const columns = useMemo(() => getColumns(), []);
  const data = useMemo(() => makeData(32), []);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    state: { pageSize },
    getHvPaginationProps,
  } = useHvTable({ columns, data }, useHvPagination);

  const EmptyRow = () => (
    <HvTableRow>
      <HvTableCell colSpan={100} />
    </HvTableRow>
  );

  return (
    <>
      <HvTableContainer style={{ maxHeight: 400 }}>
        <HvTable {...getTableProps()}>
          <HvTableHead>
            {headerGroups.map((headerGroup) => (
              <HvTableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => (
                  <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
                ))}
              </HvTableRow>
            ))}
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {range(pageSize).map((i) => {
              const row = page[i];

              if (!row) return <EmptyRow key={i} />;

              prepareRow(row);

              return (
                <HvTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                  ))}
                </HvTableRow>
              );
            })}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>
      {page?.length ? <HvPagination {...getHvPaginationProps()} /> : undefined}
    </>
  );
};

export const Selection = () => {
  const columns = useMemo(() => getColumns(), []);
  const data = useMemo(() => makeData(6), []);

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useHvTable(
    { columns, data },
    useHvRowSelection
  );

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <HvTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const ControlledSelection = () => {
  const columns = useMemo(() => getColumns(), []);
  const initialData = useMemo(() => makeSelectedData(6), []);
  const [data, setData] = useState(initialData);

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useHvTable(
    { columns, data, manualRowSelectedKey: "selected" },
    useHvRowSelection
  );

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);

            return (
              <HvTableRow
                onChange={(event) => {
                  const newData = [...data];
                  newData[index].selected = event.target.checked;
                  setData(newData);
                }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const BulkActions = () => {
  const columns = useMemo(() => getColumns(), []);
  const [data, setData] = useState(makeData(64));

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    selectedFlatRows,
    toggleAllRowsSelected,
    getHvBulkActionsProps,
    getHvPaginationProps,
  } = useHvTable({ columns, data }, useHvPagination, useHvRowSelection, useHvBulkActions);

  const handleAction = useCallback(
    (_evt, id, action) => {
      const selected = selectedFlatRows.map((el) => el.original);

      switch (action.id) {
        case "duplicate": {
          const newEls = selected.map((el) => ({
            ...el,
            id: `${el.id}-copy`,
            name: `${el.name}-copy`,
          }));
          setData([...data, ...newEls]);
          break;
        }
        case "delete": {
          const selectedIds = selected.map((el) => el.id);
          toggleAllRowsSelected(false);
          setData(data.filter((el) => !selectedIds.includes(el.id)));
          break;
        }
        case "lock":
        case "preview":
        default:
          break;
      }
    },
    [data, selectedFlatRows, toggleAllRowsSelected]
  );

  const EmptyStateRow = useCallback(
    () => (
      <HvTableRow>
        <HvTableCell colSpan={100} style={{ height: 96 }}>
          <HvEmptyState message="No data to display." icon={<Ban role="presentation" />} />
        </HvTableCell>
      </HvTableRow>
    ),
    []
  );

  return (
    <>
      <HvBulkActions
        {...getHvBulkActionsProps()}
        maxVisibleActions={1}
        actionsCallback={handleAction}
        actions={[
          { id: "duplicate", label: "Duplicate", icon: <Duplicate /> },
          { id: "delete", label: "Delete", icon: <Delete /> },
          { id: "lock", label: "Lock", icon: <Lock /> },
          { id: "preview", label: "Preview", icon: <Preview /> },
        ]}
      />
      <HvTableContainer>
        <HvTable {...getTableProps()}>
          <HvTableHead>
            {headerGroups.map((headerGroup) => (
              <HvTableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => (
                  <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
                ))}
              </HvTableRow>
            ))}
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {page?.length ? (
              page.map((row) => {
                prepareRow(row);

                return (
                  <HvTableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                    ))}
                  </HvTableRow>
                );
              })
            ) : (
              <EmptyStateRow />
            )}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>
      {page?.length ? <HvPagination {...getHvPaginationProps()} /> : undefined}
    </>
  );
};

export const Sortable = () => {
  const colSort = useMemo(() => {
    const levels = ["minor", "average", "major", "critical"];

    return (rowA, rowB, columnId) => {
      const a = levels.indexOf(rowA.values[columnId]?.toLowerCase());
      const b = levels.indexOf(rowB.values[columnId]?.toLowerCase());

      // eslint-disable-next-line no-nested-ternary
      return a === b ? 0 : a > b ? 1 : -1;
    };
  }, []);

  const columns = useMemo(() => {
    const cols = getColumns();
    cols[2].disableSortBy = true;
    cols[5].sortType = colSort;
    return cols;
  }, [colSort]);

  const data = useMemo(() => makeData(5), []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useHvTable(
    { columns, data },
    useHvSortBy
  );

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <HvTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const Expandable = () => {
  const theme = useTheme();
  const columns = useMemo(() => getColumns(), []);
  const data = useMemo(() => makeData(6), []);
  const i18n = useMemo(
    () => ({
      expandRowButtonAriaLabel: "Click to expand this row",
      collapseRowButtonAriaLabel: "Click to collapse this row",
    }),
    []
  );

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useHvTable(
    { columns, data, labels: i18n },
    useHvRowExpand
  );

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            // expandable row
            return (
              <React.Fragment key={row.id}>
                <HvTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                  ))}
                </HvTableRow>
                <HvTableRow
                  style={{
                    display: row.isExpanded ? null : "none",
                    background: theme.palette.atmo1,
                  }}
                >
                  <HvTableCell
                    style={{ paddingBottom: 0, paddingTop: 0, textAlign: "center", height: 100 }}
                    colSpan="100%"
                  >
                    <HvTypography>Expanded content for: {row.values.name}</HvTypography>
                  </HvTableCell>
                </HvTableRow>
              </React.Fragment>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const GroupBy = () => {
  const columns = useMemo(() => getGroupedRowsColumns(), []);
  const data = useMemo(() => makeData(6), []);

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useHvTable(
    {
      columns,
      data,
      initialState: {
        groupBy: ["status"],
        expanded: {
          "status:Closed": true,
          "status:Open": true,
        },
      },
    },
    useGroupBy,
    useHvRowExpand
  );

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <React.Fragment key={row.id}>
                <HvTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell {...cell.getCellProps()}>
                      {cell.isGrouped ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          {cell.render("Cell")} ({row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        cell.render("Aggregated")
                      ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        cell.render("Cell")
                      )}
                    </HvTableCell>
                  ))}
                </HvTableRow>
              </React.Fragment>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const StickyHeadersAndColumns = () => {
  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "name", sticky: "left", width: 120 },
      { Header: "Time", accessor: "createdDate", sticky: "right", width: 120 },
      { Header: "Event Type", accessor: "eventType" },
      { Header: "Status", accessor: "status", width: 70 },
      {
        Header: "Probability",
        accessor: "riskScore",
        align: "right",
        Cell: ({ value }) => `${value}%`,
        width: 80,
      },
      { Header: "Severity", accessor: "severity", sticky: "left", width: 100 },
      { Header: "Priority", accessor: "priority", width: 80 },
    ],
    []
  );
  const data = useMemo(() => makeData(100), []);

  const { getTableProps, getTableHeadProps, getTableBodyProps, prepareRow, headerGroups, rows } =
    useHvTable(
      {
        columns,
        data,
        stickyHeader: true,
      },
      useHvTableSticky
    );

  return (
    <HvTableContainer style={{ maxHeight: 480 }}>
      <HvTable {...getTableProps()}>
        <HvTableHead {...getTableHeadProps()}>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <HvTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const GroupedHeaders = () => {
  const columns = useMemo(() => getGroupedColumns(), []);
  const data = useMemo(() => makeData(), []);

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useHvTable(
    {
      columns,
      data,
    },
    useHvHeaderGroups
  );

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <HvTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                ))}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

GroupedHeaders.parameters = {
  docs: {
    description: { story: "A table example with grouped headers." },
  },
};

export const EmptyCells = () => {
  const columns = getColumns();
  const data = makeData(6).map((entry) => ({
    ...entry,
    // make some entries empty
    status: entry.status === "Closed" ? null : entry.status,
  }));

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useHvTable({
    columns,
    data,
    defaultColumn: {
      Cell: ({ value }) => value ?? "—",
    },
  });

  return (
    <HvTableContainer>
      <HvTable {...getTableProps()}>
        <HvTableHead>
          {headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        <HvTableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <HvTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>;
                })}
              </HvTableRow>
            );
          })}
        </HvTableBody>
      </HvTable>
    </HvTableContainer>
  );
};

export const LockedSelection = () => {
  const data = useMemo(() => makeData(64), []);

  const columns = useMemo(
    () => [
      ...getColumns(),
      {
        id: "actions",
        variant: "actions",
        Cell: ({ row }) => {
          return (
            <HvToggleButton
              aria-label="Lock"
              notSelectedIcon={<Unlock />}
              selectedIcon={<Lock />}
              selected={row.isSelectionLocked}
              onClick={() => row.toggleRowLockedSelection()}
            />
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    rows,
    selectedFlatRows,
    getHvBulkActionsProps,
    getHvPaginationProps,
  } = useHvTable(
    {
      columns,
      data,
      aditivePageBulkSelection: true,
      subtractivePageBulkDeselection: false,
      initialState: {
        selectedRowIds: { 5: true, 7: true },
        lockedSelectionRowIds: { 2: true, 6: true },
      },
    },
    useHvPagination,
    useHvRowSelection,
    useHvBulkActions
  );

  return (
    <>
      <HvBulkActions
        {...getHvBulkActionsProps()}
        numTotal={rows.length}
        numSelected={selectedFlatRows.length}
        showSelectAllPages
      />
      <HvTableContainer>
        <HvTable {...getTableProps()}>
          <HvTableHead>
            {headerGroups.map((headerGroup) => (
              <HvTableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => (
                  <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
                ))}
              </HvTableRow>
            ))}
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <HvTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                  ))}
                </HvTableRow>
              );
            })}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>
      {page?.length ? <HvPagination {...getHvPaginationProps()} /> : undefined}
    </>
  );
};

const SampleTable = ({ columns, data, layoutHook, component }) => {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    rows,
    selectedFlatRows,
    getHvBulkActionsProps,
    getHvPaginationProps,
  } = useHvTable(
    {
      columns,
      data,
    },
    layoutHook,
    useHvPagination,
    useHvRowSelection,
    useHvBulkActions
  );

  return (
    <>
      <HvBulkActions
        {...getHvBulkActionsProps()}
        numTotal={rows.length}
        numSelected={selectedFlatRows.length}
        showSelectAllPages
      />
      <HvTableContainer>
        <HvTable {...getTableProps()} component={component}>
          <HvTableHead>
            {headerGroups.map((headerGroup) => (
              <HvTableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => (
                  <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
                ))}
              </HvTableRow>
            ))}
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <HvTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                  ))}
                </HvTableRow>
              );
            })}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>
      {page?.length ? <HvPagination {...getHvPaginationProps()} /> : undefined}
    </>
  );
};

export const AlternativeLayout = () => {
  const alternativeLayouts = useMemo(
    () => [
      { id: "0", label: "useFlexLayout", hook: useFlexLayout, selected: true },
      { id: "1", label: "useBlockLayout", hook: useBlockLayout },
      { id: "2", label: "useAbsoluteLayout", hook: useAbsoluteLayout },
    ],
    []
  );

  const [layoutHook, setLayoutHook] = useState(() => useFlexLayout);
  const [tableElements, setTableElements] = useState(false);

  const data = useMemo(() => makeData(64), []);

  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "name", minWidth: 120 },
      { Header: "Time", accessor: "createdDate", minWidth: 100 },
      { Header: "Status", accessor: "status", width: 120 },
      {
        Header: "Probability",
        accessor: "riskScore",
        align: "right",
        Cell: ({ value }) => `${value}%`,
      },
      { Header: "Priority", accessor: "priority" },
      {
        id: "actions",
        variant: "actions",
        width: 32,
        Cell: () => {
          return (
            <HvButton aria-label="Delete" icon>
              <Delete />
            </HvButton>
          );
        },
      },
    ],
    []
  );

  const table = useMemo(
    () => (
      <SampleTable
        columns={columns}
        data={data}
        layoutHook={layoutHook}
        component={tableElements ? "table" : "div"}
        // key ensures a new context for the SampleTable's
        // useHvTable call when React reconciles the tree
        key={layoutHook}
      />
    ),
    [columns, data, layoutHook, tableElements]
  );

  return (
    <>
      <div style={{ display: "flex", alignItems: "baseline", marginBottom: 20 }}>
        <div style={{ width: 200 }}>
          <HvDropdown
            label="Select layout"
            values={alternativeLayouts}
            multiSelect={false}
            onChange={(item) => setLayoutHook(() => item.hook)}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 20 }}>
          <HvTypography
            aria-hidden="true"
            onClick={() => setTableElements((v) => !v)}
            style={{ marginRight: 10 }}
          >
            <pre>&lt;div&gt;</pre>
          </HvTypography>
          <HvSwitch
            checked={tableElements}
            aria-label="Use table html elements"
            onChange={(_evt, newChecked) => setTableElements(newChecked)}
          />
          <HvTypography
            aria-hidden="true"
            onClick={() => setTableElements((v) => !v)}
            style={{ marginLeft: 10 }}
          >
            <pre>&lt;table&gt;</pre>
          </HvTypography>
        </div>
      </div>
      {table}
    </>
  );
};

export const ServerSide = () => {
  const [data, columns, fetchData, loading, pageCount] = useServerData();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    state: { pageSize, pageIndex, sortBy },
    getHvPaginationProps,
  } = useHvTable(
    {
      columns,
      data,
      manualPagination: true,
      manualSortBy: true,
      autoResetPage: false,
      autoResetSortBy: false,
      disableMultiSort: true,
      pageCount,
    },
    useHvSortBy,
    useHvPagination
  );

  useEffect(() => {
    gotoPage(0);
  }, [sortBy, gotoPage]);

  useEffect(() => {
    fetchData({ pageIndex, pageSize, sortBy });
  }, [sortBy, fetchData, pageIndex, pageSize]);

  const EmptyRow = () => (
    <HvTableRow>
      <HvTableCell colSpan={100} />
    </HvTableRow>
  );

  return (
    <LoadingContainer loading={loading}>
      <HvTableContainer>
        <HvTable {...getTableProps()}>
          <HvTableHead>
            {headerGroups.map((headerGroup) => (
              <HvTableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => (
                  <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
                ))}
              </HvTableRow>
            ))}
          </HvTableHead>
          <HvTableBody {...getTableBodyProps({ style: { position: "relative" } })}>
            {range(pageSize).map((i) => {
              const row = page[i];

              if (!row) return <EmptyRow key={i} />;

              prepareRow(row);

              return (
                <HvTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell {...cell.getCellProps()}>{cell.render("Cell")}</HvTableCell>
                  ))}
                </HvTableRow>
              );
            })}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>
      <HvPagination {...getHvPaginationProps()} />
    </LoadingContainer>
  );
};

ServerSide.parameters = {
  docs: {
    description: {
      story:
        "A table with sorting and pagination handled server-side, using React Table. Set `manualPagination` and `manualSortBy` to have manual control over pagination and sorting.",
    },
  },
};

export const KitchenSink = () => {
  const colSort = useMemo(() => {
    const levels = ["minor", "average", "major", "critical"];

    return (rowA, rowB, columnId) => {
      const a = levels.indexOf(rowA.values[columnId]?.toLowerCase());
      const b = levels.indexOf(rowB.values[columnId]?.toLowerCase());

      // eslint-disable-next-line no-nested-ternary
      return a === b ? 0 : a > b ? 1 : -1;
    };
  }, []);

  const columns = useMemo(() => {
    const cols = [
      ...getColumns(),
      {
        id: "actions",
        variant: "actions",
        Cell: ({ row }) => {
          return (
            <HvToggleButton
              aria-label="Lock"
              notSelectedIcon={<Unlock />}
              selectedIcon={<Lock />}
              selected={row.isSelectionLocked}
              onClick={() => row.toggleRowLockedSelection()}
            />
          );
        },
      },
      {
        id: "secundaryActions",
        variant: "actions",
        width: 32,
        Cell: () => {
          return (
            <HvDropDownMenu
              keepOpened={false}
              placement="left"
              onClick={(e, item) => alert(item.label)}
              dataList={[
                {
                  label: "Share",
                },
                {
                  label: "Hide",
                },
                {
                  label: "Remove",
                },
              ]}
            />
          );
        },
      },
    ];
    cols[2].disableSortBy = true;
    cols[5].sortType = colSort;
    return cols;
  }, [colSort]);

  const initialData = useMemo(
    () =>
      makeSelectedData(64).map((entry) => ({
        ...entry,
        // make some entries empty
        status: entry.status === "Closed" ? null : entry.status,
      })),
    []
  );
  const [data, setData] = useState(initialData);

  const EmptyRow = () => (
    <HvTableRow>
      <HvTableCell colSpan={100} style={{ height: 100 }}>
        <HvEmptyState message="No data to display" icon={<Ban role="presentation" />} />
      </HvTableCell>
    </HvTableRow>
  );

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    selectedFlatRows,
    toggleAllRowsSelected,
    getHvBulkActionsProps,
    getHvPaginationProps,
  } = useHvTable(
    {
      columns,
      data,
      autoResetSelectedRows: false,
      aditivePageBulkSelection: true,
      subtractivePageBulkDeselection: false,
      initialState: {
        selectedRowIds: { 2: true },
        lockedSelectionRowIds: { 1: true, 6: true },
      },
      defaultColumn: {
        Cell: ({ value }) => value ?? "—",
      },
    },
    useHvSortBy,
    useHvPagination,
    useHvRowSelection,
    useHvBulkActions
  );

  const handleAction = (evt, id, action) => {
    const selected = selectedFlatRows.map((el) => el.original);

    switch (action.id) {
      case "duplicate": {
        const newEls = selected.map((el) => ({
          ...el,
          id: `${el.id}-copy`,
          name: `${el.name}-copy`,
        }));
        setData([...data, ...newEls]);
        break;
      }
      case "delete": {
        const selectedIds = selected.map((el) => el.id);
        toggleAllRowsSelected(false);
        setData(data.filter((el) => !selectedIds.includes(el.id)));
        break;
      }
      case "lock":
      case "preview":
      default:
        break;
    }
  };

  const rowRenderer = (pages) => {
    return pages.map((row, index) => {
      prepareRow(row);

      return (
        <HvTableRow
          key={row.Header}
          {...row.getRowProps({
            "aria-rowindex": index,
          })}
        >
          {row.cells.map((cell) => (
            <HvTableCell key={cell.Header} {...cell.getCellProps()}>
              {cell.render("Cell")}
            </HvTableCell>
          ))}
        </HvTableRow>
      );
    });
  };
  return (
    <>
      <HvBulkActions
        {...getHvBulkActionsProps()}
        maxVisibleActions={1}
        actionsCallback={handleAction}
        actions={[
          { id: "delete", label: "Delete", icon: <Delete /> },
          { id: "duplicate", label: "Duplicate", icon: <Duplicate /> },
          { id: "lock", label: "Lock", icon: <Lock /> },
          { id: "preview", label: "Preview", icon: <Preview /> },
        ]}
      />

      <HvTableContainer>
        <HvTable
          {...getTableProps({
            "aria-rowcount": data.length,
            caption: "Table Caption",
          })}
        >
          <HvTableHead>
            {headerGroups.map((headerGroup) => (
              <HvTableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((col) => (
                  <HvTableHeader {...col.getHeaderProps()}>{col.render("Header")}</HvTableHeader>
                ))}
              </HvTableRow>
            ))}
          </HvTableHead>
          <HvTableBody {...getTableBodyProps()}>
            {page.length === 0 ? <EmptyRow /> : rowRenderer(page)}
          </HvTableBody>
        </HvTable>
      </HvTableContainer>

      <HvPagination {...getHvPaginationProps()} />
    </>
  );
};

KitchenSink.parameters = {
  docs: {
    description: {
      story:
        "A table with sorting and pagination handled server-side, using React Table. Set `manualPagination` and `manualSortBy` to have manual control over pagination and sorting.",
    },
  },
};
