"use client";

import Canvas from "@/components/Canvas";
import Editor from "@/components/Editor";
import WorkspaceHeader from "@/components/WorkspaceHeader";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import React, { useEffect, useState } from "react";

const WorkspacePage = ({ params }: any) => {
	const [triggerSave, setTriggerSave] = useState(false);
	const [fileData, setFileData] = useState<any>();

	// Fetching file information(data of the document)
	const convex = useConvex();

	useEffect(() => {
		console.log("fileId", params.fileid);
		params.fileid && getFilesData();
	}, []);

	const getFilesData = async () => {
		const result = await convex.query(api.files.getFileById, {
			_id: params.fileid,
		});
		setFileData(result);
	};

	return (
		<div>
			<WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />
			<div className="grid grid-cols-1 md:grid-cols-2 h-screen">
				{/* Document */}
				<div>
					<Editor
						onSaveTrigger={triggerSave}
						fileId={params.fileid}
						fileData={fileData}
					/>
				</div>

				{/* Canvas */}
				<div className="border-l">
					<Canvas />
				</div>
			</div>
		</div>
	);
};

export default WorkspacePage;
