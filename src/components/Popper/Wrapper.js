import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ children, moreWrapper = false }) {
  const classes = cx("wrapper", {
    moreWrapper,
  });

  return <div className={classes}>{children}</div>;
}

export default Wrapper;
