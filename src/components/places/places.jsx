import ResponsiveCarousel from "../../const/carousel";

export function Places() {
  return (
    <section className="places pt-[80px]">
      <div className="">
        <div className="places__content flex flex-col gap-3 items-center mb-[60px] ">
          <span className="places__desc text-[17px] block text-[#4883ff] ">
            Bizning mashhur manzillarimiz
          </span>
          <h2 className="places__title text-[23px] font-semibold text-[#232323] tracking-wide ">
            Ushbu yo'nalishlar bilan haqiqatan ham o'ziga xos qiladigan
            go'zallik, madaniyat va tajribalarni kashf eting.
          </h2>
        </div>
        <div className="places__carousel">
          <ResponsiveCarousel />
        </div>
      </div>
    </section>
  );
}
