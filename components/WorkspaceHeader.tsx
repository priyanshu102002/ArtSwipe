import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

const WorkspaceHeader = () => {
	return (
		<div className="p-3 border-b flex justify-between items-center">
			<div className="flex gap-2 items-center">
				<Image src="/logo.png" alt="logo" height={40} width={40} />
				<h2>FileName</h2>
			</div>
			<Button className="h-8 text-[12px] gap-2 bg-blue-500 hover:bg-blue-700">
				Share <Link className="h-4 w-4" />
			</Button>
		</div>
	);
};

export default WorkspaceHeader;