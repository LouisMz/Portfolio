import React, { FunctionComponent } from "react";

const Projet : React.FC = () =>{
    
    return(
        <div>
            <p className="contentTitle">Au cours de cette première année de BTS j'ai réalisé plusieur projets: </p>
            <br/>
            <div className="contentText">
                <p>Le premier projet consistais à faire un premier portfolio.</p>
                <p>Ce projet ma premis d'acquirir de première compétences eh html et css.</p>
                <br/>
                <p>Le second projet était centré sur le traitement et la sécurisation des données.</p>
                <p>Avec ce projet j'ai pus apprendre à utiliser Access</p>
                <br/>
                <p>Le troisième projet était de faire un jeux du pendu en python avec une interface graphique</p>
                <p>Grace à ce projet j'ai appris a utilisé Tkinter et à utiliser python autre que pour faire de l'algorithme.</p>
                <br/>
                <p>Le quatrième projet, et le dernier projet fait en cours était de faire un site FULL-END. Je me suis occupé de la partie FRONT-END.</p>
                <p>Ce projet m'a apporté beaucoup de chose comme connecter son site avec une base de données, sécuriser son site WEB, et la répartition des taches.</p>
                <br/>
                <p>Je compte prochainement mettre tous ces projets sur mon github. Pour le moement il y a mon portfolio dessus pour le voir allez sur github.com/LouisMz/Portfolio</p>
            </div>
        </div>
    );
}

export default Projet;