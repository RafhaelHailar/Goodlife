import { FC, useState, useEffect, useRef } from "react";
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

//mouse events properties
let dragging = false;
let allowDragging = true;
let startX: number | null = null;

const Services: FC = () => {
    const [currCard,setCurrCard] = useState(0);
    const [_,rerender] = useState(false);
    const swiperContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
       let container:HTMLDivElement = swiperContainerRef.current as HTMLDivElement;
       const cards: HTMLCollection = container.children;

       function getTranslateXValue(classes: string): number {
           const classX = classes.match(/(-)?translate-x-\[(\d*)vw\]/) as Array<string>;
           let translateX: number | undefined;

           if (classX.length > 2) {
              translateX = Number(classX[2]) / 100 * window.innerWidth;
              
              if (classX[1] == "-") translateX = -translateX;
           }

           return translateX as number;
       }

       container.addEventListener("touchstart",function(event: TouchEvent): void {
           if (!allowDragging) return;

           const x = event.touches[0].clientX;
           dragging = true;
           startX = x;
           console.log(startX);
       });

       container.addEventListener("touchend",function(): void {
           dragging = false;
            
           for (let i = 0;i < cards.length;i++) {
              const card = cards[i] as HTMLDivElement;

              card.style.transition = "1s all ease-out"; 
              let _ = card.style.transition;
              card.style.transform = "";
           }
       });

       container.addEventListener("touchmove",function(event: TouchEvent): void {
           if (!dragging) return;

           const x = event.touches[0].clientX;
           const deltaX = x - (startX as number);
           let updateCurrCard = 0;

           const offsetX = 200;
            
           console.log(deltaX);
           if (deltaX <= -offsetX) updateCurrCard = -1; 
           else if (deltaX >= offsetX) updateCurrCard = 1;

           if (updateCurrCard !== 0) {
              setCurrCard(current => {
                  let next = current + updateCurrCard;
                  next = next % Cards.length;
                  return next >= 0 ? next : Cards.length - 1;
              });
              startX = null;
              dragging = false;

              const newEvent = new Event("touchend");
              this.dispatchEvent(newEvent);
              allowDragging = false;
              setTimeout(() => allowDragging = true,1000); // wait one second to drag again.
              return;
           }
        
           for (let i = 0;i < cards.length;i++) {
               const card = cards[i] as HTMLDivElement;
               const translateX = getTranslateXValue(card.className);
               const scaleX = card.getBoundingClientRect().width / card.offsetWidth;
               
               card.style.transform = `translateX(${translateX + deltaX}px) scale(${scaleX}) `;
           }
       });
    },[]);
    
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
            <div ref={swiperContainerRef} className="flex md:hidden h-[45vw] w-screen relative overflow-hidden ">
                {
                   Cards.map((card: CardItem,index: number) => {
                      const {icon,title,semiTitle} = card; 
                      let translateX = "translate-x-[155vw]";
                      let scale = "scale-[0.9]";
                      let opacity = "opacity-40";

                      const currCardRight = (index + 1) % Cards.length;
                      const currCardResRight = (index + 2) % Cards.length;
                      let currCardLeft = index - 1;
                      let isNotDisplayed = false;
                      
                      if (index == 0) currCardLeft = Cards.length - 1;

                      const currCardResLeft = currCardLeft > 0 ? currCardLeft - 1 : 0;

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
                         case currCardResLeft:
                            translateX = "-translate-x-[125vw]";
                            break;
                         case currCardResRight: 
                            translateX = "translate-x-[155vw]";
                            break;
                         default:
                            isNotDisplayed = true;
                      } 

                      return <div data-not-display={isNotDisplayed} className={`${cardClass} bg-white absolute ${translateX} ${scale} ${opacity} ${isNotDisplayed ? "hidden" : ""}`}>
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
