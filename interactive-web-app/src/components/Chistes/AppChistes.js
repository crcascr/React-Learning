import React from "react";
import Chiste from "./Chiste";
import datosChistes from "./datosChistes";
import "./Chiste.css";

function AppChistes(){
    const chisteElementos = datosChistes.map(chiste => {
        return (
            <Chiste 
                key={chiste.id}
                setup={chiste.setup} 
                punchline={chiste.punchline} 
            />
        )
    })
    return (
        <div className="chistesContainer">
            {chisteElementos}
        </div>
    )
}

export default AppChistes