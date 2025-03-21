import { Wrapper } from "@/components/Wrapper/Wrapper";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { IconButton } from "@/components/IconButton/IconButton";
import { Avatar } from "@/components/Avatar/Avatar";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import HeartFilledIcon from "@/assets/icons/heart-filled.svg?react";
import BellFilledIcon from "@/assets/icons/bell-filled.svg?react";
import CogwheelFilledIcon from "@/assets/icons/cogwheel-filled.svg?react";

import s from "./Navbar.module.scss";

const brandName = "Morent";

export const Navbar = () => {
  const { isMd } = useMediaQueriesContext();

  return (
    <header className={s.header}>
      <Wrapper size="lg" pad="lg">
        <div className={s["header-inner"]}>
          <a className={s["home-link"]} href="/" aria-label="home">
            {brandName}
          </a>
          <div className={s["searchbar-wrapper"]}>
            <SearchBar variant={isMd ? "combined" : "separate"} />
          </div>
          {isMd && (
            <nav className={s.nav}>
              <ul className={s["nav-list"]}>
                <li>
                  <IconButton size="md" aria-label="favorites">
                    <HeartFilledIcon aria-hidden="true" />
                  </IconButton>
                </li>
                <li>
                  <IconButton size="md" aria-label="notifications">
                    <BellFilledIcon aria-hidden="true" />
                  </IconButton>
                </li>
                <li>
                  <IconButton size="md" aria-label="settings">
                    <CogwheelFilledIcon aria-hidden="true" />
                  </IconButton>
                </li>
              </ul>
            </nav>
          )}
          <a
            className={s["user-page-link"]}
            href=""
            aria-label="navigate to your page"
          >
            <Avatar size={isMd ? "md" : "sm"} aria-hidden="true" />
          </a>
        </div>
      </Wrapper>
    </header>
  );
};
