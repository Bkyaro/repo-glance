import Link from "next/link";
import { ReactNode } from "react";

interface DemoCardProps {
	title: string;
	description: string;
	path: string;
	icon: ReactNode | string;
}

export default function DemoCard({
	title,
	description,
	path,
	icon,
}: DemoCardProps) {
	return (
		<Link href={path}>
			<div className="p-6 h-full border rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
				<div className="text-4xl mb-4">
					{typeof icon === "string" ? icon : icon}
				</div>
				<h2 className="text-xl font-semibold mb-2">{title}</h2>
				<p className="text-gray-600 dark:text-gray-300">
					{description}
				</p>
			</div>
		</Link>
	);
}
