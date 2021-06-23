import React, { FunctionComponent } from "react";

interface Props{
    open?: () => void
    src: string;
    description: string;
    alt: string;
}

const ButtonIcon: FunctionComponent<Props> = (props : Props) =>{
    return(
        <div className="iconStyle">
            <img src={props.src} alt={props.alt} onDoubleClick={props.open}/>
            <p>{props.description}</p>
        </div>
    );

}

export default ButtonIcon;  