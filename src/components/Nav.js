import React, { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav fixed w-full z-10">
      <nav className="container mx-auto mt-0">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-between px-4 py-4 lg:py-0">
            <div className="lg:w-52">
              <a href="" className="font-semibold uppercase text-white">
                STT Restu Rahayu
              </a>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block text-white focus:outline-none lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    className={!isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                  <path
                    className={isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Nav List */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex w-full flex-col py-4 lg:flex-row lg:py-0 font-semibold `}>
            <div className="ms-auto flex flex-col lg:flex-row">
              <Link
                to="profile"
                smooth={true}
                className="cursor-pointer block px-4 py-2 lg:py-5 text-gradient">
                Profil
              </Link>
              <Link
                to="profile"
                smooth={true}
                className="cursor-pointer block px-4 py-2 lg:py-5 text-gradient">
                Tentang Kami
              </Link>
              <Link
                to="profile"
                smooth={true}
                className="cursor-pointer block px-4 py-2 lg:py-5 text-gradient">
                Galery
              </Link>
              <Link
                to="profile"
                smooth={true}
                className="cursor-pointer block px-4 py-2 lg:py-5 text-gradient">
                Kontak
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
