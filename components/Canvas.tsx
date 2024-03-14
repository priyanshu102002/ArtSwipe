import { api } from "@/convex/_generated/api";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";

const Canvas = ({ onSaveTrigger, fileId, fileData }: any) => {
	const [whiteBoardData, setWhiteBoardData] = useState<any>();

	const updateWhiteboard = useMutation(api.files.updateWhiteboard);
	useEffect(() => {
		onSaveTrigger && saveWhiteboard();
	}, [onSaveTrigger]);

	const saveWhiteboard = () => {
		updateWhiteboard({
			_id: fileId,
			whiteboard: JSON.stringify(whiteBoardData),
		}).then((resp) => console.log("resp", resp));
	};

	return (
		<div style={{ height: "100vh" }}>
			{fileData && (
				<Excalidraw
					onChange={(excalidrawElements, appState, files) =>
						setWhiteBoardData(excalidrawElements)
					}
					initialData={{
						elements:
							fileData?.whiteboard &&
							JSON.parse(fileData?.whiteboard),
					}}
					theme="dark"
					UIOptions={{
						canvasActions: {
							saveToActiveFile: false,
							export: false,
							toggleTheme: false,
							loadScene: false,
							saveAsImage: false,
						},
					}}
				>
					<MainMenu>
						<MainMenu.DefaultItems.ChangeCanvasBackground />
						<MainMenu.DefaultItems.ClearCanvas />
						<MainMenu.DefaultItems.SaveAsImage />
					</MainMenu>
					<WelcomeScreen>
						<WelcomeScreen.Hints.MenuHint />
						<WelcomeScreen.Hints.ToolbarHint />
						<WelcomeScreen.Hints.HelpHint />
					</WelcomeScreen>
				</Excalidraw>
			)}
		</div>
	);
};

export default Canvas;
