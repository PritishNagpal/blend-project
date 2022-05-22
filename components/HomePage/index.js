import { useRouter } from "next/router";
import useTimer from "../../hooks/useTimer";
import styles from "./home.module.css";

export default function HomePage() {
  const TIMER_VALUE = 10;
  const router = useRouter();

  function redirect({ route }) {
    router.push({
      pathname: `${route}`,
    });
  }

  const timerData = {
    timerValue: TIMER_VALUE,
    callback: redirect,
    params: {
      route: "/feedback",
    },
  };

  const { timer } = useTimer(timerData);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Hey!! Please Wait</h1>
      <div>
        <span className={styles.timer}>{timer}</span>
      </div>
    </div>
  );
}
