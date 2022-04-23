import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import style from "../styles/ResourceCard.module.css";

interface Props {
  title: string;
  description: string;
  icon: IconDefinition;
  children?: JSX.Element[];
}

function ResourceCard({ title, description, icon, children }: Props) {
  return (
    <div className={style.card}>
      <div>
        <div className={style.header}>
          <h1 className={style.title}>{title}</h1>
          <FontAwesomeIcon className={style.icon} icon={icon} />
        </div>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.resourcesContainer}>{children}</div>
    </div>
  );
}

export default ResourceCard;
