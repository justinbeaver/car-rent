import { Wrapper } from "@/components/Wrapper/Wrapper";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import s from "./Footer.module.scss";

const brandName = "Morent";

const nav = [
  {
    label: "About",
    navItems: [
      { label: "How it works", url: "#" },
      { label: "Featured", url: "#" },
      { label: "Partnership", url: "#" },
      { label: "Business Relation", url: "#" },
    ],
  },
  {
    label: "Community",
    navItems: [
      { label: "Events", url: "#" },
      { label: "Blog", url: "#" },
      { label: "Podcast", url: "#" },
      { label: "Invite a friend", url: "#" },
    ],
  },
  {
    label: "Socials",
    navItems: [
      { label: "Discord", url: "#" },
      { label: "Instagram", url: "#" },
      { label: "Twitter", url: "#" },
      { label: "Facebook", url: "#" },
    ],
  },
];

export const Footer = () => {
  const { isMd } = useMediaQueriesContext();

  return (
    <footer className={s.footer}>
      <Wrapper>
        <div className={s.body}>
          <div className={s.topper}>
            <a className={s["home-link"]}>{brandName}</a>
            <p className={s.slogan}>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className={s.navigation}>
            {nav.map(({ label, navItems }) => (
              <nav>
                <p id={label} className={s["nav__label"]}>
                  {label}
                </p>
                <ul className={s["nav__list"]} aria-labelledby={label}>
                  {navItems.map(({ label, url }) => (
                    <li>
                      <a className={s["nav__item"]} href={url}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        {isMd && <div className={s["decoration-line"]} />}
        <div className={s.copyright}>
          <p>©2022 MORENT. All rights reserved</p>
          <div className={s["copyright__links"]}>
            <a className={s.link} href="#">
              Privacy & Policy
            </a>
            <a className={s.link} href="#">
              Terms & Condition
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
