import Editor from "@/components/Editor";
import WorkspaceHeader from "@/components/WorkspaceHeader";
import React from "react";

const WorkspacePage = () => {
	return (
		<div>
			<WorkspaceHeader />
			<div className="grid grid-cols-1 md:grid-cols-2 h-screen">
				{/* Document */}
				<div>
					<Editor />
				</div>

				{/* Canvas */}
				<div className="bg-blue-400">Canvas</div>
			</div>
		</div>
	);
};

export default WorkspacePage;
