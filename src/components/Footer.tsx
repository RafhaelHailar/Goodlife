import {FC} from "react";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faGreaterThan, faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";


// just trying typescript
type Link = {
    name: string,
    target: string
};
type LinkContainer = Link[]; 
const Links: LinkContainer = [
    {
        name: "Headlines",
        target: "facebook.com"
    },
    {
        name: "Reports",
        target: "facebook.com"
    },
    {
        name: "News",
        target: "facebook.com"
    },
    {
        name: "Income",
        target: "facebook.com"
    },
    {
        name: "Support",
        target: "facebook.com"
    },
    {
        name: "Terms and Conditions",
        target: "facebook.com"
    },
    {
        name: "Information",
        target: "facebook.com"
    },
    {
        name: "Petition",
        target: "facebook.com"
    }
];

type Contact = {
    icon: IconDefinition,
    value: string
}

const Contacts: Contact[] = [
    {
        icon: faEnvelope,
        value: "rafhaelhailar@yahoo.com"
    },
    {
        icon: faPhone,
        value: "09997163580"
    },
    {
        icon: faLocationDot,
        value: "Freddy Fazbear Pizzarea"
    },
];

const Footer: FC = () => {
    return <div className="bg-black text-white">
        <div className="flex md:flex-row flex-col py-8 md:px-28 px-[5vw] justify-center md:gap-20 gap-6">
          <div className="basis-4/12">
             <div className="mb-4">
                 <img src="./assets/images/logo-1.png"/>  
             </div>
             <p className="text-light-white md:text-[0.9vw] text-[3vw] md:mb-16 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, posuere vitae eros. Phasellus cursus.
             </p>
             <div className="inline-block">
                <h5 className="md:mb-[1vw] mb-[2vw] md:text-[1vw] text-[4vw]">Subscribe Us</h5>
                <div className="rounded-full overflow-hidden bg-white flex items-center">
                    <input type="email" placeholder="Your email address" className="md:text-[1vw] text-[3vw] md:w-[12vw] text-black h-full outline-none md:pl-[1vw] pl-[3vw]" />
                    <button className="bg-blue md:px-[1.6vw] px-[5vw] rounded-full md:py-[0.5vw] py-[1vw] md:text-[1vw] text-[3.5vw]">
                        <FontAwesomeIcon icon={faPaperPlane} style={{transform: "rotate(55deg)"}}/>
                    </button>
                </div>
             </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-20 gap-6 basis-6/12 md:mt-5">
             <div className="order-2 md:order-1">
                <h3 className="md:text-[1.3vw] text-[4vw] font-semibold md:mb-[1.3vw] mb-[3vw]">Important Links</h3>
                <ul className="flex flex-wrap gap-y-[0.7vw]">
                    {
                        Links.map((link: Link) => {
                            const {name,target} = link;
                            return <li className="w-1/2 flex items-center md:gap-[0.7vw] gap-[2vw]">
                                <FontAwesomeIcon icon={faGreaterThan} className="text-blue md:text-[0.8vw] text-[2vw]"/>
                                <a href={target} className="hover:underline md:text-[0.9vw] text-[3vw] text-right-gray">{name}</a>
                            </li>
                        })
                    }
                </ul>
             </div>
             <div className="flex-1 order-1">
                <h3 className="md:text-[1.3vw] text-[4vw] font-semibold md:mb-[1.3vw] mb-[3vw]">Contact Us</h3>
                <div className="flex flex-col">
                    {
                        Contacts.map((contact: Contact) => { 
                            const {icon,value} = contact;
                            return <div className="flex items-center gap-5 border-t border-medium-blue md:py-[1vw] py-[2vw]" >
                                 <FontAwesomeIcon icon={icon} className="w-1/12"/> 
                                 <p className="text-[3vw] md:text-[0.9vw] text-right-gray">{value}</p>
                            </div>
                        })
                    }
                </div>
             </div>
          </div>
        </div>
        <div className="border-t border-medium-blue md:py-4 py-3 md:text-[1vw] text-[3vw] text-center text-right-gray">
            Copyright &copy; 2024 | All Right Reserved
        </div>
    </div>
}

export default Footer;
