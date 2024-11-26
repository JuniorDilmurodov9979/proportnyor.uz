import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const ResponsiveCarousel = () => {
  const { t, i18n } = useTranslation();

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <li className="places__item p-5 ">
        <div className="places__carousel-content flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            {t("places_item_title1")}
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            {t("places_item_desc1")}
          </p>
        </div>
      </li>
      <li className="places__item-second places__item p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            {t("places_item_title2")}
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            {t("places_item_desc2")}
          </p>
        </div>
      </li>
      <li className="places__item places__item-third p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            {t("places_item_title3")}
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            {t("places_item_desc3")}
          </p>
        </div>
      </li>
      <li className="places__item places__item-fourth p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            {t("places_item_title4")}
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            {t("places_item_desc4")}
          </p>
        </div>
      </li>
      <li className="places__item places__item-fifth p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            {t("places_item_title5")}
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            {t("places_item_desc5")}
          </p>
        </div>
      </li>
      <li className="places__item places__item-sixth p-5">
        <div className="flex flex-col h-[100%]  mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title ">
            {t("places_item_title6")}
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            {t("places_item_desc6")}
          </p>
        </div>
      </li>
    </Slider>
  );
};

export default ResponsiveCarousel;
