interface IReturn {
  calculateProgress: () => number | undefined;
}

function useCalculateProgress(id: string | undefined): IReturn {
  const calculateProgress = () => {
    if (!id) return;
    const numericId = parseInt(id, 10);
    return numericId * 10;
  };
  return { calculateProgress };
}

export default useCalculateProgress;
