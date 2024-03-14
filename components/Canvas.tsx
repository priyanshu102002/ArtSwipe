import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

const Canvas = () => {
	return (
		<div style={{ height: "100vh" }}>
			<Excalidraw
				onChange={(excalidrawElements, appState, files) =>
					console.log(excalidrawElements)
				}
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
		</div>
	);
};

export default Canvas;
