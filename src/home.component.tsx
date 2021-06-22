import React, { CSSProperties, FunctionComponent, useState } from "react";

const Home : FunctionComponent = () =>{

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
                <p>There's so much room for activities!</p>
            </div>
            </div>
        </div>
        );
    }
    else return null;
}

export default Home;