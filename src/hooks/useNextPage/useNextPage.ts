import { useNavigate } from "react-router-dom";
import useQuestionStore from "../../stores/useQuestionStore/useQuestionStore";

interface IReturn {
  handleNextPageId: (type: "yes" | "no") => void;
}

function useNextPage(id: string | undefined): IReturn {
  const { addAnswers } = useQuestionStore();
  const navigate = useNavigate();
  const numberId = Number(id);

  const handleNextPageId = (type: string) => {
    if (numberId === 10) {
      if (type === "yes") {
        addAnswers(numberId % 2 === 1 ? "front" : "back");
      }
      navigate("/resultPage");
    } else {
      const nextId = numberId + 1;
      navigate(`/testPage/${nextId}`);

      if (type === "yes") {
        addAnswers(numberId % 2 === 1 ? "front" : "back");
      }
    }
  };

  return { handleNextPageId };
}

export default useNextPage;
