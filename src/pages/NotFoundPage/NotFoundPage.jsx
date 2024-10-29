import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.errorTitle}>404</h1>

      <Link to="/" className={css.backHomeButton}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
