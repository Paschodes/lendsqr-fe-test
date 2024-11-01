import React from "react";
import styles from "./styles.module.scss";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case "Active":
        return styles.active;
      case "Pending":
        return styles.pending;
      case "Inactive":
        return styles.inactive;
      case "Blacklisted":
        return styles.blacklisted;
      default:
        return "";
    }
  };

  return (
    <span className={`${styles.statusBadge} ${getStatusClass()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
