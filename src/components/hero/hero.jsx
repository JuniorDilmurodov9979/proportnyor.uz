import bannerPng from "../../assets/banner.png";
export function Hero() {
  const handleSubmit = (evt) => {
    evt.preventDefault(); // Prevent the default form submission behavior
    alert("Biz tez orada siz bilan bog'lanamiz, rahmat!");
  };
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
                  Sayohat qilishni xohlaysizmi?
                </h1>
                <p className="hero__desc text-white text-[22px] tracking-wide">
                  Sayohat orzularingizni haqiqatga aylantiring: rejalashtiring,
                  kashf qiling va unutilmas xotiralar yarating.
                </p>
                <div className="mt-2">
                  <a
                    href="#planId"
                    className="hero__link bg-[#4883ff] inline-block font-medium text-[15px] text-[#fff] hover:bg-transparent hover:text-[#4883ff] border-solid border-[2px] border-[#4883ff] py-[10px] px-4 transition ease-linear duration-450"
                  >
                    Ko'proq bilish
                  </a>
                </div>
              </div>
              <div className="hero-submit mt-[200px] border-b-4 border-[#4883ff]">
                <form
                  onSubmit={handleSubmit}
                  className="hero__form flex gap-5 p-[18px] bg-white "
                >
                  <input
                    required
                    className="w-[205px] text-[#9a9a9a] border-r-[1px] outline-0"
                    placeholder="ismingiz..."
                    type="text"
                  />
                  <input
                    required
                    className="w-[205px] text-[#9a9a9a] outline-0 border-r-[1px]"
                    placeholder="Manzilingiz..."
                    type="text"
                  />
                  <input
                    required
                    className="w-[205px]  outline-0  text-[#9a9a9a]"
                    value={"2024-11-21"}
                    type="date"
                  />
                  <div className="ml-auto border-l-[1px] pl-5">
                    <button
                      className="hero__btn bg-[#4883ff]  inline-block w-[206px] font-medium text-[17px] text-[#fff] hover:bg-transparent hover:text-[#4883ff] border-solid border-[2px] border-[#4883ff] py-[10px] px-4 transition ease-linear duration-450 tracking-wide"
                      type="submit"
                    >
                      Joy Band Qilish
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
