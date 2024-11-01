import Header from "./Header";
import Navigation from "./Navigation";
import styles from "./styles.module.scss";

type LayoutProps = {
  title: string;
  pageDetails: string;
  children: JSX.Element[] | JSX.Element;
  role?: string;
  userProp?: any;
};
const UserLayout = ({
  title,
  pageDetails,
  children,
  role,
  userProp,
}: LayoutProps) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.appContents}>
        <Navigation pageTitle={title} />
        <div className={`${styles.contentsRight} ${styles.crLG}`}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
