import {FC} from "react";
import { CircleIcon, Button } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
    return <div className="relative lg:-mt-12 h-full ">
       <div className="md:h-auto h-full ">
            <div className="md:h-4/6 h-4/6 ">
                <img className="md:hidden w-screen h-full block" alt="hero-mobile" src="./assets/images/mobile-header-bg.png" />
            </div>
            <img className="md:block hidden h-full w-full" alt="hero-desktop" src="./assets/images/desktop-header-bg.jpg" />
       </div>
       <div className="absolute sm:w-auto w-11/12 lg:top-44 md:top-12 top-20 left-1/2 -translate-x-2/4 flex flex-col items-center xs:gap-10 gap-5">
            <div className="text-white" >
                <div className="py-1 inline-block font-semibold text-sm" style={{background: "linear-gradient(to right,rgb(31,209,245),rgba(31,209,245,0)"}}>
                    Solutions for Success
                </div>
            </div>
            <div className="text-center text-white xs:text-8xl lg:text-6xl text-4xl font-bold">
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
       <div className="flex w-5/6 justify-center items-center text-center text-white relative left-1/2 -translate-x-1/2 -mt-20 mb-20 ">
            <div className="py-10 px-14 bg-dark-gray border-r-2 border-gray">
               <div className="font-bold text-4xl">656</div>
               <div className="font-semibold text-xl">Project Done</div>
               <div className="text-sm text-gray text-light-white">Left Untouched</div>
            </div>
            <div className="py-10 px-14 bg-dark-gray border-r-2 border-gray" >
               <div className="font-bold text-4xl">1,232</div>
               <div className="font-semibold text-xl">Target Project</div>
               <div className="text-sm text-gray text-light-white">Just Planned</div>
            </div>
            <div className="py-10 px-14 bg-dark-gray border-r-2 border-gray">
               <div className="font-bold text-4xl">328</div>
               <div className="font-semibold text-xl">Days Passed</div>
               <div className="text-sm text-gray text-light-white">When Was It</div>
            </div>
            <div className="py-10 px-14 bg-dark-gray">
               <div className="font-bold text-4xl">199</div>
               <div className="font-semibold text-xl">Opposite 991</div>
               <div className="text-sm text-gray text-light-white">Opposite Day</div>
            </div>
       </div>
    </div>
}

export default Header;
