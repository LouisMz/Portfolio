import React, { FunctionComponent } from "react";

const Cyber : React.FC = () =>{

    return (
        <div className ="contentTitle">
            <p>La Cybersécurité est de nous jour une compétence qui est indispensable en tant que dévelopeur</p>
            <br/>
            <div className="contentText">
                <p>Pour le moment en cybersécurité nous avons vus que les débuts des protection. Nous avons vus 
                    qu'est-ce qu'était une faille XSS et comment la colmater. Pour cela il faut faire attention 
                    à comment on passe les données entre pages à faire attention à quelle méthode http on fait passer
                    les données. Pour cela il y a deux choix soit par la méthode GET soit par la méthode POST.</p>
                <p>Nous avons aussi vus les injections SQL, pour éviter cela dans nos base de données il faut dans 
                    notre site faire des requetes SQL préparés.
                </p>
            </div>
        </div>
    );
}

export default Cyber;