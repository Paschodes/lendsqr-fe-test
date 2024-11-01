import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IoFilter } from "react-icons/io5";

interface FilterDropdownProps {
  column: { title: string; key: string };
  onFilterChange: (key: string, value: string | null) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  column,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilterValue(e.target.value);
    onFilterChange(column.key, e.target.value);
  };

  const resetFilter = () => {
    setFilterValue("");
    onFilterChange(column.key, null);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div onClick={toggleDropdown}>
        <IoFilter style={{ display: "flex" }} />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropInput}>
            <label>Organization</label>
            <select value={filterValue} onChange={handleFilterChange}>
              <option value="">Select</option>
              <option value="option1">Lendsqr</option>
              <option value="option2">Irorun</option>
              <option value="option1">Lendstar</option>
            </select>
          </div>
          <div className={styles.dropInput}>
            <label>Username</label>
            <input
              type="text"
              value={filterValue}
              onChange={handleFilterChange}
              placeholder="User"
            />
          </div>
          <div className={styles.dropInput}>
            <label>Email</label>
            <input
              type="email"
              value={filterValue}
              onChange={handleFilterChange}
              placeholder="Email"
            />
          </div>
          <div className={styles.dropInput}>
            <label>Date Joined</label>
            <input
              type="date"
              value={filterValue}
              onChange={handleFilterChange}
            />
          </div>
          <div className={styles.dropInput}>
            <label>Phone Number</label>
            <input
              type="number"
              value={filterValue}
              onChange={handleFilterChange}
              placeholder="Phone Number"
            />
          </div>

          <div className={styles.dropInput}>
            <label>Status</label>
            <select value={filterValue} onChange={handleFilterChange}>
              <option value="">Select </option>
              {/* Add options based on your data */}
              <option value="option2">Active</option>
              <option value="option2">Pending</option>
              <option value="option1">Inactive</option>
              <option value="option2">Blacklisted</option>
            </select>
          </div>

          <div className={styles.dropdownActions}>
            <button onClick={resetFilter}>Reset</button>
            <button
              onClick={toggleDropdown}
              style={{ color: "white", border: "none", background: "#39CDCC" }}
            >
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
