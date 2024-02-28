"use client";
import Image from "next/image";
import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiMusic2Fill } from "react-icons/ri";
import Link from "next/link";
import { SidebarLink } from "@/types/sidebarLinks";

const sidebarLinks: SidebarLink[] = [
  {
    id: 1,
    linkName: "Home",
    linkUrl: "/",
    linkIcon: <RiHomeSmile2Line size={30} />,
  },
  {
    id: 2,
    linkName: "Trends",
    linkUrl: "/trends",
    linkIcon: <FaArrowTrendUp size={30} />,
  },
  {
    id: 3,
    linkName: "Library",
    linkUrl: "/library",
    linkIcon: <RiMusic2Fill size={30} />,
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex absolute p-5 left-0 top-0 z-9999 lg:static lg:translate-x-0 h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear">
      <div className="flex items-center">
        <Image
          src="/icons/music.svg"
          width="100"
          height="100"
          alt="logo"
          className="flex w-8.5"
        />
        <h3 className="flex ml-3 text-lg">Doba</h3>
      </div>
      <div className="flex flex-col mt-10 no-scrollbar overflow-y-auto duration-300 ease-linear">
        {sidebarLinks.map((item) => (
          <Link
            href={item.linkUrl}
            className="flex items-center w-full gap-2.5 mt-8"
            key={item.id}
          >
            <i>{item.linkIcon}</i>
            <p>{item.linkName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
