import style from "../styles/Resource.module.css";

interface Props {
  name?: string;
  tagline?: string;
  image: string;
  height?: string;
  width?: string;
}

function Resource({ name, tagline, image, height, width }: Props) {
  return (
    <div className={style.resource}>
      <div className={style.resourceContainer}>
        <img
          className={style.resourceImg}
          src={image}
          style={{ height, width }}
          alt="Image not found"
        />
      </div>
    </div>
  );
}

export default Resource;
