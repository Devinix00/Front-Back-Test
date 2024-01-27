import { Link } from "react-router-dom";
import styles from "./ModalContainer.module.scss";
import { Button, Modal } from "antd";

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function ModalContainer({ isModalOpen, handleCancel }: IProps): JSX.Element {
  return (
    <Modal
      title="개발 정보"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      style={{
        overflowY: "auto",
        maxWidth: "90%",
      }}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <span className={styles.description}>
          본 <span className={styles.bold}>프론트엔드 백엔드 성향 Test</span>는
          오즈코딩스쿨 웹 개발 초격차 캠프 프론트엔드 코스 2기 김범수가 1일만에
          구현한 결과물이며 기획, 디자인, 개발을 하였습니다.
        </span>

        <p className={styles.developer}>개발자 정보: Devinix(김범수)</p>

        <Link
          to="https://github.com/Devinix00/front-back-test"
          target="_BLANK"
          className={styles.link}
        >
          프로젝트 Github
        </Link>

        <Link
          to="https://resplendent-cobbler-2ff171.netlify.app/"
          target="_BLANK"
          className={styles.link}
        >
          개발자 포트폴리오
        </Link>

        <Link
          to="https://ozcodingschool.com/"
          target="_BLANK"
          className={styles.ozButton}
        >
          <Button type="primary">오즈코딩스쿨 알아보기</Button>
        </Link>
      </div>
    </Modal>
  );
}

export default ModalContainer;
