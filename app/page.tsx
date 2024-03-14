"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";

export default function Home() {
	const { user } = useKindeBrowserClient();
	useEffect(() => {
	}, [user]);

	// Hydration fallback
	const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

	return (
		<>
			<Header />
			<Hero />
		</>
	);
}
