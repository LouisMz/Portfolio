import React, { FunctionComponent } from "react";
import PhotoProfil from './img/PP.jpg'

const Presentation : FunctionComponent = () =>{

    return (
        <div>
            <img src={PhotoProfil} alt='Photo de Profil'/>
            <p style={{ fontSize: 14 }}>Bonjour, Je m'appelle Louis Mazé, je suis actuellement en première année de BTS Services Informatique aux Organisation option Solutions Logicielles et Applications Métiers au lycée Chevrolier à Angers.</p>
        </div>
    );
}

export default Presentation;