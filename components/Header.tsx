import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="bg-black dark:bg-gray-900">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<Link href={"/"}>
					<h1 className="text-white font-bold">Logo</h1>
				</Link>

				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Global" className="hidden md:block">
						<ul className="flex items-center gap-6 text-sm">
							<li>
								<Link
									className="text-gray-200 transition hover:text-gray-400 dark:text-white dark:hover:text-white/75"
									href="#"
								>
									About
								</Link>
							</li>

							<li>
								<a
									className="text-gray-200 transition hover:text-gray-400 dark:text-white dark:hover:text-white/75"
									href="#"
								>
									Careers
								</a>
							</li>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<div className="sm:flex sm:gap-4">
							<div className="block rounded-md  px-5 py-2.5 text-sm font-medium text-white transition ">
								<LoginLink>Login</LoginLink>
							</div>

							<div className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-gray-950 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
								<RegisterLink>Register</RegisterLink>
							</div>
						</div>

						<button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
							<span className="sr-only">Toggle menu</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
