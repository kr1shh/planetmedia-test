import { Facebook, Twitter, Youtube } from "lucide-react";
import footerLogo from "../assets/logoForBlack.png";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center py-7 px-4 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <img src={footerLogo} alt="logo" className="w-32" />
            <div className="w-1 h-4 bg-accent rounded-3xl"></div>
            <p className="text-white font-extralight text-sm">
              Copyright {new Date().getFullYear()} PlanetMedia
            </p>
          </div>
          <div className="flex gap-5 text-white/20">
            <Facebook className="w-5"/>
            <Twitter className="w-5"/>
            <Youtube className="w-5"/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
