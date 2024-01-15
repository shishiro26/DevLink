import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#7D80DA] pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let's Code Together!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Connect with us on these platforms; we're here to help you with
              your coding journey!
            </h5>
            <div className="flex mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-black"
                type="button"
              >
                <BsTwitterX className="w-5 h-5 text-black hover:bg-black hover:text-white" />
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:bg-black"
                type="button"
              >
                <FaGithub className="w-6 h-6 text-black hover:bg-black hover:text-white" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-[#FF5964] text-sm font-semibold mb-2 underline">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About DevLink
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Get Involved
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 text-[#FF5964]" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-[#FF5964] font-semibold py-1">
              © <span id="get-current-year">{new Date().getFullYear()}</span>
              <Link href="/" target="_blank" className="text-[#FF5964]">
                {" "}
                DevLink by{" "}
              </Link>
              <Link href="/" className="text-[#FF5964]">
                Shishiro .
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
