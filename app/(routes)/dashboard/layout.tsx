"use client"

import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const convex = useConvex();
	const router = useRouter();
	const { user }: any = useKindeBrowserClient();

	useEffect(() => {
		checkTeams();
	}, [user?.email]);

	const checkTeams = async () => {
		const result = await convex.query(api.teams.getTeams, {
			email: user?.email,
		});

		// If there is no team, redirect to the create team page
		if (!result?.length) {
			router.push("/team/create");
		}
	};
	return <div>{children}</div>;
};

export default DashboardLayout;
