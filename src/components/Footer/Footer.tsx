// Imports

// Functions
const Footer = () => (
  <footer className="bg-[#212529]">
    <div className="page-width flex w-full flex-col gap-8  py-24">
      <section className="flex items-center justify-between">
        <h3 className="font-bold text-[#F8F9FA]">
          VENCE Studio<span className="text-[#DDBEA9]">.</span>
        </h3>
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#F8F9FA] opacity-50 hover:cursor-pointer"
            >
              About Studio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#F8F9FA] opacity-50 hover:cursor-pointer"
            >
              Archive
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#F8F9FA] opacity-50 hover:cursor-pointer"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#F8F9FA] opacity-50 hover:cursor-pointer"
            >
              Fb
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#F8F9FA] opacity-50 hover:cursor-pointer"
            >
              Tw
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-medium text-[#F8F9FA] opacity-50 hover:cursor-pointer"
            >
              Ln
            </a>
          </li>
        </ul>
      </section>
      <div className="h-[1px] w-full bg-[#E5E5E5] opacity-20"></div>
      <section className="flex items-center justify-between">
        <p className="hidden text-xs font-medium text-[#F8F9FA] opacity-50 md:block">
          1088, North Street, Alexandria, AU
        </p>
        <p className="text-xs font-medium text-[#F8F9FA] opacity-50">
          © 2022, All Rights Reserved
        </p>
      </section>
    </div>
  </footer>
);

// Exports
export default Footer;
