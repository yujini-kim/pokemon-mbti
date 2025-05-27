import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../../store/quizSrote";
import styles from "./ResetButton.module.scss";

const ResetButton = () => {
  const navigate = useNavigate();
  const { reset } = useQuizStore();
  const onClick = () => {
    navigate("/quiz");
    reset();
  };
  return (
    <button className={styles.button} onClick={onClick}>
      <span>다시하기</span>
    </button>
  );
};

export default ResetButton;
