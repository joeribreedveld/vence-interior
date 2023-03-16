// Imports
import classNames from "classnames";

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
            <a className="text-xs font-medium text-[#495057]">All</a>
          </li>
          <li>
            <a className="text-xs font-medium text-[#C4C4C4]">Modern</a>
          </li>
          <li>
            <a className="text-xs font-medium text-[#C4C4C4]">Industrial</a>
          </li>
          <li>
            <a className="text-xs font-medium text-[#C4C4C4]">Art Moderne</a>
          </li>
          <li>
            <a className="text-xs font-medium text-[#C4C4C4]">Contemporary</a>
          </li>
          <li>
            <a className="text-xs font-medium text-[#C4C4C4]">Industrial</a>
          </li>
          <li>
            <a className="text-xs font-medium text-[#C4C4C4]">Minimalist</a>
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

const Project = ({ img, id }) => (
  <li
    className={classNames({
      "hidden md:block": id > 3,
      "md:hidden xl:block": id > 6,
    })}
  >
    <article className="flex flex-col gap-8">
      <img
        src={`img/${img}.jpg`}
        alt="Interior image"
        className="h-[16rem] rounded object-cover"
      />
      <section className="bg flex flex-col gap-4">
        <h5 className="text-xs font-light text-[#495057]">29.Jun.2021</h5>
        <h4 className="font-medium text-[#212529]">
          Richard Norton photorealistic rendering as real photos
        </h4>
      </section>
    </article>
  </li>
);

// Exports
export default Projects;
