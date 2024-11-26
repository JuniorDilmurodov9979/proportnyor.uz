import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import BookingModal from "../../const/model";

export function Contact() {
  const BookingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const { t, i18n } = useTranslation();

    return (
      <div className="model__wrapper fixed pt-[10%] pb-[10%] inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
        <div className="model__inner bg-white flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-lg max-w-4xl w-full relative">
          {/* Left Section: Form */}
          <div className="p-8 flex-1 sm:w-1/2">
            <h2 className="text-lg font-semibold text-blue-600 text-center sm:text-left">
              {t("joy_band_qilish")}
            </h2>
            <p className="mt-2 text-gray-700 text-xl font-medium text-center sm:text-left">
              {t("modal_info")}
            </p>
            <form
              id="contactForm"
              onSubmit={sendMessage}
              className="mt-4 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  id="name"
                  type="text"
                  placeholder={t("form_name")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  required
                  name="email"
                  id="email"
                  type="email"
                  placeholder={t("email_place")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  required
                  name="tel"
                  id="tel"
                  type="text"
                  placeholder={t("tel_place")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows="4"
                  placeholder={t("textarea_place")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                loading={loading}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                {loading ? t("loading") : t("joy_band_qilish")}
              </button>
            </form>
          </div>

          {/* Right Section: Contact Info */}
          <div className="model__rigth-wrapper bg-blue-600 text-white p-8 sm:w-96 mt-8 sm:mt-0">
            <h3 className="text-xl font-semibold">{t("pricing_item_desc")}</h3>
            <p className="mt-4 text-lg">{t("modal_r_title")} </p>
            <p className="mt-4">{t("modal_r_desc")}</p>
            <ul className="flex flex-col gap-2">
              <li className="mt-6 flex gap-2">
                <span className="font-medium">{t("tel_raqam")} </span>
                <a href="tel:+998974420308">+998 97 442 03 08</a>
              </li>
              <li className="mt-2 flex gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:saidalimov112233@gmail.com">
                  saidalimov112233@gmail.com
                </a>
              </li>
              <li className="mt-2 flex gap-2">
                <span className="font-medium">{t("manzil")} </span>
                <a href="https://www.google.com/maps/place/..." target="_blank">
                  Labzak 76, Tashkent
                </a>
              </li>
            </ul>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute model__close-btn text-2xl font-bold top-4 right-4"
          >
            ×
          </button>
        </div>
      </div>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleScrollbar = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      if (isModalOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`; // Add padding to compensate for scrollbar
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = ""; // Remove padding
      }
    };

    handleScrollbar();

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  const [loading, setLoading] = useState(false);
  const sendMessage = (evt) => {
    setLoading(true);
    evt.preventDefault();
    const token = "7401469147:AAF9PXWbMY8k0ajcFRnBt48ppJsPViTv3ss";
    const chat_id = "895891463";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const message = document.getElementById("message").value;
    const messageContent = `Name: ${name} \n Email: ${email} \n Tel: ${tel} \n Message: ${message}`;
    // console.log({ name });
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        document.getElementById("contactForm").reset();
        alert(t("alert_biz_tez_orada"));
      })
      .catch((err) => {
        console.log("Junatilmadi?!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { t, i18n } = useTranslation();
  return (
    <section className="contact" id="contact">
      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5992.019531827382!2d69.263545!3d41.330401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b682b58b0d7%3A0x58187174f7a0a760!2z0YPQu9C40YbQsCDQm9Cw0LHQt9Cw0LogNzYsINCi0L5zaGtlbnQsIFRvc2hrZW50LCBVemJla2lzdGFu!5e0!3m2!1sen!2sus!4v1732282640620!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact__inner relative flex justify-center items-center">
        <p className="contact__info">{t("contact_info")}</p>
        <h3 className="contact__title">{t("contact_title")}</h3>
        <button onClick={() => setIsModalOpen(true)} className="contact__link">
          {t("joy_band_qilish")}
        </button>
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
