import styles from "styles/Title.module.css";

function Title({ text }: { text: string }) {
  return <h2 className={styles.title}>{text}</h2>;
}

export default Title;
