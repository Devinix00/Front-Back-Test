import { useNavigate } from "react-router-dom";

interface IReturn {
  handleNextPageId: () => void;
}

function useNextPage(id: string | undefined): IReturn {
  const navigate = useNavigate();
  const handleNextPageId = () => {
    if (!id) return;
    const nextId = parseInt(id, 10) + 1;
    navigate(`/testPage/${nextId}`);

    if (id === "10") {
      navigate("/resultPage");
    }
  };

  return { handleNextPageId };
}

export default useNextPage;
