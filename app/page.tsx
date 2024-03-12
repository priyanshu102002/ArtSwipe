"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {
	const { user } = useKindeBrowserClient();
	useEffect(() => {
	}, [user]);
	return (
		<>
			<Header />
			<Hero />
		</>
	);
}
