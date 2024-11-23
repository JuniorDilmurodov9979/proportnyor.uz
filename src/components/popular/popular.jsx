import Dubai from "../../assets/dubai2.jpg";
import Istanbul from "../../assets/istanbul2.jpg";
import Sharm from "../../assets/sharm2.jpg";
export function Popular() {
  return (
    <section className="popular bg-[#f4f4f4] " id="about">
      <div className="container">
        <div className="popular__desc-wrapper flex flex-col items-center gap-4">
          <span className="popular__desc text-[17px] block text-[#4883ff] ">
            Bizning mashhur manzillarimiz
          </span>
          <h3 className="popular__title">
            Dubay, Turkiya, Sharm El Sheyhni biz bilan kashf eting
          </h3>
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
                  Dubayda hashamatni his eting
                </h4>
                <span className="popular__item-info">
                  Shahar va sahro uyg'unligi
                </span>
                <p className="popular__item-desc">
                  Dubayning osmono'par binolari, hashamatli xaridlari va cho'l
                  sarguzashtlarining boyligidan zavqlaning. Madaniyat va
                  isrofgarchilikning ajoyib uyg'unligini taklif qiluvchi
                  an'analar zamonaviylikka mos keladigan shaharni o'rganing.
                </p>
              </div>
              <div className="popular__item-link-wrapper">
                <a
                  className="popular__item-link uppercase"
                  href="tel:+998 97 442 03 08"
                >
                  koproq bilish
                </a>
                <a className="popular__item-link uppercase" href="#bron">
                  band qilish
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
                  Turkiya madaniyatini kashf eting
                </h4>
                <span className="popular__item-info">
                  Tarixiy mo'jizalar va hayratlanarli manzaralar
                </span>
                <p className="popular__item-desc">
                  Turkiyaning qadimiy xarobalardan tortib jonli bozorlarigacha
                  bo'lgan jozibali tarixiga sho'ng'ing. Turkiyani ziyorat qilish
                  kerak bo'lgan manzilga aylantiradigan go'zal manzaralar,
                  mazali taomlar va samimiy mehmondo'stlikdan rohatlaning.
                </p>
              </div>
              <div className="popular__item-link-wrapper">
                <a
                  className="popular__item-link uppercase"
                  href="tel:+998 97 442 03 08"
                >
                  koproq bilish
                </a>
                <a className="popular__item-link uppercase" href="#bron">
                  band qilish
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
                  Sharm El-Sheykhda dam oling
                </h4>
                <span className="popular__item-info">
                  Quyosh, dengiz va osoyishtalik
                </span>
                <p className="popular__item-desc">
                  Sharm al-Shayxning ajoyib plyajlari va marjon riflariga
                  boring. Tiniq suvlarga sho'ng'ing, hashamatli dam olish
                  maskanlarida dam oling va ushbu tropik jannatda eng yaxshi dam
                  olishni his qiling.
                </p>
              </div>
              <div className="popular__item-link-wrapper">
                <a
                  className="popular__item-link uppercase"
                  href="tel:+998 97 442 03 08"
                >
                  koproq bilish
                </a>
                <a className="popular__item-link uppercase" href="#bron">
                  band qilish
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
