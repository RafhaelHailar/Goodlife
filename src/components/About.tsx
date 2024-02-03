import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faNetworkWired, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const About: FC = () => {
    return <div className="flex gap-20 px-20 w-full mb-20">
        <div className="w-4/6">
            <img src="./assets/images/about-img.png" className="w-full" />
        </div>

        <div className="w-5/6">
            <div className="flex gap-6 flex-col">
                <div className="text-lg gap-2 text-blue font-bold flex items-center">
                    <div className="w-16 h-0.5 bg-blue"></div>
                    About Our Company
                </div>

                <div className="text-5xl font-semibold">
                    What color is the moon and how did it smell?
                </div>

                <div className="text-medium-gray text-lg "> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, posuere vitae eros. Phasellus cursus diam quis scelerisque tempus. Duis eget tincidunt ligula. Sed eu arcu nec dolor lacinia 
                </div>

                <div className="flex justify-center my-4">
                    <div className="flex gap-6">
                        <FontAwesomeIcon icon={faCubes} className="text-6xl text-blue" />
                       <div className="font-bold text-2xl w-1/5" >Society Development</div>
                    </div>
                    <div className="flex gap-6">
                        <FontAwesomeIcon icon={faNetworkWired}  className="text-6xl text-blue"/>
                        <div className="font-bold text-2xl w-1/5" >Friendly Network</div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
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
                            bC="bg-blue"
                            padX="px-6"
                            padY="py-4"
                    />
                </div>
            </div>
        </div>
    </div>
}


export default About;
