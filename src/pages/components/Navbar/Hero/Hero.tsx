// Imports

// Functions
const Hero = () => {
  return (
    <section className="relative mx-16 flex h-[32rem] items-center justify-center rounded bg-[#212529] text-center text-white">
      <div className="absolute z-10 h-full w-full overflow-hidden rounded bg-[url('/img/hero.jpg')] bg-cover opacity-60"></div>
      <section className="z-20">
        <section className="flex flex-col gap-4">
          <p className="text-xs font-light">Tomas Edwardo</p>
          <h2 className="text-2xl font-bold">
            Instagram artists with great
            <br />
            photography skills
          </h2>
        </section>
        <section className="absolute bottom-[3rem] left-2/4 flex -translate-x-2/4 -translate-y-2/4 transform items-center gap-2">
          <div className="h-[0.5px] w-12 bg-white"></div>
          <p className="text-sm font-light">1/5</p>
        </section>
      </section>
    </section>
  );
};

// Exports
export default Hero;
