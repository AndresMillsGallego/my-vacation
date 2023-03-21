import Clock from "../Clock/Clock";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header-div"]}>
      <h1>myVacation</h1>
      <Clock />
    </div>
  );
};

export default Header;
