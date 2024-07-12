import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5~c5_300x300.webp?lk3s=a5d48078&nonce=78676&refresh_token=5a7b9aef11471c882272a980d44ca89b&x-expires=1720922400&x-signature=j7%2F0LiyUh7oWJXVzTZooMbnTk2s%3D&shp=a5d48078&shcp=c1333099"
        alt="Rose"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>roses_are_rosie</span>
          <FontAwesomeIcon
            className={cx("check-account-item")}
            icon={faCheckCircle}
          />
        </h4>
        <span className={cx("username")}>ROSÉ</span>
      </div>
    </div>
  );
}

export default AccountItem;
