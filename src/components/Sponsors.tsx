import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faDailymotion, faApple, faReact, faPaypal, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Sponsors: FC = () => {
    return <div className="py-[2vw] bg-black text-blue flex md:text-[7vw] text-[26vw] overflow-hidden justify-center md:gap-[6vw] gap-[14vw]">
        <div>
            <FontAwesomeIcon icon={faDocker} />
        </div>
        <div>
            <FontAwesomeIcon icon={faDailymotion} />
        </div>
        <div>
            <FontAwesomeIcon icon={faApple} />
        </div>
        <div>
            <FontAwesomeIcon icon={faReact} />
        </div>
        <div>
            <FontAwesomeIcon icon={faPaypal} />
        </div>
        <div>
            <FontAwesomeIcon icon={faXTwitter} />
        </div>
    </div>
}

export default Sponsors;
