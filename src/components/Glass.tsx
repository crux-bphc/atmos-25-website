import { motion } from "motion/react";

interface GlassProps {
	speed: number;
	className?: string;
	style: Record<string, string>;
}

const Glass = ({speed, className = "", style={}} : GlassProps) => {
	return (
		<motion.div style={style} initial={{y:-500}} animate={{y:"100vh"}} transition={{duration: 50/speed, repeat: Infinity}} className={`bg-[rgba(255,255,255,0.05)] backdrop-blur-[4.4px] [box-shadow:0_4px_30px_rgba(0,0,0,0.03)] z-0 absolute ${className}`}/>
	)
}

export default Glass