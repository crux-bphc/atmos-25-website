import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="absolute right-10 top-10" onClick={toggleMenu}>
				<Menu className="w-10 h-10 text-black" />
			</div>

			<div
				className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-md
					transition-all duration-200 ease-in-out
					flex flex-col justify-center items-center gap-6
					font-bold text-6xl
					${isOpen ? "opacity-100 backdrop-blur-md visible" : "opacity-0 backdrop-blur-none invisible"}`}
				onClick={toggleMenu}
			>
				<div className="pl-16 pr-12 py-2 hover:bg-black flex flex-row justify-center items-center font-[helvetica]">
					Event 1 <ArrowUpRight strokeWidth={3} size={68} strokeLinecap="butt" className="inline-block ml-2" />
				</div>
				<div className="pl-16 pr-12 py-2 hover:bg-black flex flex-row justify-center items-center font-[helvetica]">
					Event 2 <ArrowUpRight strokeWidth={3} size={68} strokeLinecap="butt" className="inline-block ml-2" />
				</div>
				<div className="pl-16 pr-12 py-2 hover:bg-black flex flex-row justify-center items-center font-[helvetica]">
					Event 3 <ArrowUpRight strokeWidth={3} size={68} strokeLinecap="butt" className="inline-block ml-2" />
				</div>
				<div className="pl-16 pr-12 py-2 hover:bg-black flex flex-row justify-center items-center font-[helvetica]">
					Event 4 <ArrowUpRight strokeWidth={3} size={68} strokeLinecap="butt" className="inline-block ml-2" />
				</div>
			</div>
		</>
	);
}
