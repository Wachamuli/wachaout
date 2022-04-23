import style from "../styles/Title.module.css";

function Title({ text }: { text: string }) {
  return <h1 className={style.title}>{text}</h1>;
}

export default Title;
