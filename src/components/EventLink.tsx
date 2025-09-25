
interface EventLinkProps {
	label: string,
	href: string,
	className: string
}

export default function EventLink({label, href, className} : EventLinkProps) {
  return (
    <a 
      href={href} 
      className={`inline-block px-6 py-4 font-bold font-[helvetica] bg-black text-4xl md:text-7xl overflow-hidden group ${className}`}
			>
			{label}
    </a>
  );
}