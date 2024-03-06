import React from "react";

const Hero = () => {
	return (
		<section className="bg-black">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen lg:items-center">
				<div className="mx-auto max-w-xl text-center">
					<h1 className="text-3xl text-white font-extrabold sm:text-5xl">
						Understand User Flow.
						<strong className="font-extrabold text-blue-500 sm:block">
							{" "}
							Increase Conversion.{" "}
						</strong>
					</h1>

					<p className="mt-4 sm:text-xl/relaxed text-slate-300">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a
							className="block w-full rounded px-12 py-3 text-sm font-medium bg-white text-black shadow hover:text-gray-700 focus:outline-none focus:ring active:text-black sm:w-auto"
							href="#"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
