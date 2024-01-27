import styles from "./ErrorPate.module.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>404 Error!!</h2>
        <p>페이지가 존재하지 않아요 ㅠㅠ 올바른 경로를 찾아주세요</p>

        <Link to="/" className={styles.link}>
          <p className={styles.homeLink}>초기 화면으로</p>
        </Link>
      </div>
    </div>
  );
}
