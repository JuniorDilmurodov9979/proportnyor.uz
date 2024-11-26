import { useState } from "react";
import video from "../service/highway-loop.mp4";
import { useTranslation } from "react-i18next";

export function Service() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const { t, i18n } = useTranslation();

  return (
    <section className="service" id="service">
      <div className="container">
        <div className="service__title-wrapper">
          <p className="service__info">{t("bizning_xizmat")}</p>
          <h3 className="service__title">{t("service_title")}</h3>
        </div>
        <ul className="service__list">
          <li className="service__item">
            <h4 className="service__item-title service__item-title-first">
              {t("service_item_title1")}
            </h4>
            <p className="service__item-desc">{t("service_item_desc1")}</p>
          </li>
          <li className="service__item">
            <h4 className="service__item-title service__item-title-second">
              {t("service_item_title2")}
            </h4>
            <p className="service__item-desc">{t("service_item_desc2")}</p>
          </li>
          <li className="service__item">
            <h4 className="service__item-title service__item-title-third">
              {t("service_item_title3")}
            </h4>
            <p className="service__item-desc">{t("service_item_desc3")}</p>
          </li>
        </ul>
        <div id="planId" className="service__plan">
          <div className="service__plan-inner">
            <h3 className="service__plan-title">{t("plan_title")}</h3>
            <p className="service__plan-desc">{t("plan_desc")}</p>
            <a className="service__plan-link" href="tel:+998 97 442 03 08">
              {t("boglanish")}
            </a>
          </div>
          <div
            className="service__det"
            style={{
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              height: "100%",
            }}
          >
            {/* Tajribali gidlar xizmati */}
            <div
              className="service__det-inner"
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                cursor: "pointer",
              }}
              onClick={() => toggleSection("section1")}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="service__det-title">{t("det_title1")}</span>
                <span
                  className={activeSection === "section1" ? "dot" : "dot__null"}
                  style={{
                    color: "#007bff",
                  }}
                ></span>
              </div>
              <div
                className="service__det-desc"
                style={{
                  maxHeight: activeSection === "section1" ? "200px" : "0",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                  color: "#7a7a7a",
                  marginTop: activeSection === "section1" ? "10px" : "0",
                }}
              >
                {t("det_desc1")}
              </div>
            </div>

            {/* Moslashuvchan xizmatlar */}
            <div
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                cursor: "pointer",
              }}
              onClick={() => toggleSection("section2")}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="service__det-title">{t("det_title2")}</span>
                <span
                  className={activeSection === "section2" ? "dot" : "dot__null"}
                  style={{
                    color: "#007bff",
                  }}
                ></span>
              </div>
              <div
                className="service__det-desc"
                style={{
                  maxHeight: activeSection === "section2" ? "200px" : "0",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                  color: "#7a7a7a",

                  marginTop: activeSection === "section2" ? "10px" : "0",
                }}
              >
                {t("det_desc2")}
              </div>
            </div>

            {/* 24/7 Qo'llab quvvatlash */}
            <div
              style={{
                padding: "15px",
                cursor: "pointer",
                border: "1px solid #ddd",
              }}
              onClick={() => toggleSection("section3")}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="service__det-title">{t("det_title3")}</span>
                <span
                  className={activeSection === "section3" ? "dot" : "dot__null"}
                  style={{
                    color: "#007bff",
                  }}
                ></span>
              </div>
              <div
                className="service__det-desc"
                style={{
                  maxHeight: activeSection === "section3" ? "200px" : "0",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                  color: "#7a7a7a",
                  marginTop: activeSection === "section3" ? "10px" : "0",
                }}
              >
                {t("det_desc3")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service__video-wrapper">
        <a
          className="service__video-link"
          href="https://www.youtube.com/"
          target="_blank"
        ></a>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
