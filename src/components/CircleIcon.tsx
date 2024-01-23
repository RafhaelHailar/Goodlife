import {FC,ReactElement} from "react";

/*
    Circle Icon component
        create a display that takes image and encircle the image.


    @parameters:
        image - the image that will be displayed.
        icon - font awesome icon to be encircled.
        iC / iconColor - the color of the icon given.
        iS / iconSize - the size of the icon given.
        iW / imageWidth - the width of the image.
        cS / circleSize - the size of the circle (in padding).
        cC / circleColor - read the name it will explain.
import "../index.css";
        cB / circleBorder - this one too, read the name.
*/

interface props {
    image?: string,
    Icon?: ReactElement,
    iC?: string,
    iS?: string,
    alt: string,
    iW?: string,
    cS: string, 
    cC?: string,
    cB?: string

}

const CircleIcon: FC<props> = ({
        image,
        Icon,
        iC,
        iS,
        alt,
        iW,
        cS,
        cC,
        cB
    }) => {
    return <div className={`flex items-center justify-center ${iS} ${iC} ${cB} ${cC} ${cS} rounded-full`}>
        {
            image ?
                <img src={image} className={iW} alt={alt}/>
                :
                Icon ?
                    Icon 
                    :
                    ""
        }
    </div>
}

export default CircleIcon;
