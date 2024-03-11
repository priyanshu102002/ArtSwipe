"use client";

import { Button } from "@/components/ui/button";
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
	console.log("user : ", user);

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
		console.log("result : ", result);
		if (result.length === 0) {
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
		<div>
			DashboardPage
			<Button>
				<LogoutLink>logout</LogoutLink>
			</Button>
		</div>
	);
};

export default DashboardPage;
