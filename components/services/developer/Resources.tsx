import { faDisplay, faServer } from "@fortawesome/free-solid-svg-icons";

import Title from "../../Title";
import Resource from "../../Resource";
import ResourceCard from "../../ResourceCard";
import style from "../../../styles/Resources.module.css";

function Resources() {
  return (
    <section className="section">
      <Title text="Resources" />
      <div className={style.sectionContainer}>
        <ResourceCard
          title="Front-end"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            minima debitis maiores magni, velit odit? Hic ratione eum porro totam
            voluptate."
          icon={faDisplay}
        >
          <Resource
            name="Vue.js"
            tagline="The Progressive JavaScript Framework"
            image="/resources/vuejs.png"
            height="100px"
          />
          <Resource
            name="Bootstrap"
            tagline="Build fast, responsive sites"
            image="/resources/bootstrap.png"
            height="180px"
          />
          <Resource
            name="Font Awesome"
            tagline="Take the hassle out of icons in your projects"
            image="/resources/fontawesome.png"
            height="50px"
          />
        </ResourceCard>

        <ResourceCard
          title="Back-end"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            minima debitis maiores magni, velit odit? Hic ratione eum porro totam
            voluptate."
          icon={faServer}
        >
          <Resource
            name="Django"
            tagline="The web framework for perfectionists with deadlines"
            image="/resources/django.png"
            height="300px"
          />
          <Resource
            name="Flask"
            tagline="Web development, one drop at a time"
            image="/resources/flask.png"
            height="140px"
          />
          <Resource
            name="Next.js"
            tagline="The React Framework for Production"
            image="/resources/nextjs.png"
          />
        </ResourceCard>
      </div>
    </section>
  );
}

export default Resources;
