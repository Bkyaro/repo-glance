"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { routes } from "../routes/routes";
import { useEffect, useState } from "react";

export default function DemoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [backPath, setBackPath] = useState<string>(routes.root);

	const getBackPath = () => {
		const pathSplitter = backPath?.split("/").filter(Boolean);
		return pathSplitter?.length > 1
			? `${routes.demos}/${pathSplitter[0]}`
			: routes.root;
	};

	useEffect(() => {
		setBackPath(pathname.replace("/demos", ""));
	}, [pathname]);
	return (
		<div className="min-h-screen">
			<nav className=" dark:bg-gray-800 opacity-80 py-4">
				<div className="container mx-auto px-4">
					<Link
						href={`${getBackPath()}`}
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
