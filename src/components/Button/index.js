import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  follow = false,
  disabled = false,
  rounded = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Component = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    follow,
    disabled,
    rounded,
    [className]: className,
  });

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  return (
    <Component className={classes} {...props}>
      <span>{children}</span>
    </Component>
  );
}

export default Button;
