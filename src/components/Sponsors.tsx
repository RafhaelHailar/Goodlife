import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faDailymotion, faApple, faReact, faPaypal, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Sponsors: FC = () => {
    return <div className="py-6 bg-black text-blue flex text-8xl justify-center gap-20">
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
