import React, { useState, useMemo } from "react";
import {
  HvGlobalActions,
  HvTable,
  HvTableContainer,
  HvTableRow,
  HvTableHead,
  HvTableHeader,
  HvTableBody,
  HvTableCell,
  useHvData,
  useHvPagination,
} from "@hitachivantara/uikit-react-core";
import { withStyles } from "@mui/styles";

import { getColumns, makeData } from "./data";
import styles from "./styles";

const TableSection = ({ classes }) => {
  const originalData = useMemo(() => makeData(10), []);
  const [data] = useState(originalData);
  const columns = useMemo(() => getColumns(), []);

  const instance = useHvData(
    {
      data,
      columns,
      initialState: { pageSize: 8 },
    },
    useHvPagination
  );

  return (
    <>
      <HvGlobalActions title="Events" variant="section" className={classes.section} />
      <HvTableContainer style={{ padding: "2px" }}>
        <HvTable {...instance.getTableProps()}>
          <HvTableHead>
            <HvTableRow>
              {columns.map((col) => (
                <HvTableHeader key={col.Header}>{col.Header}</HvTableHeader>
              ))}
            </HvTableRow>
          </HvTableHead>
          <HvTableBody {...instance.getTableBodyProps()}>
            {instance.page.map((row) => {
              instance.prepareRow(row);
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
    </>
  );
};

export default withStyles(styles)(TableSection);
