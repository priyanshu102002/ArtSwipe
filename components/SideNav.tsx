import React from "react";
import SideNavTopSection from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";

const SideNav = () => {
	const { user } = useKindeBrowserClient();

	return (
		<div className=" h-screen w-72 fixed border-r p-6 flex flex-col">
			<div className="flex-1">
				<SideNavTopSection user={user} />
			</div>
			<div>
				<SideNavBottomSection />
			</div>
		</div>
	);
};

export default SideNav;
