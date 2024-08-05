import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const Component = "Button";
  const props = {};

  return (
    <Button to={data.to} className={cx("menu-item-btns")} onClick={onClick}>
      <span className={cx("menu-item-icons")}>{data.icon}</span>
      {data.title}
    </Button>
  );
}

export default MenuItem;
