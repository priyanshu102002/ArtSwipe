import { FileListContext } from "@/app/_Context/FilesListContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Archive, MoreHorizontalIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FileList = () => {
	const { fileList_, setFileList_ } = useContext(FileListContext);
	const [fileList, setFileList] = useState<any>();

	const { user }: any = useKindeBrowserClient();

	useEffect(() => {
		fileList_ && setFileList(fileList_);
	}, [fileList_]);

	return (
		<div className="mt-10">
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
					<thead className="ltr:text-left rtl:text-right">
						<tr>
							<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								FileName
							</td>
							<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Created At
							</td>
							<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Edited At
							</td>
							<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Author
							</td>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-200">
						{fileList &&
							fileList.map((file: FILE, index: number) => (
								<tr key={index} className="odd:bg-gray-50">
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{file.fileName}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{moment(file._creationTime).format(
											"DD-MM-YYYY"
										)}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{moment(file._creationTime).format(
											"DD-MM-YYYY"
										)}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										<Image
											className="rounded-full"
											src={user.picture}
											width={30}
											height={30}
											alt="user image"
										/>
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										<DropdownMenu>
											<DropdownMenuTrigger>
												<MoreHorizontalIcon />
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuItem>
													<Archive className="mr-2 h-4 w-4" />{" "}
													Archive
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FileList;
