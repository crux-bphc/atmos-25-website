import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import bg_image from "@/assets/home_bg.png";
import Tape from "@/components/Tape";
import Nav from "@/components/Nav";
import Headliners from "@/components/Headliners";
import EventsSection from "@/components/EventsSection";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
      <img
        src={bg_image}
        className="w-screen h-screen p-0 m-0 absolute left-0 top-0 -z-1 object-cover object-top"
      />
      <div className="flex flex-col w-screen h-[calc(100vh-10rem)] justify-center items-center overflow-x-hidden">
        <img className="w-[22rem] md:w-[28rem] m-auto" src={logo} alt="atmos solaris surge" />
        <Tape />
      </div>
      <div className="flex flex-col w-screen justify-start items-center overflow-x-hidden bg-[#F5FF46]">
        <Headliners />
      </div>
      <div className="flex flex-col w-screen h-screen justify-start overflow-x-hidden p-0 m-0">
        <EventsSection/>
      </div>
      <div className="spacer h-[300vh] w-screen"></div>
      <div className="flex flex-col w-screen h-screen justify-start overflow-x-hidden p-0 m-0">
        <EventsSection/>
      </div>
      <div className="spacer h-[300vh] w-screen"></div>
      <div className="flex flex-col w-screen h-screen justify-start items-start overflow-hidden">
        Slide4
      </div>
      
      <div className="flex flex-col w-screen h-screen justify-start items-start overflow-hidden">
        Slide4
      </div>
      
      <div className="flex flex-col w-screen h-screen justify-start items-start overflow-hidden">
        Slide4
      </div>
    </>
  );
}
