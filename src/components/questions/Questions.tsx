import styles from "./Questions.module.scss";

interface IProps {
  id: string | undefined;
}

const renderQuestions = (id: string | undefined) => {
  switch (id) {
    case "1":
      return (
        <h2>
          Question{id}. 웹 애플리케이션에서 사용자와의 상호작용을 구현하는 데에
          관심이 있으신가요?
        </h2>
      );

    case "2":
      return (
        <h2>Question{id}. 데이터를 처리하고 관리하는 데 관심이 많으신가요?</h2>
      );

    case "3":
      return (
        <h2>
          Question{id}. 웹 페이지의 성능 최적화와 로딩 시간 단축에 관심이
          있으신가요?
        </h2>
      );

    case "4":
      return (
        <h2>
          Question{id}. 대용량 데이터와 시스템의 안정성에 대해 깊이 고민하는
          것에 관심이 있으신가요?
        </h2>
      );

    case "5":
      return (
        <h2>
          Question{id}. 웹사이트에서 동적인 콘텐츠와 애니메이션을 구현하는 것에
          관심이 있으신가요?
        </h2>
      );

    case "6":
      return (
        <h2>Question{id}. 알고리즘과 논리적 문제 해결에 관심이 많으신가요?</h2>
      );

    case "7":
      return (
        <h2>
          Question{id}. 웹 애플리케이션의 상태 관리(예: 사용자 입력, 페이지
          상태)에 대해 배우고 싶으신가요?
        </h2>
      );

    case "8":
      return (
        <h2>
          Question{id}. 서버, 데이터베이스, 네트워킹에 대한 기술적인 내용에
          관심이 있으신가요?
        </h2>
      );

    case "9":
      return (
        <h2>
          Question{id}. 반응형 웹 디자인과 크로스 브라우저 호환성 문제를
          해결하는 데 관심이 있으신가요?
        </h2>
      );

    case "10":
      return (
        <h2>
          Question{id}. 대규모의 시스템 아키텍처 설계에 대해 배우고 싶으신가요?
        </h2>
      );
  }
};

function Questions({ id }: IProps): JSX.Element {
  return <section className={styles.container}>{renderQuestions(id)}</section>;
}

export default Questions;
