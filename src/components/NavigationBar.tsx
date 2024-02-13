import { FC, useRef, useEffect} from "react";
import { Button , CircleIcon } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CELL_NUMBERS: [string,string][] = [
    ["Phone","09997163580"],
    ["Fax Number","09997163580"],
    ["Hot Take","09997163580"],
];

type Links = {
    title: string,
    contents: string[]
}

const ServicesLinks: Links[] = [
    {
        title: "Web Design",
        contents: ["Static Design","Dynamic Design","eCommerce Design"]
    },
    {
        title: "Web Hosting",
        contents: ["Cloud Hosting","Reseller Hosting","WordPress Hosting","Colocation"]
    },
    {
        title: "SEO Market",
        contents: ["Static Design","Dynamic Design","eCommerce Design"]
    },
    {
        title: "SSL Certificates",
        contents: ["Static Design","Dynamic Design","eCommerce Design"]
    },
    {
        title: "Branding",
        contents: ["Static Design","Dynamic Design","eCommerce Design"]
    },
]

enum HiddenMenu {
        SOLUTIONS,
        SERVICES
}

const NavigationBar: FC = () => {
    const hiddenSolutionsMenu = useRef<HTMLDivElement>(null);
    const hiddenServicesMenu = useRef<HTMLDivElement>(null);
    const hiddenSolutionsMenuOpener = useRef<HTMLDivElement>(null);
    const hiddenServicesMenuOpener = useRef<HTMLDivElement>(null);

    function handleToggleHiddenMenu(target: HiddenMenu,show: boolean): void {
        let element: HTMLDivElement = hiddenSolutionsMenu.current as HTMLDivElement;

        if (target == HiddenMenu.SERVICES) {
            element = hiddenServicesMenu.current as HTMLDivElement;
        }

        if (show) {
            element.classList.remove("hidden");
            let flash = element.offsetHeight;
            element.classList.remove("opacity-0");
        } else {
            element.classList.add("opacity-0");
            element.classList.add("hidden");
        }

    }

    useEffect(() => {
        window.addEventListener("mousemove", function(event: MouseEvent) {
            const targetElement = event.target;
            const x = event.clientX;
            const y = event.clientY;
            const hiddenSolutions = hiddenSolutionsMenu.current as HTMLDivElement;
            const hiddenMenu = hiddenSolutions.parentElement as HTMLDivElement;
            const hiddenMenuBox = hiddenMenu.getBoundingClientRect();

            if (targetElement == hiddenSolutionsMenuOpener.current) {
                handleToggleHiddenMenu(HiddenMenu.SOLUTIONS,true); 
                handleToggleHiddenMenu(HiddenMenu.SERVICES,false);
            } 

            if (targetElement == hiddenServicesMenuOpener.current) {
                handleToggleHiddenMenu(HiddenMenu.SERVICES,true);
                handleToggleHiddenMenu(HiddenMenu.SOLUTIONS,false);
            }

            if ((x < hiddenMenuBox.left) || (x > hiddenMenuBox.left + hiddenMenuBox.width) ||
                (y < hiddenMenuBox.top - 50) || (y > hiddenMenuBox.top + hiddenMenuBox.height)) {
                handleToggleHiddenMenu(HiddenMenu.SOLUTIONS,false);
                handleToggleHiddenMenu(HiddenMenu.SERVICES,false);
            }
        });
    },[]);

    return <div className="z-10 relative top-0">
        <div className="relative flex flex-col items-center">
           <div className="md:block hidden w-full left-0 -z-10 h-32 bg-medium-gray"></div>
           <div className="absolute w-full flex flex-col items-center">
               <div className="px-3 md:pl-5 lg:px-0 w-full max-w-screen-xl md:h-20 h-[20vw] bg-medium-gray flex items-center justify-between">
                   <div>
                       <img src="./assets/images/logo-1.png" className="w-36" alt="logo"/>
                   </div>
                   <div className="md:hidden block flex gap-[4vw]">
                      <Button  
                        text="Contact Me"
                        tC="text-white"
                        tS="text-[4vw]"
                        bC="border-white "
                        bW="border" padX="px-[4vw]"
                        padY="py-[0.9vw]"
                        r="rounded-full"
                      />  
                      <CircleIcon
                         Icon={<FontAwesomeIcon icon={faBars} />}
                         iC="text-white"
                         iS="text-[5vw]"
                         alt="menu"
                         cS="w-[10vw] h-[10vw]"
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
                        <div ref={hiddenServicesMenuOpener} className="hover:text-light-black cursor-pointer flex gap-1 items-center" >
                            Services
                            <FontAwesomeIcon className="rotate-180" icon={faAngleUp} />
                        </div>
                        <div ref={hiddenSolutionsMenuOpener} className="hover:text-light-black cursor-pointer flex items-center gap-1">
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
        <div className="h-[32vw] absolute w-full hidden md:block">
            <div ref={hiddenSolutionsMenu} className="opacity-0 transition duration-500 bg-white  hidden flex justify-between  w-full h-full absolute -z-10">
                <div className="flex justify-end mt-[4vw] basis-9/12">
                   <div className="flex flex-wrap basis-10/12 gap-x-[5vw] relative items-start">
                        {
                            ServicesLinks.map((links: Links) => {
                                const { title, contents } = links;
                                return <div className="w-[10vw]">
                                    <h3 className="font-bold text-[1.2vw] mb-[0.2vw]">{title}</h3>
                                    <ul key={title}>
                                       {
                                           contents.map((content: string) => {
                                               return <li key={content}>
                                                   <a href={"http://" + content + ".com"} target="_blank" className="text-[1vw] text-gray">
                                                        {content}
                                                   </a>
                                               </li>
                                           })
                                       }
                                    </ul> 
                                </div>
                            })
                        }
                   </div>
                </div>
                <div className="cut-to-right">
                    <img src="./assets/images/solutions-bd.avif" className="h-full darken-bg" />
                </div>
            </div>
            <div ref={hiddenServicesMenu} className="opacity-0 transition duration-500 h-full bg-white hidden flex justify-between  w-full absolute -z-10">
                <div className="cut-to-left">
                    <img src="./assets/images/services-bd.avif" className="h-full darken-bg" />
                </div>
                <div className="flex justify-center mt-[4vw] basis-9/12">
                   <div className="flex flex-wrap basis-10/12 gap-x-[5vw] relative">
                        {
                            ServicesLinks.map((links: Links) => {
                                const { title, contents } = links;
                                return <div className="w-[10vw]">
                                    <h3 className="font-bold text-[1.2vw] mb-[0.2vw]">{title}</h3>
                                    <ul key={title}>
                                       {
                                           contents.map((content: string) => {
                                               return <li key={content}>
                                                   <a href={"http://" + content + ".com"} target="_blank" className="text-[1vw] text-gray">
                                                        {content}
                                                   </a>
                                               </li>
                                           })
                                       }
                                    </ul> 
                                </div>
                            })
                        }
                   </div>
                </div>
                
            </div>
        </div>
    </div>
}

export default NavigationBar;
