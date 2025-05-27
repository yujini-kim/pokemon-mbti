import ResetButton from "../components/Result/ResetButton";
import { calculateMBTI } from "../data/calculateFun";
import { mbtiResults } from "../data/mbtiResults";
import { useQuizStore } from "../store/quizSrote";
import styles from "./Result.module.scss";
function Result() {
  const { answers } = useQuizStore();
  const resultMBTI = calculateMBTI(answers);
  const result = mbtiResults[resultMBTI];
  return (
    <div className={styles.container}>
      <h1>{result.name}</h1>
      <img src={`/${resultMBTI}.png`} alt={result.name} />
      <h2> {resultMBTI}</h2>
      <p>{result.desc}</p>
      <ResetButton />
    </div>
  );
}

export default Result;
