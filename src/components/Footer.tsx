import { Facebook, Instagram, Share2, Mail, Phone, MapPin } from "lucide-react";
import logo_white from "@/assets/logo_white.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 md:px-20 py-10 w-screen max-w-screen box-border overflow-visible snap-end">
      <div className="border-t border-gray-600 mb-10"></div>

      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <img
            src={logo_white}
            alt="atmos logo"
            className="h-14 md:h-20 object-contain mb-4 md:mb-0 max-w-full"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <a href="#events" className="hover:underline">Events</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#sponsors" className="hover:underline">Sponsors</a>
          {/* <a href="#faq" className="hover:underline">FAQ</a> */}
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <Phone size={18} />
            <span>+91 99490 20295</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <span>atmos@hyderabad.bits-pilani.ac.in</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={18} />
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="https://www.instagram.com/atmos_bitshyd/"><Facebook size={20} /></a>
          <a href="https://www.instagram.com/atmos_bitshyd/"><Instagram size={20} /></a>
          <a href="https://atmos-bits.com/"><Share2 size={20} /></a>
        </div>

        <div className="flex flex-col items-center md:items-start text-gray-300">
          <span>Made by CRUx & DoTA</span>
        </div>

        <div className="text-gray-300">
          © Atmos 2025 All rights reserved.
        </div>
      </div>
    </footer>
  );
}
