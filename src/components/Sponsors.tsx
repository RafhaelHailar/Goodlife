import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faDailymotion, faApple, faReact, faPaypal, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const Sponsors: FC = () => {
    return <>
         <div className="md:hidden flex">
             <Swiper autoplay={{delay: 2000,disableOnInteraction: false}} modules={[Autoplay]} slidesPerView={3} spaceBetween={20} className="text-center py-[2vw] bg-black text-blue md:text-[7vw] text-[26vw] overflow-hidden md:gap-[6vw] gap-[14vw]">
                <SwiperSlide>
                    <FontAwesomeIcon icon={faDocker} />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon icon={faDailymotion} />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon icon={faApple} />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon icon={faReact} />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon icon={faPaypal} />
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon icon={faXTwitter} />
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="py-[2vw] bg-black text-blue md:flex hidden md:text-[7vw] text-[26vw] overflow-hidden justify-center md:gap-[6vw] gap-[14vw]">
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
    </>
}

export default Sponsors;
