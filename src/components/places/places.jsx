import { useTranslation } from "react-i18next";
import ResponsiveCarousel from "../../const/carousel";

export function Places() {
  const { t, i18n } = useTranslation();

  return (
    <section className="places pt-[80px]">
      <div className="">
        <div className="places__content flex flex-col gap-3 items-center mb-[60px] ">
          <span className="places__desc text-[17px] block text-[#4883ff] ">
            {t("mashhur_manzil")}
          </span>
          <h2 className="places__title text-[23px] font-semibold text-[#232323] tracking-wide ">
            {t("places_title")}
          </h2>
        </div>
        <div className="places__carousel">
          <ResponsiveCarousel />
        </div>
      </div>
    </section>
  );
}
