import styles from "./TestButtonContainer.module.scss";

interface IProps {
  handleNextPageId: (type: "yes" | "no") => void;
}

function TestButtonContainer({ handleNextPageId }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          handleNextPageId("yes");
        }}
      >
        예
      </button>
      <button
        onClick={() => {
          handleNextPageId("no");
        }}
      >
        아니오
      </button>
    </div>
  );
}

export default TestButtonContainer;
