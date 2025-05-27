export function calculateMBTI(answers: string[]): string {
  const counts = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  answers.forEach((type) => {
    counts[type as keyof typeof counts]++;
  });

  return [
    counts.E >= counts.I ? "E" : "I",
    counts.S >= counts.N ? "S" : "N",
    counts.T >= counts.F ? "T" : "F",
    counts.J >= counts.P ? "J" : "P",
  ].join("");
}
