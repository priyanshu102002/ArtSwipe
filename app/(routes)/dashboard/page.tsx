"use client";

import { api } from "@/convex/_generated/api";
import {
	LogoutLink,
	useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useMutation, useQuery } from "convex/react";
import React, { useEffect } from "react";

const DashboardPage = () => {
	const { user }: any = useKindeBrowserClient();
	const getUser = useQuery(api.user.getUser, { email: user?.email });

	// Creating the new User
	const createUser = useMutation(api.user.createUser);

	useEffect(() => {
		if (user) {
			if (getUser === undefined) {
				createUser({
					name: user.given_name,
					email: user.email,
					image: user.picture,
				}).then((res) => {
					console.log(res);
				});
			}
      console.log(user)
		}
	}, [user]);

	return (
		<div>
			DashboardPage
			<LogoutLink>logout</LogoutLink>
		</div>
	);
};

export default DashboardPage;
