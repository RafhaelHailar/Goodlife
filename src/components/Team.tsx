import {FC} from "react";

type Member = {
    name: string,
    image: string,
    description: string,
    role: string
}

const Members: Member[] = [
    {
        name: "Pres. Rodrigo Duterte",
        image: "./assets/images/president.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, vitae eros.",
        role: "PRES"
    },
    {
        name: "Pres. Rodrigo Duterte",
        image: "./assets/images/president.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, vitae eros.",
        role: "PRES"
    },
    {
        name: "Pres. Rodrigo Duterte",
        image: "./assets/images/president.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, vitae eros.",
        role: "PRES"
    }
];

const Team: FC = () => {
    return <div className="flex py-20 flex-col items-center">
        <div className="text-center px-[5vw] md:px-0">
            <div className="md:text-[4vw] text-[14vw] font-bold md:font-semibold">OUR TEAM</div>
            <div className="md:text-[1.5vw] text-[3.5vw] mt-3 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        <div className="flex md:flex-row flex-col items-center md:gap-[2.5vw] gap-[15vw] md:w-4/6 w-full">
            {
                Members.map((member: Member) => {
                    const { name, image, description, role } = member;
                    return <div className="bg-fading-black w-[70vw]">
                                <div className="relative border-8 rounded border-b-0">
                                    <img src={image} /> 
                                    <div>
                                        <div className="bg-medium-black md:w-[6.6vw] w-[26vw] md:h-[2.6vw] h-[10.3vw] knife-shape md:text-[1.35vw] font-semibold absolute text-white md:bottom-[2.2vw] bottom-[6.2vw] md:-ml-1">
                                        </div>
                                        <div className="knife-shape md:py-0.5 md:text-[1.35vw] text-[6vw] font-semibold md:pl-[0.8vw] pl-[4vw] md:pr-[1.7vw] pr-[7vw] absolute bg-blue text-white md:bottom-[2.5vw] bottom-[7.5vw]">
                                            {role}
                                        </div>
                                    </div>
                                </div>
                                <div className="md:pl-5 pl-2 mt-7">
                                    <div className="font-bold md:text-[1.5vw] text-[6vw] mb-2 ">{name}</div>
                                    <div className="text-medium-gray md:text-[1vw] text-[4vw]">
                                        {description}
                                    </div>
                                </div>
                            </div>
                })
            }
        </div>
    </div>
}

export default Team;
