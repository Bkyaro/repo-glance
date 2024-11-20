"use client";
import CodeBlock from "@/app/components/CodeBlock";
import { Button, Switch } from "@material-tailwind/react";
import { useState, useMemo } from "react";

type ButtonConfig = {
	variant?: "filled" | "gradient" | "outlined" | "text";
	color?: "blue" | "red" | "green" | "amber" | "purple";
	size?: "sm" | "md" | "lg";
	loading?: boolean;
};

// 配置选项
const CONFIG_OPTIONS = {
	variant: ["filled", "gradient", "outlined", "text"],
	color: ["blue", "red", "green", "amber", "purple"],
	size: ["sm", "md", "lg"],
	loading: [true, false],
} as const;

export default function MaterialTailwindDemo() {
	const [buttonConfig, setButtonConfig] = useState<ButtonConfig>({});

	// 使用 useMemo 缓存生成的代码
	const code = useMemo(() => {
		const buttonProps = Object.entries(buttonConfig)
			.filter(([_, value]) => value !== undefined)
			.map(([key, value]) => `${key}="${value}"`);

		return `import { Button } from "@material-tailwind/react";
	  
export default function Example() {
	return (
		<Button${
			buttonProps.length
				? "\n            " +
				  buttonProps.join("\n            ") +
				  "\n        "
				: ""
		}>
			DEMO BUTTON
		</Button>
	);
}`;
	}, [buttonConfig]);

	const updateConfig = (key: keyof ButtonConfig, value: any) => {
		setButtonConfig((prev) => ({
			...prev,
			[key]: prev[key] === value ? undefined : value,
		}));
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Material Tailwind Demo</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="space-y-6">
					{/* 预览区域 */}
					<div className="p-6 border rounded-lg bg-card-background text-card-foreground flex items-center justify-center min-h-[200px]">
						<Button {...buttonConfig}>DEMO BUTTON</Button>
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
						{(
							Object.entries(CONFIG_OPTIONS) as [
								keyof ButtonConfig,
								string[]
							][]
						).map(([key, values]) => (
							<div key={key}>
								<label className="block text-sm font-medium mb-2 capitalize">
									{key}s
								</label>
								<div className="grid grid-cols-3 gap-2">
									{values.map((value) => (
										<button
											key={value}
											onClick={() =>
												updateConfig(key, value)
											}
											className={`p-2 rounded ${
												buttonConfig[key] === value
													? "bg-blue-500 text-white"
													: "bg-card-background text-card-foreground hover:bg-opacity-80"
											}`}
										>
											{String(value)}
										</button>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
