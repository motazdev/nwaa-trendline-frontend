import logo from "@/components/svgs/logo.svg";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import LanuageChangeButton from "./LanuageChangeButton";
import NavbarItems from "./NavbarItems";
import NotificationComponent from "./NotificationComponent";
import ShoppingCartIcon from "./svgs/ShoppingCartIcon";
import UserIcon from "./svgs/UserIcon";
const Navbar = () => {
  return (
    <div className="bg-[#E8EDF2] z-50 flex flex-row justify-between items-center  py-2">
      <div className="left flex flex-row lg:gap-16 md:gap-6 items-center ">
        <div className="relative h-16 w-16 p-0 m-0">
          <Image src={logo} fill alt="logo" className="object-cover p-0 m-0" />
        </div>
        <NavbarItems />
      </div>
      <div className="md:hidden flex">
        <MenuIcon />
      </div>
      <div className="hidden z-50 flex-row lg:gap-6 md:gap-5 items-center md:flex">
        <ShoppingCartIcon />
        <NotificationComponent />
        <LanuageChangeButton />
        <Select>
          <SelectTrigger className="bg-transparent p-0 border-none">
            <SelectValue placeholder={<UserIcon />} />
          </SelectTrigger>
          <SelectContent className="relative border-gray-300 shadow-none before:absolute before:rounded-lg before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-white"></SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Navbar;
