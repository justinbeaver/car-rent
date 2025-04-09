import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getAdjacentPages } from "./Pagination.utils";
import s from "./Pagination.module.scss";

export const Pagination = ({
  current,
  last,
  navLabel = "Page navigation",
  generateLinkForPage,
  className = "",
  ...rest
}) => {
  const pages = getAdjacentPages({ current, last, adjacent: 1 });

  return (
    <nav className={`${s.nav} ${className}`} aria-label={navLabel} {...rest}>
      <ul className={s["nav__list"]}>
        <li className={s["nav__item"]}>
          {current > 1 ? (
            <Link
              className={s["nav__link"]}
              to={generateLinkForPage(current - 1)}
            >
              Previous
            </Link>
          ) : (
            <span
              className={`${s["nav__link"]} ${s["nav__link--disabled"]}`}
              aria-disabled="true"
            >
              Previous
            </span>
          )}
        </li>

        {pages.map((page) => (
          <li key={page.toString()} className={`${s["nav__item"]} `}>
            {page === current ? (
              <span
                className={`${s["nav__link"]} ${s["nav__link--active"]}`}
                aria-current="page"
              >
                {current}
              </span>
            ) : (
              <Link className={s["nav__link"]} to={generateLinkForPage(page)}>
                {page}
              </Link>
            )}
          </li>
        ))}

        <li className={s["nav__item"]}>
          {current < last ? (
            <Link
              className={s["nav__link"]}
              to={generateLinkForPage(current + 1)}
            >
              Next
            </Link>
          ) : (
            <span
              className={`${s["nav__link"]} ${s["nav__link--disabled"]}`}
              aria-disabled="true"
            >
              Next
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  last: PropTypes.number.isRequired,
  navLabel: PropTypes.string,
  className: PropTypes.string,
  generateLinkForPage: PropTypes.func.isRequired,
};
