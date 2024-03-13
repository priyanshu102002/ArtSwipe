"use client";

import DashboardHeader from "@/components/DashboardHeader";
import FileList from "@/components/FileList";
import { api } from "@/convex/_generated/api";
import {
	LogoutLink,
	useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import React, { useEffect } from "react";

const DashboardPage = () => {
	const convex = useConvex();
	const { user }: any = useKindeBrowserClient();

	// Creating the new User api pont
	const createUser = useMutation(api.user.createUser);

	useEffect(() => {
		if (user) {
			checkUser();
		}
	}, [user]);

	const checkUser = async () => {
		const result = await convex.query(api.user.getUser, {
			email: user?.email,
		});
		if (!result?.length) {
			createUser({
				name: user.given_name,
				email: user.email,
				image: user.picture,
			}).then((res) => {
				console.log(res);
			});
		}
	};

	return (
		<div className="p-8">
			<DashboardHeader />
			<FileList />
		</div>
	);
};

export default DashboardPage;
