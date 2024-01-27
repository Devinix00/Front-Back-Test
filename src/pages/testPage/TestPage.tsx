import styles from "./TestPage.module.scss";
import { Progress } from "antd";
import { useParams } from "react-router-dom";
import useNextPage from "../../hooks/useNextPage/useNextPage";
import TestButtonContainer from "../../components/testButtonContainer/TestButtonContainer";
import useCalculateProgress from "../../hooks/useCalculateProgress/useCalculateProgress";
import Questions from "../../components/questions/Questions";
import ErrorPage from "../errorPage/ErrorPage";

function TestPage(): JSX.Element {
  const { id } = useParams();
  const { handleNextPageId } = useNextPage(id);
  const { calculateProgress } = useCalculateProgress(id);

  if (id) {
    const numberId = parseInt(id, 10);

    if (numberId <= 0 || numberId > 10) {
      return <ErrorPage />;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Questions id={id} />
        <TestButtonContainer handleNextPageId={handleNextPageId} />
        <Progress
          percent={calculateProgress()}
          status="active"
          className={styles.progress}
        />
      </div>
    </div>
  );
}

export default TestPage;
