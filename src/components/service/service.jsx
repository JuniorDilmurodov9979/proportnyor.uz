import { useState } from "react";
import video from "../service/highway-loop.mp4";

export function Service() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="service" id="service">
      <div className="container">
        <div className="service__title-wrapper">
          <p className="service__info">Bizning xizmatlar</p>
          <h3 className="service__title">Ishonch bilan kashf eting</h3>
        </div>
        <ul className="service__list">
          <li className="service__item">
            <h4 className="service__item-title service__item-title-first">
              Sayohat tajribalari
            </h4>
            <p className="service__item-desc">
              Sizning xohishingizga moslashtirilgan yuqori sifatli tajribalarni
              ta'minlab, puxta ishlab chiqilgan sayohat marshrutlarini kashf
              eting. Mutaxassislar tomonidan tayyorlangan paketlarimiz unutilmas
              sarguzashtlarni kafolatlaydi.
            </p>
          </li>
          <li className="service__item">
            <h4 className="service__item-title service__item-title-second">
              Eng yaxshi marshrutlar
            </h4>
            <p className="service__item-desc">
              Sizning noyob qiziqishlaringiz va istaklaringizga mos keladigan
              to'liq moslashtirilgan sayohat rejalaridan rohatlaning. Biz
              sizning shaxsiy imtiyozlaringiz va sayohat intilishlaringizni aks
              ettiruvchi sayohatlarni yaratishga ixtisoslashganmiz.
            </p>
          </li>
          <li className="service__item">
            <h4 className="service__item-title service__item-title-third">
              Tayyor sayohat yo'nalishlari
            </h4>
            <p className="service__item-desc">
              Bizning paketlarimiz qulaylik, sarguzasht va madaniy suvga
              cho'milishning uzluksiz uyg'unligini ta'minlaydi va ajoyib sayohat
              tajribasini ta'minlaydi.
            </p>
          </li>
        </ul>
        <div id="planId" className="service__plan">
          <div className="service__plan-inner">
            <h3 className="service__plan-title">
              Orzuyingdagi sayohatni rejalashtiring
            </h3>
            <p className="service__plan-desc">
              O'zingizning orzuingizdagi sayohatga chiqayotganingizda, har bir
              tafsilotga e'tibor qaratamiz. Bu madaniy qochish, sarguzashtli
              ekspeditsiya yoki sohilda dam olish bo'ladimi, biz muammosiz va
              unutilmas sayohat tajribasini ta'minlaymiz.
            </p>
            <a className="service__plan-link" href="tel:+998 97 442 03 08">
              Bog'lanish
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
                <span className="service__det-title">
                  Tajribali gidlar xizmati
                </span>
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
                Siz uchun mukammal marshrutni yaratishga ishtiyoqli sayohat
                bo'yicha mutaxassislarimizdan ko'rsatmalar oling. Manzil
                takliflaridan tortib sayohat maslahatlarigacha sayohatingizni
                ajoyib qilish uchun shu yerdamiz.
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
                <span className="service__det-title">
                  Moslashuvchan xizmatlar
                </span>
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
                Sayohat tajribangizni moslashtirilgan variantlar bilan moslang,
                sayohatingizning har bir jihati sizning afzalliklaringizga mos
                kelishini ta'minlang. Noyob uslubingizga mos keladigan turar
                joy, tadbirlar va boshqalarni tanlang.
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
                <span className="service__det-title">
                  24/7 Qo'llab quvvatlash
                </span>
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
                24/7 mijozlarni qo'llab-quvvatlash xizmati bilan xotirjamlikni
                his qiling. Rejalashtirish jarayonida savollaringiz bo'ladimi
                yoki sayohat paytida yordam kerakmi, bizning jamoamiz sizni
                qo'llab-quvvatlash uchun doimo shu yerda.
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
