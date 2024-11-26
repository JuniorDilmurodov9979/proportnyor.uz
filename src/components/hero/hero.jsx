import { useTranslation } from "react-i18next";

import bannerPng from "../../assets/banner.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Hero() {
  const { t, i18n } = useTranslation();
  const notify = () => toast.success(t("alert_biz_tez_orada"));
  return (
    <section className="hero">
      <div className="hero__wrapper bg-[url(./assets/banner.png)] ">
        <div className="container">
          <div className="hero__inner ">
            <div className="hero-content__wrapper flex flex-col mx-auto gap-5 pt-[200px]">
              <div
                className="hero__content-title-wrapper flex flex-col gap-5"
                id="bron"
              >
                <h1 className="hero__title text-white text-[42px] ">
                  {t("Sayohat1")}
                </h1>
                <p className="hero__desc text-white text-[22px] tracking-wide">
                  {t("Sayohat2")}
                </p>
                <div className="mt-2">
                  <a
                    href="#planId"
                    className="hero__link bg-[#4883ff] inline-block font-medium text-[15px] text-[#fff] hover:bg-transparent hover:text-[#4883ff] border-solid border-[2px] border-[#4883ff] py-[10px] px-4 transition ease-linear duration-450"
                  >
                    {t("koproq_bilish")}
                  </a>
                </div>
              </div>
              <div className="hero-submit mt-[200px] border-b-4 border-[#4883ff]">
                <form
                  // onSubmit={handleSubmit}
                  className="hero__form flex gap-5 p-[18px] bg-white "
                >
                  <input
                    required
                    className="w-[205px] text-[#9a9a9a] border-r-[1px] outline-0"
                    placeholder={t("form_name")}
                    type="text"
                  />
                  <input
                    required
                    className="w-[205px] text-[#9a9a9a] outline-0 border-r-[1px]"
                    placeholder={t("form_place")}
                    type="text"
                  />
                  <input
                    required
                    className="w-[205px]  outline-0  text-[#9a9a9a]"
                    value={"2024-11-21"}
                    type="date"
                  />
                  <div className="hero__btn-wrapper ml-auto border-l-[1px] pl-5">
                    <button
                      onClick={notify}
                      className="hero__btn bg-[#4883ff]  inline-block w-[206px] font-medium text-[17px] text-[#fff] hover:bg-transparent hover:text-[#4883ff] border-solid border-[2px] border-[#4883ff] py-[10px] px-4 transition ease-linear duration-450 tracking-wide"
                      type="submit"
                    >
                      <ToastContainer position="top-center" />
                      {t("joy_band_qilish")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
