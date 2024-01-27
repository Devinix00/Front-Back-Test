import { useParams, useNavigate } from "react-router-dom";

const TestPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!id) return;
    const nextId = parseInt(id, 10) + 1;
    navigate(`/testPage/${nextId}`);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>ID 증가</button>
    </div>
  );
};

export default TestPage;
