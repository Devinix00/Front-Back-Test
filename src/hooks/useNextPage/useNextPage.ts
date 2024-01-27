import { useNavigate } from "react-router-dom";

function useNextPage(id: string | undefined) {
  const navigate = useNavigate();
  const numberId = Number(id);

  const searchParams = new URLSearchParams(window.location.search);
  const frontCount = parseInt(searchParams.get("front") || "0");
  const backCount = parseInt(searchParams.get("back") || "0");

  const handleNextPageId = (type: "yes" | "no") => {
    if (type === "yes") {
      if (numberId % 2 === 1) {
        searchParams.set("front", (frontCount + 1).toString());
      } else {
        searchParams.set("back", (backCount + 1).toString());
      }
    }

    if (numberId === 10) {
      navigate(`/resultPage?${searchParams.toString()}`);
      return;
    }

    const nextId = numberId + 1;
    navigate(`/testPage/${nextId}?${searchParams.toString()}`);
  };

  return { handleNextPageId };
}

export default useNextPage;
