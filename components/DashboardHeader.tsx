import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Search, Send } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const DashboardHeader = () => {
	const { user }: any = useKindeBrowserClient();
	return (
		<div className="flex justify-end w-full items-center gap-2">
			<div className="flex gap-2 items-center p-1 rounded-md border">
				<Search className="h-4 w-4" />
				<input
					placeholder="Search"
					type="text"
					className="hover:outline-none focus:outline-none"
				/>
			</div>

			<div>
				<Image
					src={user?.picture}
					width={30}
					height={30}
					alt="user image"
					className="rounded-full"
				/>
			</div>

			<Button className="gap-2 flex h-8 hover:bg-blue-700 bg-blue-500 text-sm">
				<Send className="h-4 w-4" /> Invite
			</Button>
		</div>
	);
};

export default DashboardHeader;
