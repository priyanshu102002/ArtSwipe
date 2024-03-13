"use client";

import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import RawTool from "@editorjs/raw";
// @ts-ignore
import Checklist from "@editorjs/checklist";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Quote from "@editorjs/quote";

import { useEffect, useRef, useState } from "react";

const rawDocument = {
	time: 1656954000000,
	blocks: [
		{
			data: {
				text: "Document Name",
				level: 2,
			},
			id: "123",
			type: "header",
		},
		{
			data: {
				level: 4,
			},
			id: "1234",
			type: "header",
		},
	],
	version: "2.8.1",
};

const Editor = () => {
	const [document, setDocument] = useState(rawDocument);

	useEffect(() => {
		initEditor();
	}, []);

	const ref = useRef<EditorJS>();

	const initEditor = () => {
		const editor = new EditorJS({
			tools: {
				header: {
					class: Header,
					shortcut: "CMD+SHIFT+H",
					config: {
						placeholder: "Enter a header",
					},
				},
				checklist: {
					class: Checklist,
					inlineToolbar: true,
					shortcut: "CMD+SHIFT+C",
				},
				list: {
					class: List,
					inlineToolbar: true,
					shortcut: "CMD+SHIFT+L",
					config: {
						defaultStyle: "unordered",
					},
				},
				raw: {
					class: RawTool,
					shortcut: "CMD+SHIFT+R",
				},
				quote: {
					class: Quote,
					shortcut: "CMD+SHIFT+O",
				},
			},
			holder: "editorjs",
			data: document,
		});

		ref.current = editor;
	};

	return (
		<div>
			<div id="editorjs" className="px-4"></div>
		</div>
	);
};

export default Editor;
