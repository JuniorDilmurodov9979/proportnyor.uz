import React from "react";
import Slider from "react-slick";

const ResponsiveCarousel = () => {
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
            Istanbul
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            76 band qilingan
          </p>
        </div>
      </li>
      <li className="places__item-second places__item p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            Sharm El-Sheykh
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            96 band qilingan
          </p>
        </div>
      </li>
      <li className="places__item places__item-third p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            Tailand
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            55 band qilingan
          </p>
        </div>
      </li>
      <li className="places__item places__item-fourth p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            Argentina
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            66 band qilingan
          </p>
        </div>
      </li>
      <li className="places__item places__item-fifth p-5">
        <div className="flex flex-col h-[100%] mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title">
            Dubai
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            76 band qilingan
          </p>
        </div>
      </li>
      <li className="places__item places__item-sixth p-5">
        <div className="flex flex-col h-[100%]  mt-auto gap-1 justify-end">
          <h4 className="text-[19px] font-medium tracking-wide  places__item-title ">
            Saudiya Arabistoni
          </h4>
          <p className="text-[13px] font-light tracking-wide places__item-desc">
            76 band qilingan
          </p>
        </div>
      </li>
    </Slider>
  );
};

export default ResponsiveCarousel;
