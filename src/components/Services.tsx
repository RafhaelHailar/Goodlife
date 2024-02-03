import {FC} from "react";
import { faFire, faShieldHalved, faPowerOff, faPersonRunning, faHandsHoldingChild, faWrench, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services: FC = () => {
    return <div className="h-screen bg-black px-20 flex items-center">
        <div className="flex flex-col gap-8">
            <div className="flex gap-8">
                <div className="w-2/6">
                    <div className="text-blue text-6xl font-semibold">
                        Explore the world and see
                    </div>
                    <div className="text-lg text-light-white">
                        Lorem ipsum dolor sit amet, cons ect etur adipiscing elit. Curabitur telquam,
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-64 h-48 bg-white rounded-xl justify-center items-center">
                    <FontAwesomeIcon icon={faFire} className="text-7xl"/>
                    <div className="text-center ">
                        <div className="font-bold text-lg ">Burning Passion</div>
                        <div className="font-semibold -mt-1 text-light-gray text-sm">Boom! Fire Everywhere</div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 w-64 h-48 bg-white rounded-xl justify-center items-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-7xl"/>
                    <div className="text-center ">
                        <div className="font-bold text-lg ">Protection</div>
                        <div className="font-semibold -mt-1 text-light-gray">To avoid unwanted children</div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-64 h-48 bg-white rounded-xl justify-center items-center">
                    <FontAwesomeIcon icon={faFire} className="text-7xl"/>
                    <div className="text-center ">
                        <div className="font-bold text-lg ">Burning Passion</div>
                        <div className="font-semibold -mt-1 text-light-gray">Boom! Fire Everywhere</div>
                    </div>
                </div>

            </div>
            <div className="ml-44 flex gap-8">
                <div className="flex flex-col gap-2 w-64 h-48 bg-white rounded-xl justify-center items-center">
                    <FontAwesomeIcon icon={faFire} className="text-7xl"/>
                    <div className="text-center ">
                        <div className="font-bold text-lg ">Burning Passion</div>
                        <div className="font-semibold -mt-1 text-light-gray">Boom! Fire Everywhere</div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-64 h-48 bg-white rounded-xl justify-center items-center">
                    <FontAwesomeIcon icon={faFire} className="text-7xl"/>
                    <div className="text-center ">
                        <div className="font-bold text-lg ">Burning Passion</div>
                        <div className="font-semibold -mt-1 text-light-gray">Boom! Fire Everywhere</div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 w-64 h-48 bg-white rounded-xl justify-center items-center">
                    <FontAwesomeIcon icon={faFire} className="text-7xl"/>
                    <div className="text-center ">
                        <div className="font-bold text-lg ">Burning Passion</div>
                        <div className="font-semibold -mt-1 text-light-gray">Boom! Fire Everywhere</div>
                    </div>
                </div>

                <div className="bg-blue flex flex-col gap-1 w-64 h-48 text-white rounded-xl justify-center ">
                    <div className="text-center self-center ">
                        <div className="font-bold text-xl">997+ Things</div>
                        <div className="font-semibold -mt-1 text-light-white text-sm">Boom! Fire Everywhere</div>
                    </div>
                    <div className="ml-14">
                        <FontAwesomeIcon icon={faArrowRightLong} className="text-black text-4xl"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default Services;
