import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Link, Save } from "lucide-react";

const WorkspaceHeader = ({onSave}:any) => {

	return (
		<div className="p-3 border-b flex justify-between items-center">
			<div className="flex gap-2 items-center">
				<Image src={"/logo.png"} alt="logo" height={40} width={40} priority={true} />
				<h2>FileName</h2>
			</div>
			<div className="flex gap-4">
				<Button
					className="h-8 text-[12px] gap-2 bg-yellow-500 hover:bg-yellow-700"
					onClick={() => onSave()}
				>
					Save <Save className="h-4 w-4" />
				</Button>
				<Button className="h-8 text-[12px] gap-2 bg-blue-500 hover:bg-blue-700">
					Share <Link className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
};

export default WorkspaceHeader;
