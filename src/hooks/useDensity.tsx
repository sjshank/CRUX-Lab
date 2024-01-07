export const useDensity = (density: number, duration: string) => {
  const result =
    density < 70
      ? density >= 20 && density <= 70
        ? "Average"
        : "Poor"
      : "Good";

  return { result: result, duration: result.concat(" " + duration) } as const;
};
