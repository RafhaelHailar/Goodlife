import {FC} from "react";

/*
 Button component
    create a button display
 @parameters - all except 'text' will be added to the 'className' of container
    text - the text that will be enclosed by the border
    tC / textColor,tS / textSize,tW / textWeight - the name gave it away ( so read the name).
    pad / padding,padX / paddingX,padY / paddingY - this too.
    bC / borderColor,bW / borderWidth - again.
    bgC / backgroundColor - the color of button.
    r / roundeness - adding curve on the corners of the button.
    rA / renderAt - defined how the button will be rendered at different breakpoints.
*/

type props = {
    text: string,
    tC?: string,
    tS?: string,
    tW?: string,
    pad?: string,
    padX?: string,
    padY?: string,
    bC?: string,
    bW?: string,
    bgC?: string,
    r?: string,
    rA?: string
}

const Button: FC<props> = ({
        text,
        tC,
        tS,
        tW,
        pad,
        padX,
        padY,
        bC,
        bW,
        bgC,
        r,
        rA
    }) => {
    
    let containerClass = "inline-flex justify-center items-center cursor-pointer ";

    containerClass += tC ? tC + " " : "";
    containerClass += tS ? tS + " " : "";
    containerClass += tW ? tW + " " : "";
    containerClass += pad ? pad + " " : "";
    containerClass += padX ? padX + " " : "";
    containerClass += padY ? padY + " " : "";
    containerClass += bC ? bC + " " : "";
    containerClass += bW ? bW + " " : "";
    containerClass += bgC ? bgC + " " : "";
    containerClass += r ? r + " " : "";
    containerClass += rA ? rA + " " : "";

    return <div className={containerClass}>
        {text} 
    </div>
}

export default Button;
