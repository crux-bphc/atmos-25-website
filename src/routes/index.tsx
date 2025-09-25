import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import bg_image from "@/assets/home_bg.png";
import Tape from "@/components/Tape";
import Nav from "@/components/Nav";
import Headliners from "@/components/Headliners";
import EventsSection from "@/components/EventsSection";
import ProshowsSection from "@/components/ProshowsSection";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="flex flex-col w-screen h-[calc(100vh-10rem)] justify-center items-center overflow-x-hidden relative">
            <img
              src={bg_image}
              className="h-full md:w-full p-0 m-0 absolute left-0 top-0 -z-1 object-cover object-top"
            />
            <img className="w-[22rem] md:w-[28rem] m-auto" src={logo} alt="atmos solaris surge" />
            <Tape />
          </div>
          <div className="flex flex-col w-screen justify-start items-center overflow-x-hidden bg-[#F5FF46]">
            <Headliners />
          </div>
          <div className="flex flex-col w-screen h-[200svh] justify-start overflow-x-hidden p-0 m-0">
            <EventsSection/>
          </div>
          <div className="flex flex-col w-screen h-[200svh] justify-start overflow-x-hidden p-0 m-0">
            <ProshowsSection/>
          </div>
        </div>
      </div>
    </>
  );
}
