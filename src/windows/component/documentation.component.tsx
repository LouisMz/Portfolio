import React, { FunctionComponent } from "react";

const Documentation : React.FC = () =>{

    return (
        <div className ="contentTitle">
            <p>La documentation outil utile</p>
            <div className="contentText">
                <p>En tant que dévelopeur la documentation peut-être très utilise si un projet est amené à être reprit 
                    plus tard par d'autres personnes. La documentation permet aux arrivants sur le projet de travailler 
                    le plus rapidement possible.
                </p>
                <p>Pour le moment je n'ai réalisé aucune documentation.
                </p>
            </div>
        </div>
    );
}

export default Documentation;