import styles from "./TestButtonContainer.module.scss";

interface IProps {
  handleNextPageId: () => void;
}

function TestButtonContainer({ handleNextPageId }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <button onClick={handleNextPageId}>예</button>
      <button onClick={handleNextPageId}>아니오</button>
    </div>
  );
}

export default TestButtonContainer;
