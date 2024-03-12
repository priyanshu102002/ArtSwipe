import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import SideNavTopSection from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const SideNav = () => {
  const {user} = useKindeBrowserClient();
	return (
		<div className="bg-gray-100 h-screen w-72 fixed border-r p-6">
			<SideNavTopSection user={user} />
		</div>
	);
};

export default SideNav;
