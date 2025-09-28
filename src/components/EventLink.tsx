
interface EventLinkProps {
	label: string,
	href: string,
	className: string
}

export default function EventLink({label, href, className} : EventLinkProps) {
  return (
    <a 
      href={href} 
      className={`relative flex flex-row items-center gap-6 p-4 pl-6 rounded-full border border-5 border-black overflow-hidden before:transiton-translate before:duration-200 before:ease-in before:-z-1 before:absolute before:inset-0 before:bg-black before:block before:-translate-x-full hover:before:translate-x-0 group ${className}`}
			>
			<span className=" font-[400]! font-[Rubik] text-4xl md:text-6xl text-black group-hover:text-white transition-color duration-200 ease-in-out">{label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 91" fill="none" className="w-18 group-hover:invert transition-all duration-200">
        <g clip-path="url(#clip0_126_4)">
        <path d="M47.3404 0.899902H44.8566C20.1646 0.899902 0.147705 20.9168 0.147705 45.6088C0.147705 70.3008 20.1646 90.3177 44.8566 90.3177H47.3404C72.0324 90.3177 92.0493 70.3008 92.0493 45.6088C92.0493 20.9168 72.0324 0.899902 47.3404 0.899902Z" fill="black"/>
        <path d="M41.231 29.2219V33.3569L54.4678 33.3581L31.1956 59.8602L33.7617 62.7863L57.0355 36.28V51.3564H60.6667V29.2219H41.231Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_126_4">
        <rect width="93" height="91" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </a>
  );
}