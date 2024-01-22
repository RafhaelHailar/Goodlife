import {FC} from "react";
import { Button , CircleIcon } from "./";

const CELL_NUMBERS: [string,string][] = [
    ["Phone","09997163580"],
    ["Fax Number","09997163580"],
    ["Hot Take","09997163580"],
];

const NavigationBar: FC = () => {
    return <div className="z-10 sticky top-0">
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
                     image="./assets/icons/menu.png"
                     alt="menu"
                     iW="w-7"
                     cS="p-1"
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
                                                image="./assets/icons/phone.png" 
                                                alt="phone"
                                                iW="w-5"
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
           <div className="text-white md:flex hidden justify-between items-center px-8 h-24 w-full max-w-screen-xl bg-light-blue">
                <div className="gap-10 flex font-semibold">
                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Services
                    </div>
                    <div>
                        Solutions
                    </div>
                    <div>
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
