import styles from "./TestPage.module.scss";
import { Progress } from "antd";
import { useParams } from "react-router-dom";
import useNextPage from "../../hooks/useNextPage/useNextPage";
import TestButtonContainer from "../../components/testButtonContainer/TestButtonContainer";

const TestPage = () => {
  const { id } = useParams();
  const { handleNextPageId } = useNextPage(id);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section>
          <h2>
            Question{id}. 웹 애플리케이션에서 사용자와의 상호작용을 구현하는
            데에 관심이 있으신가요?
          </h2>
        </section>
        <TestButtonContainer handleNextPageId={handleNextPageId} />
        <Progress percent={15} status="active" className={styles.progress} />
      </div>
    </div>
  );
};

export default TestPage;
