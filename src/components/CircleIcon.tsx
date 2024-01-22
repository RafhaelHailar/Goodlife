import {FC} from "react";

/*
    Circle Icon component
        create a display that takes image and encircle the image.


    @parameters:
        image - the image that will be displayed.
        iW / imageWidth - the width of the image.
        cS / circleSize - the size of the circle (in padding).
        cC / circleColor - read the name it will explain.
import "../index.css";
        cB / circleBorder - this one too, read the name.
*/

interface props {
    image: string,
    alt: string,
    iW: string,
    cS: string, 
    cC?: string,
    cB?: string

}

const CircleIcon: FC<props> = ({
        image,
        alt,
        iW,
        cS,
        cC,
        cB
    }) => {
    return <div className={`${cB} ${cC} ${cS} rounded-full`}>
        <img src={image} className={iW} alt={alt}/>
    </div>
}

export default CircleIcon;
