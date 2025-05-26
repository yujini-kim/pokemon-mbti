import styles from "./TestButton.module.scss";

function TestButton() {
  return (
    <a className={styles.button} href="quiz">
      테스트 시작하기
    </a>
  );
}

export default TestButton;
