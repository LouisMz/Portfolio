import React, { FunctionComponent } from "react";

const Competence : React.FC = () =>{

    return (
        <div className ="contentTitle">
            <p>Au court de ma première année de BTS j'ai acquis de nombreuse compétences.</p>
            <br/>
            <div className="contentText">
                <p>Tout d'abord je possède des compétences dans le développement WEB.</p>
                <p>Mes compétences en développement ne sont pas limité en HTML, CSS et JavaScript, mais j'ai aussi des compétences en React.</p>
                <br/>
                <p>Je possède aussi des compétences dans le développement d'application.</p>
                <p>Mes compétences en développement d'application se limite pour le moment au langage C#. Je compte plus tars apprendre le langage C++.</p>
                <br/>
                <p>Et pout finir j'ai aussi des compétences en Base de données.</p>
                <p>Pour le moment mes compétences en base de donnée sont: MCD, MLD et Requete SQL</p>
            </div>
        </div>
    );
}

export default Competence;