"use client";
import CodeBlock from "@/app/components/CodeBlock";
import { CardStylesType } from "@material-tailwind/react";
import { useState, useMemo } from "react";
import {
	DefaultCard,
	SimpleCard,
	CardWithLink,
	ProfileCard,
} from "./components";

// 配置选项
const CONFIG_OPTIONS = {
	type: ["Card", "Simple Card", "Card With Link", "Profile Card"],
};

export default function MaterialTailwindDemo() {
	// 卡片默认分类
	const defaultCards = [
		{ type: "Card", node: <DefaultCard /> },
		{ type: "Simple Card", node: <SimpleCard /> },
		{ type: "Card With Link", node: <CardWithLink /> },
		{ type: "Profile Card", node: <ProfileCard /> },
	];

	const [buttonConfig, setButtonConfig] = useState<Partial<CardStylesType>>(
		{}
	);
	const [currentCard, setCurrentCard] = useState(defaultCards[0]);

	const updateCard = (type: string) => {
		const card = defaultCards.find((card) => card.type === type);
		if (card) {
			setCurrentCard(card);
		}
	};

	// 使用 useMemo 缓存生成的代码
	const code = useMemo(() => {
		const buttonProps = Object.entries(buttonConfig)
			.filter(([_, value]) => value !== undefined)
			.map(([key, value]) => {
				if (key !== "type") {
					if (typeof value === "string") {
						return `${key}="${value}"`;
					} else if (typeof value === "boolean") {
						return `${key}={${value}}`;
					}
				}
			});

		return ``;
	}, [buttonConfig]);

	const updateConfig = (key: keyof CardStylesType, value: any) => {
		setButtonConfig((prev) => ({
			...prev,
			[key]: prev[key] === value ? undefined : value,
		}));
	};

	console.log("buttonConfig", buttonConfig);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Material Tailwind Demo</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="space-y-6">
					{/* 预览区域 */}
					<div className="p-6 border rounded-lg bg-card-background text-card-foreground flex items-center justify-center min-h-[200px]">
						{currentCard && currentCard.node}
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
						{Object.entries(CONFIG_OPTIONS).map(([key, values]) => (
							<div key={key}>
								<label className="block text-sm font-medium mb-2 capitalize">
									{key}s
								</label>
								<div className="grid grid-cols-3 gap-2">
									{values.map((value) => (
										<button
											key={`${key}-${value}`}
											onClick={() => {
												updateCard(value as string);

												updateConfig(
													key as keyof CardStylesType,
													value
												);
											}}
											className={`p-2 rounded ${
												String(buttonConfig[key]) ===
												String(value)
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
