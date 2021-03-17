import { useState } from "react";
import Dropdown from "./dropdown";

export default function NavItem({ item }) {
  const [isActive, setActive] = useState(false);

  const toggleMenuClass = () => {
    setActive(!isActive);
  };

  if (item.submenu.length) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={toggleMenuClass}
          className={`group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 
          ${isActive ? "focus:ring-indigo-900" : "focus:ring-indigo-500"}
          `}
        >
          <span>{item.name}</span>
          <svg
            className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Dropdown dropdown={item.submenu} active={isActive} />
      </div>
    );
  }

  return (
    <a
      href={item.url}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {item.name}
    </a>
  );
}
