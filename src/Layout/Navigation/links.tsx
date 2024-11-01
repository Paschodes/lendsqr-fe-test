import { RxDashboard } from "react-icons/rx";
import { PublicPaths } from "../../routes/path";
import { PiNewspaperThin } from "react-icons/pi";
import { GiPayMoney, GiTakeMyMoney, GiNewspaper } from "react-icons/gi";
import { CiViewList } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

export const userLinks = [
  {
    route: PublicPaths.USERS,
    name: "Dashboard",
    Icon: FaHome,
    // allowed: ["user"],
  },
  {
    route: PublicPaths.USERS,
    name: "CUSTOMERS",
    Icon: RxDashboard,
    // allowed: ["user"],
    children: [
      {
        route: PublicPaths.USERS,
        name: "Users",
        Icon: PiNewspaperThin,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Guarantors",
        Icon: GiNewspaper,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Decision Models",
        Icon: GiPayMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Savings",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Loan Requests",
        Icon: CiViewList,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Whitelist",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Karma",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
    ],
  },

  {
    route: PublicPaths.USERS,
    name: "BUSINESS",
    Icon: RxDashboard,
    // allowed: ["user"],
    children: [
      {
        route: PublicPaths.USERS,
        name: "Organization",
        Icon: PiNewspaperThin,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Loan Products",
        Icon: GiNewspaper,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Savings Products",
        Icon: GiPayMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Fees and Charges",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Transactions",
        Icon: CiViewList,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Services",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Service Account",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Settlements",
        Icon: CiViewList,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Reports",
        Icon: CiViewList,
        // allowed: ["user"],
      },
    ],
  },

  {
    route: PublicPaths.USERS,
    name: "SETTINGS",
    Icon: RxDashboard,
    // allowed: ["user"],
    children: [
      {
        route: PublicPaths.USERS,
        name: "Preferences",
        Icon: PiNewspaperThin,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Fees and Pricing",
        Icon: GiNewspaper,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Audit Logs",
        Icon: GiPayMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "System Messages",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Loan Requests",
        Icon: CiViewList,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Whitelist",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
      {
        route: PublicPaths.USERS,
        name: "Karma",
        Icon: GiTakeMyMoney,
        // allowed: ["user"],
      },
    ],
  },
];
