import { Menu, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const menuItems = [
  { label: "Home", href: "#top" },
  { label: "Headliners", href: "#headliners" },
  { label: "Events", href: "#events" },
];

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<>
			<div className="absolute md:right-10 md:top-10 right-5 top-5 z-60 cursor-pointer" onClick={toggleMenu}>
				<Menu className="w-10 h-10 text-black" />
			</div>

			{createPortal(
				<div
					className={
						`fixed inset-0 transition-all duration-200 ease-in-out flex flex-col justify-center items-center gap-6 font-bold md:text-6xl text-5xl
						${isOpen 
							? "z-[9999] opacity-100 visible pointer-events-auto backdrop-blur-lg bg-black/40" 
							: "z-40 opacity-0 invisible pointer-events-none backdrop-blur-none"
						}`
					}
					onClick={toggleMenu}
				>
					{menuItems.map((item) => (
						<div key={item.href} onClick={(e) => e.stopPropagation()} role="button" className="pl-16 pr-12 py-2 flex flex-row justify-center items-center font-[helvetica] cursor-pointer">
							<a href={item.href} onClick={(e) => {
								e.preventDefault();
								setIsOpen(false);
								const element = document.querySelector(item.href);
								if (element) {
									element.scrollIntoView({ behavior: 'smooth' });
								}
							}} className="relative group inline-flex items-center transition-all duration-300 text-white hover:text-[#ff9ab0]">
								{item.label} <ArrowUpRight strokeWidth={3} size={64} strokeLinecap="butt" className="inline-block ml-2" />
							<span className="absolute bottom-[-8px] left-0 w-0 h-[4px] bg-[#f5ff46] transition-all duration-300 group-hover:w-full"></span>
							</a>
						</div>
					))}
				</div>,
			document.body)}

		</>
	);
}
