import { Transition } from "@headlessui/react";
import { useState } from "react";

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
          onMouseEnter={toggleMenuClass}
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
        <Transition
          show={isActive}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {item.submenu.map((menu) => {
                  return (
                    <a
                      key={menu.id}
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {menu.icon}
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {menu.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {menu.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Transition>
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
