import { useTranslation } from "react-i18next";
import Dubai from "../../assets/dubai2.jpg";
import Istanbul from "../../assets/istanbul2.jpg";
import Sharm from "../../assets/sharm2.jpg";
export function Popular() {
  const { t, i18n } = useTranslation();

  return (
    <section className="popular bg-[#f4f4f4] " id="about">
      <div className="container">
        <div className="popular__desc-wrapper flex flex-col items-center gap-4">
          <span className="popular__desc text-[17px] block text-[#4883ff] ">
            {t("mashhur_manzil")}
          </span>
          <h3 className="popular__title">{t("popular_title")}</h3>
        </div>
        <div className="popular__content-wrapper">
          <ul className="popular__list">
            <li className="popular__item">
              <img
                className="popular__item-img "
                src={Dubai}
                alt="Dubais picture"
              />
              <div className="popular__item-inner">
                <h4 className="popular__item-title">
                  {t("popular_item_title1")}
                </h4>
                <span className="popular__item-info">
                  {t("popular_item_info1")}
                </span>
                <p className="popular__item-desc">{t("popular_item_desc1")}</p>
              </div>
              <div className="popular__item-link-wrapper">
                <a
                  className="popular__item-link uppercase"
                  href="tel:+998 97 442 03 08"
                >
                  {t("koproq_bilish")}
                </a>
                <a className="popular__item-link uppercase" href="#bron">
                  {t("band_qilish")}
                </a>
              </div>
            </li>
            <li className="popular__item popular__item-second">
              <img
                className="popular__item-img "
                src={Istanbul}
                alt="Istanbuls picture"
              />
              <div className="popular__item-inner">
                <h4 className="popular__item-title">
                  {t("popular_item_title2")}
                </h4>
                <span className="popular__item-info">
                  {t("popular_item_info2")}
                </span>
                <p className="popular__item-desc">{t("popular_item_desc2")}</p>
              </div>
              <div className="popular__item-link-wrapper">
                <a
                  className="popular__item-link uppercase"
                  href="tel:+998 97 442 03 08"
                >
                  {t("koproq_bilish")}
                </a>
                <a className="popular__item-link uppercase" href="#bron">
                  {t("band_qilish")}
                </a>
              </div>
            </li>
            <li className="popular__item">
              <img
                className="popular__item-img "
                src={Sharm}
                alt="Dubais picture"
              />
              <div className="popular__item-inner">
                <h4 className="popular__item-title">
                  {t("popular_item_title3")}
                </h4>
                <span className="popular__item-info">
                  {t("popular_item_info3")}
                </span>
                <p className="popular__item-desc">{t("popular_item_desc3")}</p>
              </div>
              <div className="popular__item-link-wrapper">
                <a
                  className="popular__item-link uppercase"
                  href="tel:+998 97 442 03 08"
                >
                  {t("koproq_bilish")}
                </a>
                <a className="popular__item-link uppercase" href="#bron">
                  {t("band_qilish")}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
