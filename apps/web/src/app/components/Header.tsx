"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import { menuConfig } from "../data/menuConfig";
import  logo from "../images/edtechshowerlogo.png";


export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md dark:bg-gray-800">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        {/* <Link href="/" className="text-xl font-bold" >
          EdTech Shower
        </Link> */}
        
<Link href="/" className="flex items-center gap-2">
  <Image
    src={logo}
    alt="EdTech Shower Logo"
    width={80}
    height={80}
    className="rounded"
  />
  <span className="font-bold text-lg">EdTech Shower</span>
</Link>


        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {menuConfig.map((menu) => (
 <div
  key={menu.key}
  className="relative group"
  onMouseEnter={() => setOpenMenu(menu.key)}
  onMouseLeave={() => setOpenMenu(null)}
>
  {/* Menu Label */}
  <span className="cursor-pointer hover:text-blue-400">
    {menu.title}
  </span>

  {/* Submenu */}
  {openMenu === menu.key && (
    <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48 dark:bg-gray-700 dark:text-white">
      {menu.items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )}
</div>

          ))}
        </nav>

        {/* Search + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBar />
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4">
          {menuConfig.map((menu) => (
            <div key={menu.key} className="py-2">
              <p className="font-semibold">{menu.title}</p>
              <div className="ml-4 mt-1">
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-1 text-gray-300 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}