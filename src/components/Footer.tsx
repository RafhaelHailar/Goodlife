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
        <div className="flex  py-8 px-28 justify-center gap-20">
          <div className="basis-4/12">
             <div className="mb-4">
                 <img src="./assets/images/logo-1.png"/>  
             </div>
             <p className="text-light-white text-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, fringilla et aliquet et, posuere vitae eros. Phasellus cursus.
             </p>
             <div className="inline-block">
                <h5 className="mb-4">Subscribe Us</h5>
                <div className="rounded-full overflow-hidden bg-white inline-block">
                    <input type="email" placeholder="Your email address" className="text-sm w-44 text-black outline-none px-3" />
                    <button className="bg-blue px-6 rounded-full py-1.5 ">
                        <FontAwesomeIcon icon={faPaperPlane} style={{transform: "rotate(55deg)"}}/>
                    </button>
                </div>
             </div>
          </div>
          <div className="flex gap-20 basis-6/12 mt-5">
             <div className="">
                <h3 className="text-lg font-semibold mb-5">Important Links</h3>
                <ul className="flex flex-wrap gap-y-3">
                    {
                        Links.map((link: Link) => {
                            const {name,target} = link;
                            return <li className="w-1/2 flex items-center gap-2">
                                <FontAwesomeIcon icon={faGreaterThan} className="text-blue text-xs"/>
                                <a href={target} className="hover:underline text-sm text-right-gray">{name}</a>
                            </li>
                        })
                    }
                </ul>
             </div>
             <div className="flex-1">
                <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
                <div className="flex flex-col">
                    {
                        Contacts.map((contact: Contact) => { 
                            const {icon,value} = contact;
                            return <div className="flex items-center gap-5 border-t border-medium-blue py-3" >
                                 <FontAwesomeIcon icon={icon} className="w-1/12"/> 
                                 <p className="text-sm text-right-gray">{value}</p>
                            </div>
                        })
                    }
                </div>
             </div>
          </div>
        </div>
        <div className="border-t border-medium-blue py-4 text-center text-right-gray">
            Copyright &copy; 2024 | All Right Reserved
        </div>
    </div>
}

export default Footer;
