"use client";

import { FileListContext } from "@/app/_Context/FilesListContext";
import SideNav from "@/components/SideNav";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const convex = useConvex();
	const router = useRouter();
	const { user }: any = useKindeBrowserClient();
	const [fileList_, setFileList_] = useState();

	useEffect(() => {
		user && checkTeams();
	}, [user]);

	// Checking in the database that the team is exist or not
	const checkTeams = async () => {
		const result = await convex.query(api.teams.getTeams, {
			email: user?.email,
		});

		// If there is no team, redirect to the create team page
		if (!result?.length) {
			router.push("/team/create");
		}
	};
	return (
		<div>
			<FileListContext.Provider value={{ fileList_, setFileList_ }}>
				<div className="grid grid-cols-4 ">
					<div className="h-screen w-72 fixed">
						<SideNav />
					</div>
					<div className="col-span-4 ml-72">{children}</div>
				</div>
			</FileListContext.Provider>
		</div>
	);
};

export default DashboardLayout;
