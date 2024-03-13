import { Archive, Flag, Github } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const SideNavBottomSection = () => {
	const menuList = [
		{
			id: 1,
			name: "Getting Started",
			icon: Flag,
			path: "",
		},
		{
			id: 2,
			name: "Github",
			icon: Github,
			path: "",
		},
		{
			id: 3,
			name: "Archived",
			icon: Archive,
			path: "",
		},
	];
	return <div>
    {menuList.map((menu) => (
      <h2 key={menu.id} className="flex gap-2 p-1 text-[14px] hover:bg-gray-100 rounded-md cursor-pointer"><menu.icon className="h-4 w-4" />{menu.name}</h2>
    ))}

    <Button className="w-full bg-blue-500 hover:bg-blue-700 justify-start mt-3">New File</Button>

    <Progress className="mt-5 " value={33} />

    <h2 className="text-[12px] mt-3"><strong>1</strong> out of <strong>5</strong> files is used</h2>
    <h2 className="text-[12px]">Upgrade your plan for unlimited access.</h2>

  </div>;
};

export default SideNavBottomSection;
