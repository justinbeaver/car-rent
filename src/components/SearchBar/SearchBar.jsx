import PropTypes from "prop-types";

import { IconButton } from "@/components/IconButton/IconButton";
import SearchIcon from "@/assets/icons/search-normal.svg?react";
import FilterIcon from "@/assets/icons/filter.svg?react";

import { searchBarClass, searchBarConfig } from "./SearchBar.config";
import s from "./SearchBar.module.scss";

export const SearchBar = ({ variant = "separate" }) => {
  return (
    <form className={s["search-bar-wrapper"]}>
      <div className={searchBarClass({ variant })}>
        <IconButton
          variant="minimal"
          size="md"
          type="submit"
          aria-label="search"
        >
          <SearchIcon aria-hidden="true" />
        </IconButton>
        <label htmlFor="search-input" className="visually-hidden">
          Search
        </label>
        <input
          id="search-input"
          className={s.input}
          type="text"
          placeholder="Search something here"
        />
        {variant === "combined" && (
          <IconButton
            variant="minimal"
            size="md"
            type="button"
            aria-label="filer"
          >
            <FilterIcon aria-hidden="true" />
          </IconButton>
        )}
      </div>
      {variant === "separate" && (
        <IconButton
          variant="secondary"
          size="md"
          type="button"
          aria-label="filter"
        >
          <FilterIcon aria-hidden="true" />
        </IconButton>
      )}
    </form>
  );
};

SearchBar.propTypes = {
  variant: PropTypes.oneOf(Object.keys(searchBarConfig.variants.variant))
    .isRequired,
};
