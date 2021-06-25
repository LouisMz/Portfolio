import React, { FunctionComponent } from "react";
import PhotoProfil from './img/PP.jpg'

const Presentation : FunctionComponent = () =>{

    return (
        <div className ="presentationContent">
            <img src={PhotoProfil} alt='Photo de Profil'/>
            <div className="contentText">
                <p>Bonjour, Je m'appelle Louis Mazé,
                je suis actuellement en première année de BTS Services Informatique aux Organisation
                option Solutions Logicielles et Applications Métiers au lycée Chevrolier à Angers.</p>
                <br/>
                <p>Je possède plusieurs passions et centre d'intéret, mes plus grandes passions sont 
                les jeux-vidéos et le monde de l'informatique. Grace à mon BTS j'ai pus dévelloper ma 
                passions autour de l'informatique tout en me formant pour mon future professionnel.
                </p>
                <p>Avec ce BTS j'ai pus apprendre beaucoup de nouvelle chose comme la base du développement
                web et les bases de la programmation orienté objet. Ce que je compte faire à court terme est 
                de finir mon BTS afin d'aller faire une licence dans le développement tout en me spécialisant 
                dans le JavaScript ou TypeScript. Au long terme je souahite devenir dévellopeur React après mon
                satge fit sur du React je me voué de passion pour cette technologie</p>
                <br/>
                <p>Si vous souhaitez en savoir plus je vous invite à regarder mon Linkedin: </p>
            </div>

        </div>
    );
}

export default Presentation;