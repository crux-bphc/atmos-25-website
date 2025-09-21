
interface EventLinkProps {
	label: string,
	href: string,
	className: string
}

export default function EventLink({label, href, className} : EventLinkProps) {
  return (
    <a 
      href={href} 
      className={`inline-block px-4 py-2 font-bold font-[helvetica] text-[#F5FF46] bg-black text-5xl md:text-6xl overflow-hidden group ${className}`}
			>
			{label}
    </a>
  );
}