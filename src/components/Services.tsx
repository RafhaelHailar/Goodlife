import { FC, useState, MouseEvent } from "react";
import { faFire, faShieldHalved, faPowerOff, faPersonRunning, faHandsHoldingChild, faWrench, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CardItem = {
    icon: IconDefinition,
    title: string,
    semiTitle: string
}

const Cards: CardItem[] = [
    {
        icon: faFire,
        title: "Burning Passion",
        semiTitle: "Boom! Fire Everywhere"
    },
    {
        icon: faShieldHalved,
        title: "Protection",
        semiTitle: "To avoid unwanted children"
    },
    {
        icon: faPowerOff,
        title: "Turn Off",
        semiTitle: "Open your pc and play"
    },
    {
        icon: faPersonRunning,
        title: "Speed Walking",
        semiTitle: "Eyy Im speed walking"
    },
    {
        icon: faHandsHoldingChild,
        title: "Care for others",
        semiTitle: "Compass is your nature"
    },
    {
        icon: faWrench,
        title: "Build Cool",
        semiTitle: "Use this tool and hit your head"
    }
];

const cardClass = "flex flex-col gap-2 md:w-[19vw] md:h-[14vw] w-[70vw] h-[45vw] rounded-xl justify-center items-center";

let currCardIdx = 0;

const Services: FC = () => {
    const [currCard,setCurrCard] = useState(0);
    
    return <div className="py-[7vw] bg-black md:px-[5vw] flex items-center">
        <div className="flex flex-col gap-[2vw]">
            <div className="flex gap-[2vw] md:px-0 px-[10vw]">
                <div className="md:w-[24vw] mb-[5vw] md:mb-0">
                    <div className="text-blue md:text-[3.5vw] text-[9vw] font-semibold">
                        Explore the world and see
                    </div>
                    <div className="md:text-[1.2vw] text-[4vw] text-light-white">
                        Lorem ipsum dolor sit amet, cons ect etur adipiscing elit. Curabitur telquam,
                    </div>
                </div>
                {
                    Cards.slice(0,3).map((card: CardItem) => {
                         const {icon,title,semiTitle} = card;
                         return <div className={cardClass + " bg-white hidden md:flex"}>
                            <FontAwesomeIcon icon={icon} className="text-[5vw]"/>
                            <div className="text-center ">
                                <div className="font-bold text-[1.3vw] ">{title}</div>
                                <div className="font-semibold -mt-1 text-light-gray text-[1vw]">{semiTitle}</div>
                            </div>
                         </div>   
                     })
                }
            </div>
            <div className="flex md:hidden h-[45vw] w-screen overflow-hidden ">
                {
                   Cards.map((card: CardItem,index: number) => {
                      const {icon,title,semiTitle} = card; 
                      let translateX = "translate-x-[100vw]";
                      let scale = "scale-[0.9]";
                      let opacity = "opacity-40";

                      let currCardRight = (index + 1) % Cards.length;
                      let currCardLeft = index - 1;
                      
                      if (index == 0) currCardLeft = Cards.length - 1;
                      

                      switch (currCard) {
                         case index:
                            translateX = "translate-x-[15vw]"; 
                            scale = "";
                            opacity = "";
                            break;
                         case currCardRight:
                            translateX = "translate-x-[85vw]";
                            break;
                         case currCardLeft:
                            translateX = "-translate-x-[55vw]"
                            break;
                      } 

                      return <div className={`${cardClass} bg-white absolute ${translateX} ${scale} ${opacity}`}>
                                <FontAwesomeIcon icon={icon} className="md:text-[5vw] text-[13vw]"/>
                                <div className="text-center ">
                                    <div className="font-bold md:text-[1.3vw] text-[6vw] ">{title}</div>
                                    <div className="font-semibold -mt-1 text-light-gray md:text-[1vw] text-[3vw]">{semiTitle}</div>
                                </div>
                             </div>  
                   })
                }
            </div>
            <div className="flex md:ml-[5vw] gap-[2vw] justify-center">
                {
                    Cards.slice(3,Cards.length).map((card: CardItem) => {
                         const {icon,title,semiTitle} = card;
                         return <div className={cardClass + " bg-white md:flex hidden"}>
                            <FontAwesomeIcon icon={icon} className="text-[5vw]"/>
                            <div className="text-center ">
                                <div className="font-bold text-[1.3vw] ">{title}</div>
                                <div className="font-semibold -mt-1 text-light-gray text-[1vw]">{semiTitle}</div>
                            </div>
                         </div>   
                     })
                }

                <div className={cardClass + " bg-blue"}>
                    <div className="text-white self-center ">
                        <div className="font-bold md:text-[1.3vw] text-[6vw]">997+ Things</div>
                        <div className="font-semibold -mt-1 text-light-white md:text-[1vw] text-[4vw]">Boom! Fire Everywhere</div>
                    </div>
                    <div className="md:-ml-[8vw] -ml-[38vw]">
                        <FontAwesomeIcon icon={faArrowRightLong} className="text-black md:text-[2vw] text-[5vw]"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default Services;
