import { useMemo, useState } from "react";
import { tableData, tableRows } from "../utils/data";
import "./Table.css";
const Table = () => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(tableData.defaultPageSize);

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });

  const sortHandler = (tableKey) => {
    if (tableKey === sortConfig.key) {
      setSortConfig({
        key: tableKey,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({
        key: tableKey,
        direction: "asc",
      });
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  //write filter logic
  //go through all rows and keep only matching ones
  const filteredRows = useMemo(() => {
    return tableRows?.filter((row) => {
      //check every filter key (name, email, role, status)
      return Object.keys(filters).every((key) => {
        //if the filter for this column is empty, ignore it
        if (!filters[key]) return true;

        return row[key]
          .toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase());
      });
    });
  }, [filters]);

  const sortedRows = useMemo(() => {
    let rows = [...filteredRows];
    if (sortConfig.key) {
      rows?.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction == "asc" ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return rows;
  }, [filteredRows, sortConfig]);

  const searchInputHandler = (e, keyname) => {
    setFilters((filters) => {
      return {
        ...filters,
        [keyname]: e.target.value,
      };
    });
  };

  const paginatedRows = useMemo(() => {
    return sortedRows.slice(startIndex, endIndex);
  }, [sortedRows, startIndex, endIndex]);
  return (
    <>
      <table>
        <thead>
          <tr>
            {tableData.columns?.map((tableHeading, index) => (
              <th
                key={tableHeading?.id}
                onClick={() => sortHandler(tableHeading.key)}
              >
                {tableHeading?.label}
                {/* sorting icon */}
                {tableHeading.sortable
                  ? sortConfig.key === tableHeading?.key &&
                    sortConfig.direction === "asc"
                    ? "▲"
                    : sortConfig.key === tableHeading?.key &&
                        sortConfig.direction === "desc"
                      ? "▼"
                      : null
                  : null}

                <div>
                  {/* {tableHeading?.filterable ? (
                    <input
                      type="text"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  ) : null} */}
                </div>
              </th>
            ))}
          </tr>
          <tr>
            {tableData.columns?.map((tableColumn, index) => {
              console.log("key is", tableColumn.key, filters[tableColumn.key]);
              if (tableColumn?.filterable) {
                return (
                  <td>
                    <input
                      type="text"
                      value={filters[tableColumn.key]}
                      onChange={(e) => searchInputHandler(e, tableColumn.key)}
                    />
                  </td>
                );
              } else return <td></td>;
            })}
          </tr>
        </thead>
        <tbody>
          {paginatedRows?.map((tableRows, index) => (
            <tr key={index}>
              <td>{tableRows.id}</td>
              <td>{tableRows.name}</td>
              <td>{tableRows.email}</td>
              <td>{tableRows.role}</td>
              <td>{tableRows.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <span> Page {currentPage} </span>

        <button
          disabled={endIndex >= sortedRows.length}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
