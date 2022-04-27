import React, { FunctionComponent, useState } from "react";

const Home : React.FC = () =>{

    const [visible, setVisible] = useState<boolean>(true);

    function handleCloseWindow(){
        setVisible(false);
    }

    if (visible){
        return(
            <div>
            <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">Mon Portfolio</div>
                <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close" onClick={handleCloseWindow}></button>
                </div>
            </div>
            <div className="window-body">
                <div>
                    <div>
                        <p className="homeTitle">Bienvenue !!</p>
                        <div className="homeContent">
                            <p>Je m'appelle Louis Mazé et voici mon Portfolio développé par mes soins avec React, il fonctionne comme un bureau Windows XP.</p>
                            <p>Double cliquez sur les icons pour ouvrir les fenêtres associées.</p>
                            <p>Vous pouvez bouger les fenêtres et les fermer.</p>
                            <p>Ce Portfolio est présent avant tout pour vous donner la nostalgie de l'époque et pour vous présenter mes compétences en développement</p>
                            <p className="homeEnd">Fermez cette page et explorez</p>
                        </div>
                        <div className="field-row" style={{ justifyContent: 'center' }}>
                            <button onClick={handleCloseWindow}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
    else return null;
}

export default Home;