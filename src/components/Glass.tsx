const Glass = ({className = "", style={}}) => {
	return (
		<div style={style} className={`bg-[rgba(255,255,255,0.05)] backdrop-blur-[4.4px] [box-shadow:0_4px_30px_rgba(0,0,0,0.03)] -z-2 position absolute ${className}`}/>
	)
}

export default Glass;