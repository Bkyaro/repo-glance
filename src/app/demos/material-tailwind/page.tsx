"use client";
import CodeBlock from "@/app/components/CodeBlock";
import { Button } from "@material-tailwind/react";
import { useState, useMemo, useEffect } from "react";

type ButtonVariant = "filled" | "gradient" | "outlined" | "text";
type ButtonColor = "blue" | "red" | "green" | "amber" | "purple";
type ButtonSize = "sm" | "md" | "lg";

export default function MaterialTailwindDemo() {
	const [variant, setVariant] = useState<ButtonVariant>("filled");
	const [color, setColor] = useState<ButtonColor>("blue");
	const [size, setSize] = useState<ButtonSize>("sm");

	// 使用 useMemo 缓存生成的代码
	const code = useMemo(() => {
		const buttonProps = [
			`variant="${variant}"`,
			`color="${color}"`,
			`size="${size}"`,
		];

		return `import { Button } from "@material-tailwind/react";
	  
export default function Example() {
	return (
		<Button
			${buttonProps.join("\n      		")}
		>
			示例按钮
		</Button>
	);
}`;
	}, [variant, color, size]); // 依赖于所有配置项

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
						<CodeBlock code={code} />
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
