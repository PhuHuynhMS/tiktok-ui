import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  const Component = "Button";
  const props = {};

  // if (data.to) {
  //   props.to = to;
  //   Component = "a";
  // }

  return (
    <Button className={cx("menu-item-btns")}>
      <span className={cx("menu-item-icons")}>{data.icon}</span>
      {data.title}
    </Button>
  );
}

export default MenuItem;
