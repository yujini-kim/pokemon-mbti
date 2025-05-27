import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../../store/quizSrote";

const ResetButton = () => {
  const navigate = useNavigate();
  const { reset } = useQuizStore();
  const onClick = () => {
    navigate("/quiz");
    reset();
  };
  return <button onClick={onClick}>다시하기</button>;
};

export default ResetButton;
