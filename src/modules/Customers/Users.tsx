import styles from "./styles.module.scss";
import UserLayout from "../../Layout";
import user from "../../assets/users.svg";
import activeUser from "../../assets/activeUsers.svg";
import userLoan from "../../assets/userLoans.svg";
import userSavings from "../../assets/userSaving.svg";
import Table from "../../component/Tables";
import { useState } from "react";
import { data } from "./UserData";
import StatusBadge from "../../component/Tables/StatusBadge";

const UserCardData = [
  {
    img: user,
    title: "USERS",
    total: "2,453",
  },
  {
    img: activeUser,
    title: "ACTIVE USERS",
    total: "2,453",
  },
  {
    img: userLoan,
    title: "USERS WITH LOANS",
    total: "12,453",
  },
  {
    img: userSavings,
    title: "USERS WITH SAVINGS",
    total: "102,453",
  },
];

const columns = [
  { title: "Organization", key: "organization", filterable: true },
  { title: "Username", key: "username", filterable: true },
  { title: "Email", key: "email", filterable: true },
  { title: "Phone Number", key: "phoneNumber", filterable: true },
  { title: "Date Joined", key: "dateJoined", filterable: true },
  { title: "Status", key: "status", filterable: true },
];

const Users = () => {
  const [filters, setFilters] = useState<{ [key: string]: string | null }>({});

  const handleFilterChange = (key: string, value: string | null) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  return (
    <UserLayout title="Users" pageDetails="users">
      <div className={styles.userContainer}>
        <div className={styles.userContent}>
          <h1>Users</h1>

          <div className={styles.cardDiv}>
            {UserCardData.map((data, index) => (
              <div key={index} className={styles.card}>
                <img src={data.img} alt="" />
                <p>{data.title}</p>
                <span>{data.total}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Table
            columns={columns}
            data={data.map((user) => ({
              ...user,
              status: <StatusBadge status={user.status} />,
            }))}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
    </UserLayout>
  );
};

export default Users;
