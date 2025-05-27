import styles from "./TestButton.module.scss";

function TestButton() {
  return (
    <a className={styles.button} href="quiz">
      <span>테스트 시작하기</span>
    </a>
  );
}

export default TestButton;
