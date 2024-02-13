import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const inputStyles = "border md:text-[1vw] flex-1 text-[4vw] border-light-gray rounded py-[1vh] md:px-[1vw] px-[3vw]";
const Details = [
    {
        icon: faPhone,
        name: "Phone Number",
        value: "09997163580"
    },
    {
        icon: faEnvelope,
        name: "Email Address",
        value: "rafhaelhailar@yahoo.com"
    },
    {
        icon: faPhone,
        name: "Fax Address",
        value: "09997163580"
    },
    {
        icon: faLocationDot,
        name: "Location",
        value: "Freddy Fazbear Pizzarea"
    },
]
const Contacts: FC = () => {
    return <div className="md:py-24 py-10 bg-slight-gray flex flex-col md:gap-0 gap-10">
        <div className="md:order-1 order-2 flex md:flex-row flex-col md:items-start items-center md:px-[3vw] md:gap-[2vw] gap-[8vw]">
           <div className="bg-white md:p-8 p-5 rounded-xl md:w-[50vw]">
               <h2 className="md:text-[2.5vw] text-[10vw] font-bold mb-3">Send a message</h2>
               <p className="text-gray md:text-[1vw] text-[4vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, posuere vitae eros.</p>
               <form className="flex md:flex-row flex-col relative w-full flex-wrap gap-x-5 gap-y-5 mt-10">
                   <div className="flex md:flex-row flex-col gap-y-5 gap-x-5 w-full ">
                       <input type="text" className={inputStyles} placeholder="Your name" />
                       <input type="text" className={inputStyles} placeholder="Email Address" />
                   </div>
                   <div className="flex md:flex-row flex-col gap-y-5 gap-x-5 w-full">
                       <input type="text" className={inputStyles} placeholder="Phone Number" />
                       <input type="text" className={inputStyles} placeholder="Subject" />
                   </div>
                   <textarea placeholder="Message" rows={15} className="md:text-[1vw] text-[4vw] py-2 px-3 border-light-gray border rounded w-full"></textarea>
                   <button className="bg-blue text-white px-[1.5vw] md:text-[1vw] text-[4vw] md:py-[1vw] py-[2vw] rounded">Send Message</button>
               </form>
           </div>
           <div className="flex justify-center items-center md:w-[40vw]">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6042.181965183007!2d-73.83519336187527!3d40.782013900732736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28aa5584d2ded%3A0xba02f9846f53b3c1!2sMcDonald&#39;s!5e0!3m2!1sen!2sph!4v1707587596467!5m2!1sen!2sph" width={600} height={450} style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
        <div className="flex md:flex-row flex-col items-center order-1 justify-center md:gap-16 gap-3 md:mt-20">
            {
                Details.map(detail => {
                    const {icon,name,value} = detail;
                    return <div className="bg-white flex items-center rounded-lg gap-2 md:w-[16vw] w-[60vw] md:py-[0.8vw] py-[2vw] md:px-[1vw] px-[3vw]">
                        <div>
                            <div className="text-blue md:text-[1vw] text-[3vw] bg-dark-gray flex justify-center items-center md:w-[3vw] w-[10vw] md:h-[3vw] h-[10vw] rounded-full">
                                <FontAwesomeIcon icon={icon} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-bold -mb-1 md:text-[1vw] text-[4.5vw]">{name}</h3>
                            <h5 className="text-gray md:text-[0.8vw] text-[3.5vw] ">{value}</h5>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Contacts;
