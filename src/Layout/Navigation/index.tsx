import { Fragment, useState } from "react";
import styles from "./styles.module.scss";
import { FaSignOutAlt } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import { SlClose } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { userLinks } from "./links";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";

type NavProps = {
  pageTitle: string;
};

const Navigation = ({ pageTitle }: NavProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
  };

  const hasPermission = () =>
    // allowedRoles: string[], role: string
    {
      return true;
      // return allowedRoles?.includes(role);
    };

  return (
    <>
      <div
        className={`${styles.toggle} ${open && styles.openToggle}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <SlClose /> : <RiAppsFill />}
      </div>

      <div
        className={`${styles.navigation} ${styles.navLG} ${
          open && styles.openNav
        }`}
      >
        {/* <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div> */}

        <Link to="/" className={styles.org}>
          <FaBriefcase />
          Switch Organization <MdKeyboardArrowDown />
        </Link>

        <div className={styles.links}>
          <ul>
            {userLinks.map(
              (item, i) =>
                hasPermission() && (
                  <Fragment key={i}>
                    {item?.children ? (
                      <div className={styles.childContainer}>
                        <li
                          className={
                            pageTitle === item.name ? styles.active : undefined
                          }
                        >
                          <span>{item.name} &nbsp;</span>
                        </li>

                        <div className={styles.child}>
                          <ul>
                            {item.children.map((child, x) => (
                              <li
                                key={x}
                                className={
                                  pageTitle === child.name
                                    ? styles.active
                                    : undefined
                                }
                              >
                                <Link to={child.route}>
                                  <child.Icon />
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <li
                        className={
                          pageTitle === item.name ? styles.active : undefined
                        }
                      >
                        <Link to={item.route}>
                          <item.Icon />
                          {item.name}
                        </Link>
                      </li>
                    )}
                  </Fragment>
                )
            )}
            <br />
            <br />

            <li>
              <Link to="#" onClick={logoutHandler}>
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
