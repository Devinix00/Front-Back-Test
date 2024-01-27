import { useNavigate } from "react-router-dom";

interface IReturn {
  handleRestart: () => void;
}

function useRestart(): IReturn {
  const navigate = useNavigate();
  const handleRestart = (): void => {
    navigate("/");
  };
  return { handleRestart };
}

export default useRestart;
