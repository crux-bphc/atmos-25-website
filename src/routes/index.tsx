import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import HomeSection from "@/components/HomeSection";
import Headliners from "@/components/Headliners";
import EventsSection from "@/components/EventsSection";
import ProshowsSection from "@/components/ProshowsSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";


export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div id="top" className="snap-start flex flex-col w-screen justify-center items-center overflow-x-hidden relative h-[calc(200vh-10rem)]">
          <HomeSection />
        </div>
        <div id="headliners" className="snap-center flex flex-col w-screen justify-start items-center overflow-x-hidden bg-[#F5FF46]">
          <Headliners />
        </div>
        <div id="events" className="snap-start h-screen flex flex-col w-screen justify-start overflow-x-hidden p-0 m-0">
          <EventsSection/>
        </div>
        <div className="snap-start h-screen flex flex-col w-screen justify-start overflow-x-hidden p-0 m-0">
          <ProshowsSection/>
        </div>
        <Gallery/>
        <Footer/>
      </div>
    </>
  );
}
