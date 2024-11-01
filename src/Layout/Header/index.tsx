import styles from "./styles.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IoIosNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import adeImg from "../../assets/adeImg.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.middle}>
          <div className={styles.search}>
            <input type="text" placeholder="Search for anything" />
            <div className={styles.searchContainer}>
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className={styles.profile}>
          <Link to="#" className={styles.docs}>
            Docs
          </Link>
          {/* <button className={styles.premium}>Get Premium</button> */}

          <IoIosNotificationsOutline
            style={{
              color: "#213F7D",
              width: "26px",
              height: "26px",
              cursor: "pointer",
            }}
          />

          <div className={styles.growthCompany}>
            <img src={adeImg} alt="image" />
            <div className={styles.text}>
              <p>Adedeji</p>
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
