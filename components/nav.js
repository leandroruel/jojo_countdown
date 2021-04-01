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
      <NavItem item={{ name: "Watch List", submenu: "", url: "/" }} />
      <NavItem item={{ name: "Hot", submenu: "", url: "/" }} />
      <NavItem item={{ name: "Events", submenu: "", url: "/" }} />
      <NavItem item={{ name: "News", submenu: "", url: "/" }} />
      <NavItem item={{ name: "Discussions", submenu: "", url: "/" }} />
    </nav>
  );
}
