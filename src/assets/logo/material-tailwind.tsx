import Image from "next/image";
import materialTailwindLogo from "./images/material-tailwind.png";

export function MaterialTailwindLogo() {
	return (
		<Image
			src={materialTailwindLogo}
			alt="Material Tailwind Logo"
			width={40}
			height={40}
		/>
	);
}
