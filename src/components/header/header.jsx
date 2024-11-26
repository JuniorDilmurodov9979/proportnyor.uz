import "../../index.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import UzFlag from "../../assets/uz.svg";
import RuFlag from "../../assets/ru.png";
import UkFlag from "../../assets/uk.png";

export function Header() {
  const { t, i18n } = useTranslation();

  // Define available languages with their flags
  const languages = {
    uz: { flag: UzFlag },
    ru: { flag: RuFlag },
    en: { flag: UkFlag },
  };

  // State for the selected language
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle language change
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Update i18n language
    setSelectedLang(lang); // Update selected language in state
  };

  useEffect(() => {
    setSelectedLang(i18n.language); // Sync state with i18n.language
  }, [i18n.language]);

  const toggleDropdown = (state) => {
    setIsOpen(state);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner flex justify-between relative items-center">
          <a className="site- justify-self-start decoration-0" href="">
            <img width="118px" height="85px" src={logo} alt="Logo" />
          </a>
          <ul className="header-list ml-auto flex">
            <li className="header-item">
              <a
                className="header-link text-[#121212] text-[17px] font-bold"
                href=""
              >
                {t("Asosiy_sahifa")}
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link text-[#121212] text-[17px] font-bold"
                href="#about"
              >
                {t("Biz_haqimizda")}
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link text-[#121212] text-[17px] font-bold"
                href="#service"
              >
                {t("Turlar")}
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link text-[#121212] text-[17px] font-bold"
                href="#contact"
              >
                {t("Kontaktlar")}
              </a>
            </li>
          </ul>

          {/* Language Dropdown */}
          <div
            className="language-dropdown"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
          >
            <div className="flag-area">
              <img
                src={languages[selectedLang].flag}
                alt="Selected Flag"
                className="flag-icon"
              />
            </div>

            {isOpen && (
              <div className="dropdown-content ">
                {Object.keys(languages)
                  .filter((lang) => lang !== selectedLang)
                  .map((lang) => (
                    <button
                      key={lang}
                      className="dropdown-item "
                      onClick={() => handleLanguageChange(lang)}
                    >
                      <img
                        src={languages[lang].flag}
                        alt={`${lang} Flag`}
                        className="flag-icon"
                      />
                    </button>
                  ))}
              </div>
            )}
          </div>

          {/* Burger Menu */}
          <div
            className="burger-menu cursor-pointer md:hidden p-5 py- bg-[#4883ff]"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-[2px] bg-white  mb-1"></span>
            <span className="block w-6 h-[2px] bg-white  mb-1"></span>
            <span className="block w-6 h-[2px] bg-white mb-1"></span>
          </div>

          {isMenuOpen && (
            <div className="burger_wrapper absolute top-[150%] w-full">
              <ul className="text-center burger_list">
                <li>
                  <a
                    className="text-xl px-4 text-gray-800 font-bold hover:text-blue-600"
                    href=""
                  >
                    {t("Asosiy_sahifa")}
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-gray-800 font-bold hover:text-blue-600"
                    href="#about"
                  >
                    {t("Biz_haqimizda")}
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-gray-800 font-bold hover:text-blue-600"
                    href="#service"
                  >
                    {t("Turlar")}
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-gray-800 font-bold hover:text-blue-600"
                    href="#contact"
                  >
                    {t("Kontaktlar")}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
