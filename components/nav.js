import { useState } from "react";
import { Transition } from "@headlessui/react";
import NavItem from "./navItem";

export default function Nav({ nav }) {
  const [isActive, setActive] = useState(false);

  const toggleMenuClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="hidden md:flex space-x-10">
      <NavItem item={{ name: "Solutions", submenu: "", url: "/" }} />
      <NavItem
        item={{
          name: "More",
          submenu: [{ id: 212, name: "Help center", icon: "" }],
          url: "/",
        }}
      />
    </nav>
  );
}
