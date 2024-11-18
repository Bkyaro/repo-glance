import DemoCard from "./components/DemoCard";
import { MaterialTailwindLogo } from "@/assets/logo";

const demos = [
	{
		title: "Material Tailwind",
		description:
			"The Tailwind CSS Components Library For Coding 10x Faster",
		path: "/demos/material-tailwind",
		icon: <MaterialTailwindLogo />,
	},
];

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Repo Glance</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{demos.map((demo) => (
					<DemoCard key={demo.path} {...demo} />
				))}
			</div>
		</div>
	);
}
