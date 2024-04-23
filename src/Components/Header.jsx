const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full py-4 bg-white/90 backdrop-blur-lg">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#"
            title="30 Days of Coding"
            className="flex items-center shrink-0"
          >
            <img
              className="w-auto h-10 sm:h-12"
              src="/images/logo.svg"
              alt=" 30 days of coding logo"
            />
          </a>
          <nav className="hidden p-1 bg-gray-100 rounded-full md:justify-center md:items-center md:flex">
            <a
              href="#intro"
              title="Intro"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2"
            >
              {" "}
              Intro{" "}
            </a>
            <a
              href="#pricing"
              title="Pricing"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2"
            >
              {" "}
              Pricing{" "}
            </a>
            <a
              href="#features"
              title="Features"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2"
            >
              {" "}
              Features{" "}
            </a>
            <a
              href="#testimonial"
              title="Testimonial"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2"
            >
              {" "}
              Testimonials{" "}
            </a>
          </nav>
          <a
            href="https://bit.ly/30dc-aryan"
            title=""
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 transition-all duration-150"
            role="button"
          >
            {" "}
            Join Community
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
