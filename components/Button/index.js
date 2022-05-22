import styles from "./button.module.css";

export default function Button({ buttonText, style, disabled }) {
  return (
    <button style={style} className={styles.button} disabled={disabled}>
      {buttonText}
    </button>
  );
}
