import { useEffect, useState } from "react";
import useQuestionStore from "../../stores/useQuestionStore/useQuestionStore";
import styles from "./ResultPage.module.scss";
import { motion } from "framer-motion";
import { Button, Modal } from "antd";
import useRestart from "../../hooks/useRestart/useRestart";
import useModal from "../../hooks/useModal/useModal";

const renderResults = (developer: "front" | "back" | "fullStack" | null) => {
  switch (developer) {
    case "front":
      return (
        <section className={styles.mainSection}>
          <section className={styles.detailSection}>
            <h2 className={styles.developerTypeTitle}>프론트엔드 개발자</h2>
            <section className={styles.detailSection}>
              <p className={styles.detailTitle}>[하는일]</p>
              <p className={styles.dscription}>
                사용자가 직접 상호작용하는 웹사이트나 애플리케이션의 사용자
                인터페이스를 개발합니다. 사용자 경험(UX)과 사용자
                인터페이스(UI)를 최적화하는 것이 주요 목표이며 백엔드와 통신해
                화면상의 모든 로직의 개발과 퍼블리싱을 담당합니다.
              </p>
            </section>

            <section className={styles.detailSection}>
              <p className={styles.detailTitle}>[주요 언어]</p>
              <p className={styles.dscription}>
                프로그래밍 언어로 Javascript, Typescript가 일반적이며,
                퍼블리싱에 필요한 HTML과 CSS 또한 필수적입니다.
              </p>
            </section>
            <section className={styles.detailSection}>
              <p className={styles.detailTitle}>[주요 라이브러리/프레임워크]</p>
              <p className={styles.dscription}>
                React, Next.Js Angular, Vue.js와 같은 현대적인 JavaScript
                프레임워크나 라이브러리를 사용합니다. 또한 React Native를
                이용하면 모바일 어플리케이션 개발도 가능합니다.
              </p>
            </section>

            <section className={styles.detailSection}>
              <p className={styles.detailTitle}>[중요한 기술들]</p>
              <p className={styles.dscription}>
                반응형 웹 퍼블리싱, AJAX, 웹 표준 및 접근성, 성능 최적화 등이
                있습니다.
              </p>
            </section>
          </section>
        </section>
      );

    case "back":
      return (
        <section className={styles.mainSection}>
          <h2 className={styles.developerTypeTitle}>백엔드 개발자</h2>
          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[하는일]</p>
            <p className={styles.dscription}>
              웹사이트나 애플리케이션의 서버 측 로직과 데이터베이스 관리를
              담당합니다. 사용자가 보지 못하는 서버, 애플리케이션,
              데이터베이스를 처리하며, API를 통해 프론트엔드와 통신합니다.
            </p>
          </section>

          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[주요 언어]</p>
            <p className={styles.dscription}>
              Java, Python, Ruby, Node.js(JavaScript), PHP 등이 주로 사용됩니다.
            </p>
          </section>
          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[주요 라이브러리/프레임워크]</p>
            <p className={styles.dscription}>
              Spring, Express.js, Django, Ruby on Rails 등이 있습니다.
            </p>
          </section>

          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[중요한 기술들]</p>
            <p className={styles.dscription}>
              RESTful API 개발, 데이터베이스 관리, 보안, 클라우드 컴퓨팅,
              컨테이너화 기술 등이 포함됩니다.
            </p>
          </section>
        </section>
      );

    case "fullStack":
      return (
        <section className={styles.mainSection}>
          <h2 className={styles.developerTypeTitle}>풀스택 개발자</h2>

          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[하는일]</p>
            <p className={styles.dscription}>
              프론트엔드와 백엔드 모두를 아우르는 개발을 담당합니다. 클라이언트
              로직부터 서버, 데이터베이스, API까지 전체 애플리케이션의 구축과
              관리를 할 수 있습니다.
            </p>
          </section>

          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[주요 언어]</p>
            <p className={styles.dscription}>
              프론트엔드와 백엔드에서 사용되는 다양한 언어를 모두 다룹니다.
            </p>
          </section>
          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[주요 라이브러리/프레임워크]</p>
            <p className={styles.dscription}>
              프론트엔드와 백엔드에서 일반적으로 사용되는 프레임워크나
              라이브러리를 모두 숙지해야 합니다.
            </p>
          </section>

          <section className={styles.detailSection}>
            <p className={styles.detailTitle}>[중요한 기술들]</p>
            <p className={styles.dscription}>
              프론트엔드 및 백엔드 기술, 데이터베이스 관리, 시스템 설계,
              네트워크 기초 지식 등이 포함됩니다.
            </p>
          </section>
        </section>
      );
  }
};

function ResultPage(): JSX.Element {
  const { isModalOpen, showModal, handleOk, handleCancel } = useModal();
  const { frontArray, backArray } = useQuestionStore();
  const { handleRestart } = useRestart();
  const [developer, setDeveloper] = useState<
    "front" | "back" | "fullStack" | null
  >(null);

  useEffect(() => {
    const front = frontArray.length > backArray.length;
    const back = frontArray.length < backArray.length;
    const fullStack = frontArray.length === backArray.length;

    if (front) {
      setDeveloper("front");
    } else if (back) {
      setDeveloper("back");
    } else if (fullStack) {
      setDeveloper("fullStack");
    }
  }, [frontArray, backArray]);

  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText(window.location.href);

    alert("클립보드에 링크가 복사되었어요.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>당신의 결과는??</h2>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.resultContainer}
        >
          {renderResults(developer)}
          <Button
            onClick={handleCopyClipBoard}
            type="primary"
            className={styles.copyLinkButton}
          >
            링크 공유하기
          </Button>
          <section className={styles.buttons}>
            <Button
              onClick={showModal}
              type="primary"
              className={styles.button}
            >
              개발자 정보
            </Button>
            <Button
              onClick={handleRestart}
              type="primary"
              className={styles.button}
            >
              다시 하기
            </Button>
          </section>
        </motion.div>
      </div>
      <Modal
        title="개발자 정보"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer="none"
        width={900}
        className={styles.modal}
      ></Modal>
    </div>
  );
}

export default ResultPage;
