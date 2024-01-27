import { Button } from "antd";
import styles from "./InitialPage.module.scss";
import styled from "styled-components";
import { motion } from "framer-motion";
import DescriptionSection from "../../components/descriptionSection/DescriptionSection";
import { Link } from "react-router-dom";
import useQuestionStore from "../../stores/useQuestionStore/useQuestionStore";
import { useEffect } from "react";

function InitialPage(): JSX.Element {
  const { removeAnswers } = useQuestionStore();

  useEffect(() => {
    removeAnswers();
  }, [removeAnswers]);

  return (
    <div className={styles.container}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        프론트엔드 vs 백엔드 성향찾기 Test
      </motion.h2>

      <section className={styles.descriptionContainer}>
        <DescriptionSection>
          <h3>프론트엔드</h3>
          <p>
            프론트엔드 개발자는 서버와 통신하여 웹 애플리케이션의 사용자
            인터페이스(UI)와 사용자 경험(UX) 개발을 담당합니다. 이들은
            웹사이트의 시각적 요소, 레이아웃, 상호작용 및 반응성을 구현하는
            역할을 합니다. 사용자의 요구사항과 피드백을 기반으로 시각적인 부분과
            사용자가 직접 상호작용하는 부분을 개발하고 최적화합니다.
          </p>
        </DescriptionSection>

        <DescriptionSection>
          <h3>백엔드</h3>
          <p>
            백엔드 개발자는 서버, 데이터베이스, 애플리케이션의 서버 사이드
            로직과 아키텍처를 담당합니다. 사용자가 보지 못하는 서버,
            데이터베이스, 애플리케이션의 내부 작동을 관리하고, 데이터 처리, API
            구현, 보안 조치 등을 담당합니다.
          </p>
        </DescriptionSection>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/testPage/1">
          <Button type="primary" className={styles.startTestButton}>
            Test 시작하기!
          </Button>
        </Link>
        <DevelopedBy>Developed By Devinix</DevelopedBy>
      </motion.div>
    </div>
  );
}

export default InitialPage;

const DevelopedBy = styled.p`
  font-size: 1.6rem;
`;
