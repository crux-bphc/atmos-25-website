import logo from "@/assets/logo.svg";
import bg_image from "@/assets/home_bg.png";
import Tape from "@/components/Tape";

export default function HomeSection() {
    return (
        <>
            <img
                src={bg_image}
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
                style={{objectPosition: '50% 0%'}}
                alt="background image"
            />
            
            <div className="grid grid-rows-[50fr_auto_4rem_auto_1fr] h-screen relative z-20 place-items-center">
                <div></div>
                <img className="w-[24rem] md:w-[32rem]" src={logo} alt="atmos solaris surge" />
                <div></div>
                <Tape />
                <div></div>
            </div>
            
            <div className="flex flex-col justify-center items-center min-h-screen p-8 relative z-10 w-full">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden">
                    <span className="text-[23vw] font-extrabold text-black/5 select-none whitespace-nowrap leading-none" style={{letterSpacing: '1vw'}}>LARGEST</span>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="text-2xl md:text-3xl font-normal text-black">
                                <span className="text-4xl md:text-6xl font-bold">10,000</span> students footfall
                            </div> 
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl md:text-3xl font-bold text-black">Best Proshows</div>
                            <div className="w-20 h-1 bg-black"></div>
                        </div>
                        <div className="text-lg md:text-xl text-black">Top Workshops</div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                        Introducing the largest Technical Fest of South India
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}