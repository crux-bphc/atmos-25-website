import logo from "@/assets/logo.png"

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <img className="w-[22rem] md:w-[28rem] m-auto invert" src={logo} alt="atmos solaris surge" />
    </div>
  );
}
