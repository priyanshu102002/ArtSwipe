"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const CreatePage = () => {
	const [teamName, setTeamName] = useState("");

  const handleSubmit = () => {
    console.log(teamName)
  }
  
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
			<Button onClick={handleSubmit} className="bg-blue-500 mt-4" disabled={!(teamName.length>0 )}>Create Team</Button>
		</div>
	);
};

export default CreatePage;
