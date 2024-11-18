import Link from "next/link";

export default function DemoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen">
			<nav className=" dark:bg-gray-800 opacity-80 py-4">
				<div className="container mx-auto px-4">
					<Link
						href="/"
						className="text-blue-500 hover:text-blue-700 transition-colors"
					>
						Back
					</Link>
				</div>
			</nav>
			<main className="container mx-auto px-4 py-8">{children}</main>
		</div>
	);
}
