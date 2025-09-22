import { useEffect, useRef, useState } from "react";

interface WarpTextProps {
	className?: string;
}

export default function WarpText({className}: WarpTextProps) {
	const textContainerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const [containerWidth, setContainerWidth] = useState<number>(1);
	const [containerHeight, setContainerHeight] = useState<number>(1);
	const [textWidth, setTextWidth] = useState<number>(1);
	const [textHeight, setTextHeight] = useState<number>(1);

	useEffect(() => {
		const containerElement = textContainerRef.current;
		const textElement = textRef.current;

		if(!containerElement || !textElement){
			return;
		}

		const width = containerElement.clientWidth;
		const height = containerElement.clientHeight;
		setContainerHeight(height);
		setContainerWidth(width);
		
		textElement.style.transform = "scale(1,1)";
		setTextWidth(textElement.clientWidth + 5);
		setTextHeight(textElement.clientHeight - 16);
	}, []);

	return (
		<div
			ref={textContainerRef}
			className={`h-full w-full flex flex-row justify-center basis-1 grow-1 items-center overflow-clip ${className}`}
		>
			<p
				className={`font-[helvetica] text-6xl transition-all duration-300`}
				style={{
					transform: `scale(${containerWidth / textWidth}, ${containerHeight / textHeight})`,
				}}
				ref={textRef}
			>
				EVENTS
			</p>
		</div>
	);
}
