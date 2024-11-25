import { siGreensock } from "simple-icons";

export const GSAPLogo = () => {
	return (
		<svg
			role="img"
			className="w-10 h-10"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill={`#${siGreensock.hex}`}
		>
			<path d={siGreensock.path} />
		</svg>
	);
};
