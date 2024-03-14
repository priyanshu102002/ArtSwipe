"use client";

import { Archive, Flag, Github } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import Constant from "@/app/_Constant/Constant";
import PricingSection from "./PricingSection";

const SideNavBottomSection = ({ onFileCreate, totalFiles }: any) => {
	const menuList = [
		{
			id: 1,
			name: "Getting Started",
			icon: Flag,
			path: "",
		},
		{
			id: 2,
			name: "Github",
			icon: Github,
			path: "",
		},
		{
			id: 3,
			name: "Archived",
			icon: Archive,
			path: "",
		},
	];

	const [fileInput, setFileInput] = useState("");
	return (
		<div>
			{menuList.map((menu) => (
				<h2
					key={menu.id}
					className="flex gap-2 p-1 text-[14px] hover:bg-gray-100 rounded-md cursor-pointer"
				>
					<menu.icon className="h-4 w-4" />
					{menu.name}
				</h2>
			))}

			<Dialog>
				<DialogTrigger className="w-full" asChild>
					<Button className="w-full bg-blue-500 hover:bg-blue-700 justify-start mt-3">
						New File
					</Button>
				</DialogTrigger>
				{totalFiles < Constant.MAX_FREE_FILE ? (
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Create New file</DialogTitle>
							<DialogDescription>
								<Input
									className="mt-3"
									placeholder="Enter File Name"
									onChange={(e) =>
										setFileInput(e.target.value)
									}
								/>
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<DialogClose asChild>
								<Button
									type="button"
									className="bg-blue-500 hover:bg-blue-700"
									disabled={
										!(fileInput && fileInput.length > 2)
									}
									onClick={() => onFileCreate(fileInput)}
								>
									Create
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				) : (
					<PricingSection />
				)}
			</Dialog>

			<Progress className="mt-5 " value={(totalFiles / 5) * 100} />

			<h2 className="text-[12px] mt-3">
				<strong>{totalFiles}</strong> out of{" "}
				<strong>{Constant.MAX_FREE_FILE}</strong> files is used
			</h2>
			<h2 className="text-[12px]">
				Upgrade your plan for unlimited access.
			</h2>
		</div>
	);
};

export default SideNavBottomSection;
