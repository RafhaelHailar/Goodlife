import {FC} from "react";
import { Button , CircleIcon } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CELL_NUMBERS: [string,string][] = [
    ["Phone","09997163580"],
    ["Fax Number","09997163580"],
    ["Hot Take","09997163580"],
];

const NavigationBar: FC = () => {
    return <div className="z-10 relative top-0">
        <div className="relative flex flex-col items-center">
           <div className="md:block hidden absolute w-full left-0 -z-10 h-32 bg-medium-gray"></div>
           <div className="px-3 md:pl-5 lg:px-0 w-full max-w-screen-xl h-20 bg-medium-gray flex items-center justify-between">
               <div>
                   <img src="./assets/images/logo-1.png" className="w-36" alt="logo"/>
               </div>
               <div className="md:hidden block flex gap-7">
                  <Button  
                    text="Contact Me"
                    tC="text-white"
                    tS="text-lg"
                    bC="border-white"
                    bW="border"
                    padX="px-4"
                    padY="py-1"
                    r="rounded-full"
                  />  
                  <CircleIcon
                     Icon={<FontAwesomeIcon icon={faBars} />}
                     iC="text-white"
                     iS="text-xl"
                     alt="menu"
                     cS="w-10 h-10"
                     cB="border border-white"
                  />
               </div>
               <div className="md:flex hidden gap-12 pr-12">
                   {
                       CELL_NUMBERS.map((cell: [string,string]) => {
                           const [name,number]: [string,string] = cell;
                           return  <div className="flex items-center gap-2" key={name}>
                                        <div>
                                            <CircleIcon 
                                                Icon={<FontAwesomeIcon icon={faPhone} />}
                                                iS="text-md"
                                                iC="text-white"
                                                alt="phone"
                                                cS="p-2"
                                                cC="bg-blue" 
                                            />
                                        </div>
                                        <div className="text-xs text-white">
                                            <div className="font-semibold">
                                                {name}
                                            </div>
                                            <div>
                                                {number} 
                                            </div>
                                        </div>
                                   </div>
                       })
                   }
              </div> 
           </div>
           <div className="text-white md:flex hidden justify-between items-center px-8 h-20 w-full max-w-screen-xl bg-light-blue">
                <div className="gap-10 flex font-semibold">
                    <div className="hover:text-light-black cursor-pointer" >
                        Home
                    </div>
                    <div className="hover:text-light-black cursor-pointer">
                        About
                    </div>
                    <div onMouseOver={() => console.log("uWu")} className="hover:text-light-black cursor-pointer flex gap-1 items-center" >
                        Services
                        <FontAwesomeIcon className="rotate-180" icon={faAngleUp} />
                    </div>
                    <div className="hover:text-light-black cursor-pointer flex items-center gap-1">
                        Solutions
                        <FontAwesomeIcon className="rotate-180" icon={faAngleUp} />
                    </div>
                    <div className="hover:text-light-black cursor-pointer">
                        Contacts
                    </div>
                </div>
                <div>
                    <Button
                        text="Contact Me"
                        tC="text-white"
                        r="rounded-full"
                        bC="border-white"
                        bW="border"
                        padX="px-4"
                        padY="py-1"
                    />
                </div>
           </div>
        </div> 
    </div>
}

export default NavigationBar;
