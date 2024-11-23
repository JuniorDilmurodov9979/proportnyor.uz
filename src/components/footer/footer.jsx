import FooterLogo from "../../assets/logoFooter.png";
import Facebook from "../../assets/facebook.svg";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__right-wrapper">
            <a href="">
              <img className="footer__logo" src={FooterLogo} alt="" />
            </a>
            <p className="footer__right-desc">
              Biz bilan dunyoni zabt eting. Sayohat tashkil qilishda eng yaxshi
              hamkoringiz
            </p>
            <ul className="footer__right-list">
              <li className="footer__right-item">
                <a
                  href="#"
                  className="footer__right-link footer__right-link--first"
                />
              </li>
              <li className="footer__right-item">
                <a
                  href="#"
                  className="footer__right-link footer__right-link--second"
                />
              </li>
              <li className="footer__right-item">
                <a
                  href="#"
                  className="footer__right-link footer__right-link--third"
                />
              </li>
              <li className="footer__right-item">
                <a
                  href="#"
                  className="footer__right-link footer__right-link--fourth"
                />
              </li>
            </ul>
          </div>
          <div className="footer__mid-wrapper">
            <h4 className="footer__mid-title">Foydali Havolalar</h4>
            <div className="footer__mid-inner">
              <ul className="footer__mid-list">
                <li className="footer__mid-item">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a className="footer__mid-link" href="#">
                        Manzillar
                      </a>
                    </li>
                    <li>
                      <a className="footer__mid-link" href="#">
                        Turlar
                      </a>
                    </li>
                    <li>
                      <a className="footer__mid-link" href="#">
                        Maxsus Takliflar
                      </a>
                    </li>
                    <li>
                      <a className="footer__mid-link" href="#">
                        Mijoz Fikrlari
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer__mid-item">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a className="footer__mid-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="footer__mid-link" href="#">
                        Biz bilan Aloqa
                      </a>
                    </li>
                    <li>
                      <a className="footer__mid-link" href="#">
                        Biz Haqimizda
                      </a>
                    </li>
                    <li>
                      <a className="footer__mid-link" href="#">
                        Maxfiylik Siyosati
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__left-wrapper">
            <h4 className="footer__mid-title footer__left-title">
              Aloqa Ma'lumoti
            </h4>
            <p className="footer__left-desc footer__right-desc">
              Keyingi sayohatingizga tayyor bo'lib, shaxsiy sayohat yordam va
              so'rovnoma uchun biz bilan bog'laning.
            </p>
            <ul className="footer__left-list">
              <li className="flex gap-4">
                <p className="footer__left-info">Telefon:</p>
                <a className="footer__left-link" href="tel:+998974420308">
                  +998 97 442 03 08
                </a>
              </li>
              <li className="flex gap-4">
                <p className="footer__left-info">Email:</p>
                <a
                  className="footer__left-link"
                  href="mailto:saidalimov112233@gmail.com"
                >
                  saidalimov112233@gmail.com
                </a>
              </li>
              <li className="flex gap-4">
                <p className="footer__left-info">Manzil:</p>
                <a
                  className="footer__left-link"
                  href="https://www.google.com/maps/search/Labzak+76,+Toshkent+shahri/@41.3273652,69.2548084,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Labzak 76, Toshkent shahri
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__btm">
        <p className="footer__btm-desc">Copyright © 2024 Propartnyor JS</p>
      </div>
    </footer>
  );
}
