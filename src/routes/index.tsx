import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import Headliners from "@/components/Headliners";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import Tape from "@/components/Tape";
import ImageCarousel from "@/components/ImageCarousel";
import Sponsors from "@/components/Sponsors";
import ProshowsSection from "@/components/ProshowsSection";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden max-w-screen">
        <HomeSection />
        <AboutSection />
        <Tape />
        <div
          id="headliners"
          className="snap-center flex flex-col w-screen justify-start items-center overflow-x-hidden bg-[#66f2ff]"
        >
          <Headliners />
        </div>
        <EventsSection />
        <ProshowsSection />
        <ImageCarousel />
        <Sponsors />
        <Footer />
      </div>
    </>
  );
}
