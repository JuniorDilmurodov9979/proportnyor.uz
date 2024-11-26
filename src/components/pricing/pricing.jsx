import { useTranslation } from "react-i18next";

export function Pricing() {
  const { t, i18n } = useTranslation();

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing__title-wrapper">
          <span className="pricing__info">{t("pricing_info")}</span>
          <h3 className="pricing__title">{t("pricing_title")}</h3>
        </div>
        <ul className="pricing__list">
          <li className="pricing__item">
            <div className="pricing__item-top">
              <h4 className="pricing__item-title">
                {t("pricing_item_title1")}
              </h4>
              <p className="pricing__item-desc">{t("pricing_item_desc")}</p>
              <p className="pricing__item-info">{t("pricing_item_info")}</p>
            </div>
            <div className="pricing__item-btm">
              <ul className="pricing__item-list">
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item1_link1")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item1_link2")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item1_link3")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item1_link4")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item1_link5")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a
                    className="pricing__item-link--last"
                    href="tel:+998974420308"
                  >
                    {t("boglanish")}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="pricing__item">
            <div className="pricing__item-top">
              <h4 className="pricing__item-title">
                {t("pricing_item_title2")}
              </h4>
              <p className="pricing__item-desc">{t("pricing_item_desc")}</p>
              <p className="pricing__item-info">{t("pricing_item_info")}</p>
            </div>
            <div className="pricing__item-btm">
              <ul className="pricing__item-list">
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item2_link1")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item2_link2")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item2_link3")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item2_link4")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item2_link5")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a
                    className="pricing__item-link--last"
                    href="tel:+998974420308"
                  >
                    {t("boglanish")}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="pricing__item">
            <div className="pricing__item-top">
              <h4 className="pricing__item-title">
                {t("pricing_item_title3")}
              </h4>
              <p className="pricing__item-desc"> {t("pricing_item_desc")}</p>
              <p className="pricing__item-info"> {t("pricing_item_info")}</p>
            </div>
            <div className="pricing__item-btm">
              <ul className="pricing__item-list">
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item3_link1")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item3_link2")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item3_link3")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a className="pricing__item-link" href="#">
                    {t("pricing_item3_link4")}
                  </a>
                </li>
                <li className="pricing__item--item">
                  <a
                    className=" pricing__item-link--last"
                    href="tel:+998974420308"
                  >
                    {t("boglanish")}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
