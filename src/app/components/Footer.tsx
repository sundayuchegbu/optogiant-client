import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <>
      <div className="bg-[#004109]">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-100 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-white">OPTOGIANT</h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Documentation <span className="text-white text-xs p-1" />
            </a>
            <a className="my-3 block" href="/#">
              Tutorials <span className="text-white text-xs p-1" />
            </a>
            <a className="my-3 block" href="/#">
              Support <span className="text-white text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Help Center <span className="text-[#ffffff] text-xs p-1" />
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className="text-white text-xs p-1" />
            </a>
            <a className="my-3 block" href="/#">
              Conditions <span className="text-white text-xs p-1" />
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Contact us
            </div>
            <a className="my-3 block" href="/#">
              XXX XXXX, Floor 4 Benin City, NG{" "}
              <span className="text-white text-xs p-1" />
            </a>
            <a className="my-3 block" href="/#">
              contact@company.com <span className="text-teal-600 text-xs p-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#004109] pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-t-white text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2  flex-row flex">
            {[
              {
                name: "X",
                path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
              },
              {
                name: "Facebook",
                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
              {
                name: "YouTube",
                path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              },
              {
                name: "LinkedIn",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
            ].map((icon, i) => (
              <a key={i} href="/#" className="w-6 mx-5">
                <svg
                  className="fill-current cursor-pointer text-white hover:text-gray-100"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>{icon.name}</title>
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
          <div className="my-5 text-white">
            © Copyright {moment().format("YYYY")}. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
