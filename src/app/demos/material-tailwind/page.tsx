"use client";
import CodeBlock from "@/app/components/CodeBlock";
import { Button, Switch } from "@material-tailwind/react";
import { useState, useMemo, useEffect } from "react";

type ButtonVariant = "filled" | "gradient" | "outlined" | "text" | "";
type ButtonColor = "blue" | "red" | "green" | "amber" | "purple" | "";
type ButtonSize = "sm" | "md" | "lg" | "";
type ButtonLoading = "true" | "false" | "";

export default function MaterialTailwindDemo() {
	// 配置项
	const configVariants = {
		key: "variant",
		value: ["filled", "gradient", "outlined", "text"],
	};
	const configColors = {
		key: "color",
		value: ["blue", "red", "green", "amber", "purple"],
	};
	const configSizes = {
		key: "size",
		value: ["sm", "md", "lg"],
	};
	const configLoading = {
		key: "loading",
		value: ["true", "false"],
	};

	const [variant, setVariant] = useState<ButtonVariant>("");
	const [color, setColor] = useState<ButtonColor>("");
	const [size, setSize] = useState<ButtonSize>("");
	const [loading, setLoading] = useState<boolean>();
	// 使用 useMemo 缓存生成的代码
	const code = useMemo(() => {
		const buttonProps = [
			variant ? `${configVariants.key}="${variant}"` : "",
			color ? `${configColors.key}="${color}"` : "",
			size ? `${configSizes.key}="${size}"` : "",
			loading ? `${configLoading.key}="${loading}"` : "",
		].filter(Boolean);

		return `import { Button } from "@material-tailwind/react";
	  
export default function Example() {
	return (
		<Button${
			buttonProps.length
				? "\n      		" + buttonProps.join("\n      		") + "\n      	"
				: ""
		}>
			DEMO BUTTON
		</Button>
	);
}`;
	}, [variant, color, size, loading]); // 依赖于所有配置项

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Material Tailwind Demo</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="space-y-6">
					{/* 预览区域 */}
					<div className="p-6 border rounded-lg bg-card-background text-card-foreground flex items-center justify-center min-h-[200px]">
						<Button
							variant={variant}
							color={color}
							size={size}
							loading={loading}
						>
							DEMO BUTTON
						</Button>
					</div>

					{/* 代码预览 */}
					<div className="p-6 border rounded-lg bg-card-background text-card-foreground">
						<h2 className="text-xl font-semibold mb-4">
							Code Preview
						</h2>
						<CodeBlock code={code} />
					</div>
				</div>

				{/* 控制面板 */}
				<div className="p-6 border rounded-lg bg-card-background text-card-foreground">
					<h2 className="text-xl font-semibold mb-4">Configs</h2>

					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium mb-2">
								Variants
							</label>
							<div className="grid grid-cols-2 gap-2">
								{configVariants.value.map((v) => (
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
								))}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Colors
							</label>
							<div className="grid grid-cols-3 gap-2">
								{configColors.value.map((currentColor) => (
									<button
										key={currentColor}
										onClick={() =>
											setColor(
												currentColor as ButtonColor
											)
										}
										className={`p-2 rounded ${
											color === currentColor
												? "bg-blue-500 text-white"
												: "bg-card-background text-card-foreground hover:bg-opacity-80"
										}`}
									>
										{currentColor}
									</button>
								))}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Sizes
							</label>
							<div className="grid grid-cols-3 gap-2">
								{configSizes.value.map((currentSize) => (
									<button
										key={currentSize}
										onClick={() =>
											setSize(currentSize as ButtonSize)
										}
										className={`p-2 rounded ${
											size === currentSize
												? "bg-blue-500 text-white"
												: "bg-card-background text-card-foreground hover:bg-opacity-80"
										}`}
									>
										{currentSize}
									</button>
								))}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Loading
							</label>
							<div className="flex items-center space-x-2">
								<Switch
									checked={loading}
									onChange={() => {
										setLoading(!loading);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
