export default function Footer() {
	return (
		<>
			<div className="roboto-medium mx-auto flex max-w-[100rem] flex-col items-center py-8 px-8 pt-4 md:items-center md:justify-between md:px-6 lg:flex-row lg:justify-between lg:px-8">
				<div>
					<a href="#" className="text-3xl text-white">
						Goreeva-Discussion
					</a>
				</div>
				<div className="roboto-light lg:text-md my-6 space-x-6 text-sm lg:my-0 lg:space-x-12">
					<a href="#">Terms of service</a>
					<a
						rel="noreferrer"
						href="https://www.linkedin.com/company/goreeva/"
						target="_blank">
						Careers
					</a>
					<a href="#">Legal Notice</a>
				</div>
				<div className="flex space-x-12">
					<a
						rel="noreferrer"
						href="https://www.linkedin.com/company/goreeva/"
						target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#fff"
							viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
					</a>
				</div>
			</div>
		</>
	);
}
