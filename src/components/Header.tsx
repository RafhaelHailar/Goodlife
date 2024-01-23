import {FC} from "react";
import { CircleIcon, Button } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
    return <div className="relative lg:-mt-12 h-full">
       <div className="md:h-auto h-full">
            <div className="md:h-5/6 h-4/6">
                <img className="md:hidden w-screen h-full block" alt="hero-mobile" src="./assets/images/mobile-header-bg.png" />
            </div>
            <img className="md:block hidden h-full w-full" alt="hero-desktop" src="./assets/images/desktop-header-bg.jpg" />
       </div>
       <div className="absolute sm:w-auto w-11/12 lg:top-32 md:top-5 top-14 left-1/2 -translate-x-2/4 flex flex-col items-center xs:gap-10 gap-5">
            <div className="text-white" >
                <div className="py-1 inline-block font-semibold text-sm" style={{background: "linear-gradient(to right,rgb(31,209,245),rgba(31,209,245,0)"}}>
                    Solutions for Success
                </div>
            </div>
            <div className="text-center text-white xs:text-6xl text-4xl font-bold">
                Strategic Solutions for Human Life Sucess
            </div>
            <div className="md:text-base text-sm text-white text-center font-semibold md:w-auto w-80">
                Lorem ipsium salon salsalani papayoni reporepo  loopi loopi <br className="lg:block hidden"/>  asdad  sds s da soo asdl s
            </div>
            <div className="flex items-center gap-16">
                <Button 
                    text="Discover More"
                    tS="text-sm"
                    tC="text-black"
                    tW="font-bold"
                    bgC="bg-light-blue"
                    r="rounded-full"
                    padX="px-5"
                    padY="py-2"
                />
                <div className="flex text-white gap-4">
                    <CircleIcon
                       Icon={<FontAwesomeIcon icon={faPhone} />} 
                       alt="phone"
                       cS="p-1"
                       cB="border border-white"
                    />
                    Call Me!
                </div>
            </div>
       </div>
    </div>
}

export default Header;
