import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import bg_image from "@/assets/home_bg.png"

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col w-screen h-screen justify-start items-center overflow-x-hidden">
			<img src={bg_image} className="w-screen h-screen p-0 m-0 absolute left-0 top-0 -z-1 object-cover object-top" />
			<img className="w-[30rem] mt-48" src={logo} alt="atmos solaris surge" />
		</div>
	);
}
