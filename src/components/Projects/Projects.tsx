// Imports
import classNames from "classnames";
import { type IProjectProps } from "./Projects.types";
import Image from "next/image";

// Functions
const Projects = () => (
  <section className="page-width flex flex-col gap-12">
    <section className="flex items-end justify-between">
      <section>
        <h2 className="max-w-[25ch] text-2xl font-bold text-[#212529]">
          Design is not just what it looks like and feels like.
        </h2>
      </section>
      <section className="hidden xl:block">
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#495057] hover:cursor-pointer"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#C4C4C4] hover:cursor-pointer"
            >
              Modern
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#C4C4C4] hover:cursor-pointer"
            >
              Industrial
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#C4C4C4] hover:cursor-pointer"
            >
              Art Moderne
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#C4C4C4] hover:cursor-pointer"
            >
              Contemporary
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#C4C4C4] hover:cursor-pointer"
            >
              Industrial
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#C4C4C4] hover:cursor-pointer"
            >
              Minimalist
            </a>
          </li>
        </ul>
      </section>
    </section>
    <section>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <Project img="interior-1" id={1} />
        <Project img="interior-2" id={2} />
        <Project img="interior-3" id={3} />
        <Project img="interior-4" id={4} />
        <Project img="interior-5" id={5} />
        <Project img="interior-6" id={6} />
        <Project img="interior-7" id={7} />
        <Project img="interior-8" id={8} />
        <Project img="interior-9" id={9} />
      </ul>
    </section>
  </section>
);

const Project = ({ img, id }: IProjectProps) => (
  <li
    className={classNames({
      "hidden md:block": id > 3,
      "md:hidden xl:block": id > 6,
    })}
  >
    <article className="flex flex-col gap-8">
      <div className="relative h-[16rem] overflow-hidden rounded">
        <Image
          src={`/img/${img}.jpg`}
          alt="Interior image"
          className="object-cover"
          layout="fill"
        />
      </div>
      <section className="bg flex flex-col gap-4">
        <h3 className="text-xs font-light text-[#495057]">29.Jun.2021</h3>
        <h4 className="font-medium text-[#212529]">
          Richard Norton photorealistic rendering as real photos
        </h4>
      </section>
    </article>
  </li>
);

// Exports
export default Projects;
