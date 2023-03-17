// Imports
import classNames from "classnames";
import { type ITrendProps } from "./Trending.types";
import Image from "next/image";

// Functions
const Trending = () => (
  <section className="page-width flex flex-col gap-12">
    <h2 className="text-2xl font-bold text-[#212529]">Trending</h2>
    <section>
      <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <Trend id={1} img="trending-1" cols={2} />
        <Trend id={2} img="trending-2" />
        <Trend id={3} img="trending-3" />
        <Trend id={4} img="trending-4" />
        <Trend id={5} img="trending-5" />
      </ul>
    </section>
  </section>
);

const Trend = ({ cols, id, img }: ITrendProps) => (
  <li
    className={classNames("relative h-[30rem] rounded bg-[#212529]", {
      "sm:col-span-2 md:col-span-1 xl:col-span-2": cols === 2,
      "hidden sm:block": id > 2,
      "sm:hidden lg:block": id > 3,
      "md:block lg:hidden xl:block": id > 4,
    })}
  >
    <div className="absolute z-10 h-full w-full overflow-hidden rounded bg-cover bg-center opacity-80">
      <Image className="object-cover" src={`/img/${img}.jpg`} fill></Image>
    </div>
    <section className="absolute z-20 flex h-full flex-col justify-end gap-4 p-12">
      <h5 className="text-xs font-light text-[#E5E5E5]">29.Jun.2021</h5>
      <h4 className="max-w-[35ch] font-medium text-white">
        Richard Norton photorealistic rendering as real photos
      </h4>
    </section>
  </li>
);

// Exports
export default Trending;
