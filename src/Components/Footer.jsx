const Footer = () => {
  return (
    <footer className="py-12 bg-white sm:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="relative flex flex-col items-center gap-y-8 md:flex-row md:justify-between">
          <a
            href="#"
            title="30 Days of Coding"
            className="flex items-center shrink-0 md:order-1"
          >
            <img
              className="w-auto h-10 sm:h-12"
              src="/images/logo.svg"
              alt="DSA revison logo"
            />
          </a>
          <div className="relative flex items-center justify-center gap-3 md:order-3 sm:justify-end">
            <a
              href="https://twitter.com/singh1aryan"
              title="Twitter"
              className="p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-1 ring-transparent ring-inset hover:ring-green-200"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only"> Twitter </span>
              <img
                className="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0"
                src="images/icon-twitter.svg"
                alt="twitter logo"
              />
            </a>
            <a
              href="https://youtube.com/@brwnboi"
              title="Youtube"
              className="p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-1 ring-transparent ring-inset hover:ring-green-200"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only"> Youtube </span>
              <img
                className="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0"
                src="images/icon-youtube.svg"
                alt="youtube logo"
              />
            </a>
            <a
              href="https://linkedin.com/in/singh1aryan"
              title="Linkedin"
              className="p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-1 ring-transparent ring-inset hover:ring-green-200"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only"> LinkedIn</span>
              <img
                className="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0"
                src="images/icon-linkedin.svg"
                alt="linkedin logo"
              />
            </a>
            <a
              href="https://instagram.com/singh.aryan.45"
              title="Instagram"
              className="p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-1 ring-transparent ring-inset hover:ring-green-200"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only"> Instagram </span>
              <img
                className="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0"
                src="images/icon-instagram.svg"
                alt="instagram logo"
              />
            </a>
          </div>
          <p className="flex items-center justify-center text-base font-normal text-gray-500 md:absolute md:inset-0 md:order-2">
            2023 © DSA revision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
