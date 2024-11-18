"use client";
import { Button } from "@material-tailwind/react";

export default function MaterialTailwindDemo() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Material Tailwind Demo</h1>

			<div className="grid gap-6">
				{/* 这里放置具体的demo内容 */}
				<div className="p-6 border rounded-lg">
					<h2 className="text-xl font-semibold mb-4">Button Demo</h2>
					<div className="space-x-4">
						<div className="flex w-max gap-4">
							<Button variant="filled" placeholder="">
								filled
							</Button>
							<Button variant="gradient" placeholder="">
								gradient
							</Button>
							<Button variant="outlined" placeholder="">
								outlined
							</Button>
							<Button variant="text" placeholder="">
								text
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
