import TestButton from "../components/Home/TestButton";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <img src="/doctorO.png" className={styles.doctorImg} />
      <div className={styles.textBox}>
        <span>이 세상엔 다양한 성격의 포켓몬이 존재하지!</span>
        <h2>너와 꼭 닮은 포켓몬이 궁금하지 않니?</h2>
      </div>
      <TestButton />
    </div>
  );
}

export default Home;
