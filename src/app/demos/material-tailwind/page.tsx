"use client";
import DemoCard from "@/app/components/DemoCard";

const components = [
	{
		title: "Button",
		description: "Button component with multiple styles and states",
		path: "/demos/material-tailwind/button",
		icon: "🔘",
	},
	{
		title: "Alert",
		description: "Alert component for displaying important information",
		path: "/demos/material-tailwind/alert",
		icon: "⚠️",
	},
	{
		title: "Card",
		description: "Card component for information display",
		path: "/demos/material-tailwind/card",
		icon: "🗂️",
	},
];

export default function MaterialTailwindDemo() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">
				Material Tailwind Components
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{components.map((component) => (
					<DemoCard key={component.path} {...component} />
				))}
			</div>
		</div>
	);
}
