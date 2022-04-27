import React, { FunctionComponent } from "react";

interface Props{
    open: () => void;
    src: string;
    description: string;
    alt: string;
}


const ButtonIcon: React.FC<Props> = (props : Props) => {

    return(
        <div className="iconStyle" onDoubleClick={ () => props.open()}>
            <img className="iconImg" src={props.src} alt={props.alt}/>
            <p>{props.description}</p>
        </div>
    );

}

export default ButtonIcon;  