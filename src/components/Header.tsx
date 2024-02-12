import {FC} from "react";
import { CircleIcon, Button } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

type Number = {
    amount: string,
    name: string,
    subname: string
}

const Numbers: Number[] = [
    {
        amount: "656",
        name: "Project Done",
        subname: "Left Untouched"
    },
    {
        amount: "1,232",
        name: "Target Project",
        subname: "Just Planned"
    },
    {
        amount: "328",
        name: "Days Passed",
        subname: "When Was It"
    },
    {
        amount: "199",
        name: "Opposite 991",
        subname: "Opposite Day"
    },
];

const Header: FC = () => {
    return <div className="relative lg:-mt-12 h-full ">
       <div className="">
            <div className="md:hidden h-[130vw] block">
                <img className="w-screen h-full " alt="hero-mobile" src="./assets/images/mobile-header-bg.png" />
            </div>
            <img className="md:block hidden h-full w-full" alt="hero-desktop" src="./assets/images/desktop-header-bg.jpg" />
       </div>
       <div className="absolute md:w-auto w-full md:top-[10vw] top-[30vw] left-1/2 -translate-x-2/4 flex flex-col items-center xs:gap-10 gap-5">
            <div className="text-white" >
                <div className="py-1 inline-block font-semibold md:text-[1vw] text-[3vw]" style={{background: "linear-gradient(to right,rgb(31,209,245),rgba(31,209,245,0)"}}>
                    Solutions for Success
                </div>
            </div>
            <div className="text-center text-white md:text-[4vw] text-[8.4vw] font-bold">
                Strategic Solutions for Human Life Sucess
            </div>
            <div className="md:text-[1.2vw] text-[3.5vw] text-white text-center font-semibold md:w-auto w-[70vw]">
                Lorem ipsium salon salsalani papayoni reporepo  loopi loopi <br className="lg:block hidden"/>  asdad  sds s da soo asdl s
            </div>
            <div className="flex items-center gap-[3vw]">
                <Button 
                    text="Discover More"
                   tS="md:text-[1vw] text-[3vw]"
                    tC="text-black"
                    tW="font-bold"
                    bgC="bg-light-blue"
                    r="rounded-full"
                    padX="md:px-[1vw] px-[2vw]"
                    padY="md:py-[0.5vw] py-[1.5vw]"
                />
                <div className="flex text-white gap-[1vw] md:text-[1vw] text-[3vw] items-center">
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
       <div className="flex md:h-[13vw] h-[30vw] w-[90vw] md:w-auto flex-wrap justify-center items-center text-center text-white relative left-1/2 -translate-x-1/2 -translate-y-3/4 md:-translate-y-1/2 ">
            {
                Numbers.map((number: Number) => {
                    const { amount, name, subname } = number;
                    return <div className="flex justify-center md:w-[20vw] w-[45vw] items-center h-full bg-dark-gray border-r-2 border-gray">
                               <div>
                                   <div className="font-bold md:text-[2.8vw] text-[7vw]">{amount}</div>
                                   <div className="font-semibold md:text-[1.4vw] text-[3vw]">{name}</div>
                                   <div className="md:text-[1vw] text-[2.5vw] text-gray text-light-white">{subname}</div>
                               </div>
                           </div>
                })
            }
        </div>
    </div>
}

export default Header;
