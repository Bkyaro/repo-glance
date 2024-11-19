"use client";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

type ButtonVariant = "filled" | "gradient" | "outlined" | "text";
type ButtonColor = "blue" | "red" | "green" | "amber" | "purple";
type ButtonSize = "sm" | "md" | "lg";

export default function MaterialTailwindDemo() {
	const [variant, setVariant] = useState<ButtonVariant>("filled");
	const [color, setColor] = useState<ButtonColor>("blue");
	const [size, setSize] = useState<ButtonSize>("sm");

	// 生成当前配置的代码示例
	const generateCode = () => {
		return `import { Button } from "@material-tailwind/react";

export default function ButtonDemo() {
	return (
		<Button
			variant="${variant}"
			color="${color}"
			size="${size}"
		>
			示例按钮
		</Button>
	);
}`;
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Material Tailwind Demo</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="space-y-6">
					{/* 预览区域 */}
					<div className="p-6 border rounded-lg bg-card-background text-card-foreground flex items-center justify-center min-h-[200px]">
						<Button variant={variant} color={color} size={size}>
							示例按钮
						</Button>
					</div>

					{/* 代码预览 */}
					<div className="p-6 border rounded-lg bg-card-background text-card-foreground">
						<h2 className="text-xl font-semibold mb-4">代码示例</h2>
						<pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
							<code>{generateCode()}</code>
						</pre>
					</div>
				</div>

				{/* 控制面板 */}
				<div className="p-6 border rounded-lg bg-card-background text-card-foreground">
					<h2 className="text-xl font-semibold mb-4">按钮配置</h2>

					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium mb-2">
								样式变体
							</label>
							<div className="grid grid-cols-2 gap-2">
								{["filled", "gradient", "outlined", "text"].map(
									(v) => (
										<button
											key={v}
											onClick={() =>
												setVariant(v as ButtonVariant)
											}
											className={`p-2 rounded ${
												variant === v
													? "bg-blue-500 text-white"
													: "bg-card-background text-card-foreground hover:bg-opacity-80"
											}`}
										>
											{v}
										</button>
									)
								)}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								颜色
							</label>
							<div className="grid grid-cols-3 gap-2">
								{[
									"blue",
									"red",
									"green",
									"amber",
									"purple",
								].map((c) => (
									<button
										key={c}
										onClick={() =>
											setColor(c as ButtonColor)
										}
										className={`p-2 rounded ${
											color === c
												? "bg-blue-500 text-white"
												: "bg-card-background text-card-foreground hover:bg-opacity-80"
										}`}
									>
										{c}
									</button>
								))}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								尺寸
							</label>
							<div className="grid grid-cols-3 gap-2">
								{["sm", "md", "lg"].map((s) => (
									<button
										key={s}
										onClick={() => setSize(s as ButtonSize)}
										className={`p-2 rounded ${
											size === s
												? "bg-blue-500 text-white"
												: "bg-card-background text-card-foreground hover:bg-opacity-80"
										}`}
									>
										{s}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
