import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);

const defaultFnc = () => {};

function Menu({ children, items = [], onChange = defaultFnc }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 800]}
      interactive
      placement="top-end"
      render={(attrs) => {
        return (
          <div className={cx("content")} tabIndex="-1" {...attrs}>
            <PopperWrapper moreWrapper>
              {history.length > 1 && (
                <Header
                  title={"Ngôn ngữ"}
                  onBack={() => {
                    setHistory(history.slice(0, history.length - 1));
                  }}
                />
              )}
              {renderItems()}
            </PopperWrapper>
          </div>
        );
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
