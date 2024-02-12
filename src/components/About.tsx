import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faNetworkWired, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const About: FC = () => {
    return <div className="flex flex-col md:flex-row items-center gap-[5vw] md:mt-0 mt-[15vw] px-[5vw] w-full mb-20">
        <div className="md:w-[60vw] w-[80vw]">
            <img src="./assets/images/about-img.png" className="w-full" />
        </div>

        <div className="w-5/6">
            <div className="flex md:gap-[0.7vw] gap-[2vw] flex-col">
                <div className="md:text-[1.3vw] text-[3vw] gap-[1vw] text-blue font-bold flex items-center">
                    <div className="md:w-[4vw] md:h-[0.2vw] w-[5vw] h-[0.3vw] bg-blue"></div>
                    About Our Company
                </div>

                <div className="md:text-[3vw] text-[6.5vw] font-semibold">
                    What color is the moon and how did it smell?
                </div>

                <div className="text-medium-gray md:text-[1.3vw] text-[3vw] "> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, posuere vitae eros. Phasellus cursus diam quis scelerisque tempus. Duis eget tincidunt ligula. Sed eu arcu nec dolor lacinia 
                </div>

                <div className="flex md:flex-row flex-col justify-center my-4 gap-5 md:gap-0">
                    <div className="flex items-center gap-6">
                        <FontAwesomeIcon icon={faCubes} className="md:text-[5vw] text-[13vw] text-blue" />
                       <div className="font-bold md:text-[1.6vw] text-[4.5vw] md:w-1/5" >Society Development</div>
                    </div>
                    <div className="flex gap-6">
                        <FontAwesomeIcon icon={faNetworkWired}  className="md:text-[5vw] text-[13vw] text-blue"/>
                        <div className="font-bold md:text-[1.6vw] text-[4.5vw] md:w-1/5" >Friendly Network</div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 md:text-[1vw] text-[2.7vw]">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-blue" />
                        <div className="font-semibold">Bringing one another to success.</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-blue" />
                        <div className="font-semibold">Essential part of human being is to reduce bad smell.</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-blue" />
                        <div className="font-semibold">The moon like to see you shine too.</div>
                    </div>
                </div>

                <div>
                    <Button text="ABOUT US"
                            tC="text-white" 
                            tS="md:text-[1vw] text-[3vw]"
                            bC="bg-blue"
                            padX="md:px-[1.5vw] px-[2.5vw]"
                            padY="md:py-[1vw] py-[2vw]"
                    />
                </div>
            </div>
        </div>
    </div>
}


export default About;
