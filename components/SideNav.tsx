import React, { useState } from "react";
import SideNavTopSection, { TEAM } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const SideNav = () => {
	const { user }: any = useKindeBrowserClient();
	const createFile = useMutation(api.files.createFile);
	const [activeTeam, setActiveTeam] = useState<TEAM>();

	const onFileCreate = (fileName: string) => {
		createFile({
			fileName,
			teamId: activeTeam?._id,
			createdBy: user?.email,
			archived: false,
			document: "",
			whiteboard: "",
		})
			.then((res) => {
				toast("File Created successfull");
			})
			.catch((e) => {
				toast("Error while creating file");
			});
	};

	return (
		<div className=" h-screen w-72 fixed border-r p-6 flex flex-col">
			<div className="flex-1">
				<SideNavTopSection
					user={user}
					setActiveTeamInfo={(activeTeam: TEAM) =>
						setActiveTeam(activeTeam)
					}
				/>
			</div>
			<div>
				<SideNavBottomSection onFileCreate={onFileCreate} />
			</div>
		</div>
	);
};

export default SideNav;
