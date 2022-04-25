import style from "../styles/404.module.css";

function error_404() {
  return (
    <section className={`section ${style.section}`}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h3>
        Oh no! This page is not available, but look at the bright side, you've
        found a 404 error.
      </h3>
    </section>
  );
}

export default error_404;
