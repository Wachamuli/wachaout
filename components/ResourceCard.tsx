import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from "../styles/ResourceCard.module.css";

interface Props {
  title: string;
  description: string;
  icon: IconDefinition;
  children?: JSX.Element[];
}

function ResourceCard({ title, description, icon, children }: Props) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.resourcesContainer}>{children}</div>
    </div>
  );
}

export default ResourceCard;
