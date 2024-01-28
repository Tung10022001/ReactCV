import React from "react";

const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const handleModeChange = (event) => {
    const isDark = event.target.checked;

    if (isDark) {
      document.querySelector("#root").classList.add("dark");
    } else {
      document.querySelector("#root").classList.remove("dark");
    }
  };

  const goToSegment = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");

    if (!mobileMenu) {
      return;
    }

    if (mobileMenu.classList.contains("show-menu")) {
      mobileMenu.classList.remove("show-menu");
    } else {
      mobileMenu.classList.add("show-menu");
    }
  };

  return (
    <div className="flex flex-col z-10 fixed w-full bg-white dark:bg-black">
      <div className="flex items-center justify-between h-16 p-4">
        <h3 className="text-orange text-2xl font-bold">My CV</h3>
        <div className="items-center gap-x-8 text-lg hidden lg:flex">
          {menuItems.map((item) => (
            <h4
              key={item}
              className="cursor-pointer font-semibold text-black dark:text-white 
            hover:text-orange dark:hover:text-orange"
              onClick={() => goToSegment(item.toLowerCase())}
            >
              {item}
            </h4>
          ))}
        </div>
        <div className="flex items-center gap-x-8">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleModeChange}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Dark mode
            </span>
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:hidden"
            onClick={() => toggleMenu()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div id="mobile-menu" className="lg:!hidden pt-16 show-menu mobile-menu">
        <div className="flex flex-col items-center gap-y-2 pb-4">
          {menuItems.map((item) => (
            <h4
              key={item}
              className="cursor-pointer font-semibold text-black dark:text-white 
            hover:text-orange dark:hover:text-orange"
              onClick={() => goToSegment(item.toLowerCase())}
            >
              {item}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}
