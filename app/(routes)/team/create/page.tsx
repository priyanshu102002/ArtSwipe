"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const CreatePage = () => {
	const [teamName, setTeamName] = useState("");
	const { user }: any = useKindeBrowserClient();

	// Calling the function to create the team so that it can be saved in the database
	const createTeam = useMutation(api.teams.createTeam);
	const router = useRouter();

	const createNewTeam = () => {
		createTeam({
			teamName,
			createdBy: user?.given_name,
		}).then((resp) => {
			console.log(resp);
			if (resp) {
				// toast message that you created a new team successfully
				toast("Team Created Successfully");
				router.push("/dashboard");
			}
		});
	};

	return (
		<div className=" p-6">
			<h2 className="mb-4">Create Page to be designed</h2>
			<div>
				<label>Enter your Team name</label>
				<Input
					type="text"
					placeholder="Team Name"
					onChange={(e) => setTeamName(e.target.value)}
				/>
			</div>
			<Button
				onClick={() => createNewTeam()}
				className="bg-blue-500 mt-4"
				disabled={!(teamName.length > 0)}
			>
				Create Team
			</Button>
		</div>
	);
};

export default CreatePage;
