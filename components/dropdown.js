import { Transition, Menu } from "@headlessui/react";

export default function Dropdown({ dropdown, active }) {
  return (
    <Transition
      show={active}
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
            {dropdown.map((item) => {
              return (
                <a
                  key={item.id}
                  href="#"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  {item.icon}
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Transition>
  );
}
