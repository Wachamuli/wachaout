import styles from "styles/Resource.module.css";

interface Props {
  name?: string;
  tagline?: string;
  image: string;
  height?: string;
  width?: string;
}

function Resource({ name, tagline, image, height, width }: Props) {
  return (
    <div className={styles.resource}>
      <div className={styles.resourceContainer}>
        <img
          className={styles.resourceImg}
          src={image}
          style={{ height, width }}
          alt="Image not found"
        />
      </div>
    </div>
  );
}

export default Resource;
