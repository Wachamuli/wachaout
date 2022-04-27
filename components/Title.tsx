import styles from "styles/Title.module.css";

function Title({ text }: { text: string }) {
  return <h1 className={styles.title}>{text}</h1>;
}

export default Title;
