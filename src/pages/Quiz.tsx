import { useNavigate } from "react-router-dom";
import { Questions } from "../data/questions";
import { useQuizStore } from "../store/quizSrote";

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
    <>
      <h1>{questions.question}</h1>
      <span>
        {questions.options.map((text, idx) => (
          <button key={idx} onClick={() => handleSelect(text.type)}>
            {text.text}
          </button>
        ))}
      </span>
      <p>
        {currentIndex + 1} / {Questions.length}
      </p>
    </>
  );
}

export default Quiz;
