import React, { FunctionComponent } from "react";

const Mention : FunctionComponent = () =>{

    return (
        <div className ="contentTitle">
            <p>Voici les mentions légales de mon site</p>
            <div className="contentText">
                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                     et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les 
                     représentations iconographiques et photographiques. La reproduction, adaptation et/ou traduction 
                     de tout ou partie de ce site sur un support quel qu'il soit, est formellement interdite sauf autorisation 
                     expresse du Directeur de la publication.
                    <br/>
                    Modification du site :
                    L'équipe éditoriale se réserve le droit de modifier ou de corriger le contenu de ce site et de ces mentions 
                    légales à tout moment et ceci sans préavis.
                    <br/>
                    Hébergeur :
                    Mon portfolio est hébergé...</p>
            </div>
        </div>
    );
}

export default Mention;