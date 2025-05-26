import styles from "./IntroText.module.scss";

function IntroText() {
  return (
    <>
      <img src="/doctorO.png" className={styles.doctorImg} />
      <div className={styles.textBox}>
        <span>이 세상엔 다양한 성격의 포켓몬이 존재하지!</span>
        <h2>너와 꼭 닮은 포켓몬이 궁금하지 않니?</h2>
      </div>
    </>
  );
}

export default IntroText;
