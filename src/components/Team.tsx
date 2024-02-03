import {FC} from "react";

const Team: FC = () => {
    return <div className="flex py-20 flex-col items-center">
        <div className="text-center">
            <div className="text-6xl font-semibold">OUR TEAM</div>
            <div className="text-xl mt-3 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        <div className="flex gap-10 w-4/6">
            <div className="bg-fading-black w-2/6">
                <div className="relative border-8 rounded border-b-0">
                    <img src="./assets/images/president.png" /> 
                    <div>
                        <div className="bg-medium-black w-24 h-9 knife-shape text-xl font-semibold absolute text-white bottom-9 -ml-1">
                        </div>
                        <div className="knife-shape py-0.5 text-xl font-semibold pl-3 pr-6 absolute bg-blue text-white bottom-10">
                            PRES
                        </div>
                    </div>
                </div>
                <div className="pl-5 mt-7">
                    <div className="font-bold text-2xl mb-2 ">Pres. Rodrigo Duterte</div>
                    <div className="text-medium-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et,  vitae eros. 
                    </div>
                </div>
            </div>
            <div className="bg-fading-black w-2/6">
                <div className="relative border-8 rounded border-b-0">
                    <img src="./assets/images/president.png" /> 
                    <div>
                        <div className="bg-medium-black w-24 h-9 knife-shape text-xl font-semibold absolute text-white bottom-9 -ml-1">
                        </div>
                        <div className="knife-shape py-0.5 text-xl font-semibold pl-3 pr-6 absolute bg-blue text-white bottom-10">
                            PRES
                        </div>
                    </div>
                </div>
                <div className="pl-5 mt-7">
                    <div className="font-bold text-2xl mb-2 ">Pres. Rodrigo Duterte</div>
                    <div className="text-medium-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et,  vitae eros. 
                    </div>
                </div>
            </div>
            <div className="bg-fading-black w-2/6">
                <div className="relative border-8 rounded border-b-0">
                    <img src="./assets/images/president.png" /> 
                    <div>
                        <div className="bg-medium-black w-24 h-9 knife-shape text-xl font-semibold absolute text-white bottom-9 -ml-1">
                        </div>
                        <div className="knife-shape py-0.5 text-xl font-semibold pl-3 pr-6 absolute bg-blue text-white bottom-10">
                            PRES
                        </div>
                    </div>
                </div>
                <div className="pl-5 mt-7">
                    <div className="font-bold text-2xl mb-2 ">Pres. Rodrigo Duterte</div>
                    <div className="text-medium-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et,  vitae eros. 
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Team;
