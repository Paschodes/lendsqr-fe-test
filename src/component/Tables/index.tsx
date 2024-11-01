import React, { useState } from "react";
import styles from "./styles.module.scss";
import FilterDropdown from "./FilterDropdown";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdKeyboardArrowDown, MdOutlineVisibility } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { BiUserX } from "react-icons/bi";

interface Column {
  title: string;
  key: string;
  sortable?: boolean;
  filterable?: boolean;
}

interface Row {
  //   [key: string]: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string | JSX.Element;
  [key: string]: string | JSX.Element;
}

interface TableProps {
  columns: Column[];
  data: Row[];
  filters: { [key: string]: string | null };
  onFilterChange: (key: string, value: string | null) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onFilterChange }) => {
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const toggleDropdown = (index: number) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                <span className={styles.tableHead}>
                  {column.title}
                  {column.filterable && (
                    <FilterDropdown
                      column={column}
                      onFilterChange={onFilterChange}
                    />
                  )}
                </span>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>
                  <p className={styles.tableDatas}>{row[column.key]}</p>
                </td>
              ))}
              <td>
                <button
                  className={styles.actionButton}
                  onClick={() => toggleDropdown(index)}
                >
                  <HiOutlineDotsVertical color="#545F7D" />
                  {dropdownVisible === index && (
                    <div className={styles.dropdownAct}>
                      <p onClick={() => alert("View Details")}>
                        <MdOutlineVisibility /> View Details
                      </p>
                      <p onClick={() => alert("Activate User")}>
                        <RiUserFollowLine />
                        Activate User
                      </p>
                      <p onClick={() => alert("Blacklist User")}>
                        <BiUserX />
                        Blacklist User
                      </p>
                    </div>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <p className={styles.showing}>
          Showing{" "}
          <span>
            {rowsPerPage}{" "}
            <MdKeyboardArrowDown style={{ width: "14px", height: "14px" }} />
          </span>{" "}
          out of {data.length}
        </p>
        <div className={styles.pageNumbers}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from(
            { length: Math.ceil(data.length / rowsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                className={
                  currentPage === i + 1 ? styles.active : styles.notactive
                }
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
