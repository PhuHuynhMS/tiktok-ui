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
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5~c5_300x300.webp?lk3s=a5d48078&nonce=32870&refresh_token=8fd1da3a1706eadd0fcb91057405fdac&x-expires=1720688400&x-signature=9ihnCNUNqHIW%2F9FEHHn9fysTJ6k%3D&shp=a5d48078&shcp=c1333099"
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
