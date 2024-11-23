import "../../index.css";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import UzFlag from "../../assets/uz.svg"; // Import the flag images
import RuFlag from "../../assets/ru.png"; // Import Russian flag image
import UkFlag from "../../assets/uk.png"; // Import English flag image
import { useTranslation } from "react-i18next";

export function Header() {
  // List of available languages and their flags
  const languages = {
    uz: { flag: UzFlag, href: "/uz" },
    ru: { flag: RuFlag, href: "/ru" },
    en: { flag: UkFlag, href: "/en" },
  };

  // Initialize the state based on the current URL
  const [selectedFlag, setSelectedFlag] = useState(() => {
    const currentLang = window.location.pathname.replace("/", "") || "uz";
    return languages[currentLang] || languages.uz;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Closes the burger menu
  };
  const toggleDropdown = (state) => {
    setIsOpen(state);
  };

  const handleLanguageChange = (lang) => {
    setSelectedFlag(languages[lang]); // Update the displayed flag
    window.location.href = languages[lang].href; // Navigate to the new page
  };

  useEffect(() => {
    // Sync state with the URL when the component is rendered
    const currentLang = window.location.pathname.replace("/", "") || "uz";
    setSelectedFlag(languages[currentLang] || languages.uz);
  }, [window.location.pathname]);

  // Exclude the currently selected language from the dropdown options
  const filteredLanguages = Object.keys(languages).filter(
    (lang) => lang !== selectedFlag.href.replace("/", "")
  );

  const { t, i18n } = useTranslation();
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner flex justify-between items-center">
          <a className="site- justify-self-start decoration-0" href="">
            <img width={"118px"} height={"85px"} src={logo} alt="Logo" />
          </a>
          <ul className="header-list ml-auto flex ">
            <li className="header-item">
              <a
                className="header-link text-[#121212] text-[17px] font-bold"
                href=""
              >
                {t(" Asosiy sahifa")}
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link text-[#121212] text-[17px] font-bold"
                href="#about"
              >
                {t(" Biz haqimizda")}
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link text-[#121212] text-[17px] font-bold"
                href="#service"
              >
                {t(" Turlar")}
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

          <div className="language-dropdown">
            {/* Hover over this area to show dropdown */}
            <div
              className="flag-area header__flag-first"
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={() => toggleDropdown(false)}
            >
              <img
                src={selectedFlag.flag}
                alt="Selected Flag"
                className="flag-icon"
              />
            </div>

            {/* Dropdown menu */}
            {isOpen && (
              <div
                className="dropdown-content"
                onMouseEnter={() => toggleDropdown(true)} // Keep the dropdown open when hovering over it
                onMouseLeave={() => toggleDropdown(false)} // Close dropdown when mouse leaves the menu
              >
                {filteredLanguages.map((lang) => (
                  <a
                    key={lang}
                    href={languages[lang].href}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default navigation
                      handleLanguageChange(lang); // Update state and navigate
                    }}
                  >
                    <img
                      src={languages[lang].flag}
                      alt={`${lang} Flag`}
                      className="flag-icon"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className="burger-menu cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </div>
          <div className="">
            <div
              className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <ul className="space-y-6 text-center">
                <li>
                  <a
                    className="text-xl text-gray-800 font-bold hover:text-blue-600"
                    href=""
                  >
                    Asosiy sahifa
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-gray-800 font-bold hover:text-blue-600"
                    href="#about"
                  >
                    Biz haqimizda
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-gray-800 font-bold hover:text-blue-600"
                    href="#service"
                  >
                    Turlar
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-gray-800 font-bold hover:text-blue-600"
                    href="#contact"
                  >
                    Kontaktlar
                  </a>
                </li>
              </ul>

              {/* Language Dropdown */}
              <div className="mt-10">
                <button className="flex items-center text-gray-800">
                  <img
                    src={selectedFlag.flag}
                    alt="Selected Flag"
                    className="w-6 h-6 mr-2"
                  />
                  <span className="font-bold">Language</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown content */}
                <div className="mt-2 bg-gray-100 shadow-md rounded-md">
                  {filteredLanguages.map((lang) => (
                    <a
                      key={lang}
                      href={languages[lang].href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLanguageChange(lang);
                      }}
                    >
                      <img
                        src={languages[lang].flag}
                        alt={`${lang} Flag`}
                        className="inline-block w-6 h-6 mr-2"
                      />
                      {lang}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
