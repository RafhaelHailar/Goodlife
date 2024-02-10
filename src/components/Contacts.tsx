import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const inputStyles = "border flex-1 border-light-gray rounded py-2 px-3";
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
    return <div className="py-24 bg-slight-gray">
        <div className="flex px-12 gap-7">
           <div className="bg-white items-center p-8 rounded-xl">
               <h2 className="text-4xl font-bold mb-3">Send a message</h2>
               <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, posuere vitae eros.</p>
               <form className="flex flex-wrap gap-x-5 gap-y-8 mt-10">
                   <input type="text" className={inputStyles} placeholder="Your name" />
                   <input type="text" className={inputStyles} placeholder="Email Address" />
                   <input type="text" className={inputStyles} placeholder="Phone Number" />
                   <input type="text" className={inputStyles} placeholder="Subject" />
                   <textarea placeholder="Message" rows={6} className="py-2 px-3 border-light-gray border rounded w-full"></textarea>
                   <button className="bg-blue text-white px-4 py-3 rounded">Send Message</button>
               </form>
           </div>
           <div className="flex justify-center items-center">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6042.181965183007!2d-73.83519336187527!3d40.782013900732736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28aa5584d2ded%3A0xba02f9846f53b3c1!2sMcDonald&#39;s!5e0!3m2!1sen!2sph!4v1707587596467!5m2!1sen!2sph" width={600} height={450} style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
        <div className="flex justify-center gap-16 mt-20">
            {
                Details.map(detail => {
                    const {icon,name,value} = detail;
                    return <div className="bg-white flex items-center rounded-lg gap-2 w-2/12 py-3 px-4">
                        <div>
                            <div className="text-blue bg-dark-gray flex justify-center items-center w-12 h-12 rounded-full">
                                <FontAwesomeIcon icon={icon} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-bold -mb-1">{name}</h3>
                            <h5 className="text-gray text-xs ">{value}</h5>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Contacts;
