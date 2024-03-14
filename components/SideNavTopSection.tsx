import {
	ChevronDown,
	LayoutGridIcon,
	LogOut,
	Settings,
	Users,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from "./ui/separator";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export interface TEAM {
	createdBy: String;
	teamName: String;
	_id: String;
}

const SideNavTopSection = ({ user, setActiveTeamInfo }: any) => {
	const menu = [
		{
			id: 1,
			name: "Create Team",
			path: "/team/create",
			icon: Users,
		},
		{
			id: 2,
			name: "Settings",
			path: "",
			icon: Settings,
		},
	];

	const router = useRouter();
	const convex = useConvex();
	const [teamList, setTeamList] = useState<TEAM[]>();
	const [activeTeam, setActiveTeam] = useState<TEAM>();

	// Whenever the user is present get the team list
	useEffect(() => {
		user && getTeamList();
	}, [user]);

	useEffect(() => {
		activeTeam ? setActiveTeamInfo(activeTeam) : null;
	}, [activeTeam]);

	// fetching the team list data from backend
	const getTeamList = async () => {
		const result = await convex.query(api.teams.getTeams, {
			email: user?.email,
		});
		setTeamList(result); // setting the team list in the state
		setActiveTeam(result[0]); // default active team will be 1st one
	};

	const onMenuClick = (item: any) => {
		if (item.path) {
			router.push(item.path);
		}
	};

	return (
		<div>
			<Popover>
				<PopoverTrigger>
					<div className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
						<Image
							src={"/logo.png"}
							alt="logo image"
							width={100}
							height={100}
							priority={true}
						/>
						<h2 className=" flex gap-2 items-center">
							{activeTeam?.teamName} <ChevronDown />{" "}
						</h2>
					</div>
				</PopoverTrigger>
				<PopoverContent className="ml-7 p-4">
					<div>
						{teamList?.map((item, index) => (
							<h2
								className={`p-2 hover:bg-blue-500 rounded-md hover:text-white mb-1 cursor-pointer ${
									activeTeam?._id === item._id &&
									"bg-blue-500 text-white"
								}`}
								onClick={() => setActiveTeam(item)}
								key={index}
							>
								{item.teamName}
							</h2>
						))}
					</div>
					<Separator className="mt-2" />
					<div>
						{menu.map((item, index) => (
							<h2
								key={index}
								className="flex items-center cursor-pointer gap-2 text-sm hover:bg-gray-100 p-2 rounded-lg"
								onClick={() => onMenuClick(item)}
							>
								<item.icon className="h-4 w-4" />
								{item.name}
							</h2>
						))}
						<LogoutLink>
							<h2 className="flex items-center cursor-pointer gap-2 text-sm hover:bg-gray-100 p-2 rounded-lg">
								<LogOut className="h-4 w-4" />
								Logout
							</h2>
						</LogoutLink>
					</div>
					<Separator className="mt-2" />
					{/* user information */}
					{user && (
						<div className="mt-2 flex gap-2 items-center">
							<Image
								src={user?.picture || " "}
								alt="user image"
								width={30}
								height={30}
								className="rounded-full"
							/>
							<div>
								<h2 className="text-[14px] font-bold">
									{user.given_name} {user.family_name}
								</h2>
								<h2 className="text-[12px] text-gray-500">
									{user.email}
								</h2>
							</div>
						</div>
					)}
				</PopoverContent>
			</Popover>
			{/* All Button */}
			<Button
				variant="outline"
				className="w-full justify-start gap-2 font-bold mt-8 bg-gray-100"
			>
				<LayoutGridIcon className="h-5 w-5" />
				All files
			</Button>
		</div>
	);
};

export default SideNavTopSection;
