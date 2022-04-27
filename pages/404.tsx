import styles from "styles/404.module.css";

function Custom404() {
  return (
    <section className={`section ${styles.section}`}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h3>
        Oh no! This page is not available, but look at the bright side, you've
        found a 404 error.
      </h3>
    </section>
  );
}

export default Custom404;
