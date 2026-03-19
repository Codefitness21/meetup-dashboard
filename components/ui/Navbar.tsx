import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/KeLLab.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar from "@/public/img/avatar.png";
import DigitalClock from "@/components/clock/DigitalClock";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-chart-3 dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="KeLLab Logo" width={70} />
      </Link>
     
      <div className="flex flex-col self-center justify-right text-1xl"> <DigitalClock /></div>
      <Avatar>
        <Image src={avatar} alt="avatar" width={40} className="rounded-3xl" />
        {/* <AvatarFallback className="text-black">KH</AvatarFallback> */}
      </Avatar>
    </div>
    
  );
};

export default Navbar;
