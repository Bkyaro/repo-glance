"use client";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import { useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeBlockProps {
	code: string;
	language?: string;
}

export default function CodeBlock({
	code,
	language = "typescript",
}: CodeBlockProps) {
	// 保存上一次的代码行，用于比较变化
	const prevLinesRef = useRef<string[]>([]);

	const highlightedCode = useMemo(() => {
		const highlighted = Prism.highlight(
			code,
			Prism.languages[language],
			language
		);

		const lines = highlighted.split("\n");

		// 计算每行的变化状态
		const linesWithChangeState = lines.map((line, index) => {
			const hasChanged = prevLinesRef.current[index] !== line;
			return {
				html: line || " ",
				key: `${index}-${line.slice(0, 10)}`,
				changed: hasChanged,
			};
		});

		// 更新上一次的代码行
		prevLinesRef.current = lines;

		return linesWithChangeState;
	}, [code, language]);

	return (
		<div className="relative">
			<pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
				<code className={`language-${language}`}>
					{highlightedCode.map(({ html, key, changed }) => (
						<motion.div
							key={key}
							initial={changed ? { opacity: 0, y: -20 } : false}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2 }}
							className="block"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					))}
				</code>
			</pre>
		</div>
	);
}
