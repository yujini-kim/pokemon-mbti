import { useNavigate } from "react-router-dom";
import { Questions } from "../data/questions";
import { useQuizStore } from "../store/quizSrote";
import styles from "./Quiz.module.scss";
function Quiz() {
  const { currentIndex, selectAnswer } = useQuizStore();
  const navigate = useNavigate();

  if (currentIndex >= Questions.length) {
    navigate("/result");
    return null;
  }

  const questions = Questions[currentIndex];

  const handleSelect = (type: string) => {
    selectAnswer(type);
    const isLast = currentIndex + 1 >= Questions.length;
    if (isLast) {
      navigate("/result");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.question}>{questions.question}</h1>
      <div className={styles.answer}>
        {questions.options.map((text, idx) => (
          <button
            className={styles.button}
            key={idx}
            onClick={() => handleSelect(text.type)}
          >
            <span>{text.text}</span>
          </button>
        ))}
      </div>
      <p className={styles.pagenation}>
        {currentIndex + 1} / {Questions.length}
      </p>
    </div>
  );
}

export default Quiz;
