import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Datos from "./data";

function TravelJournal(){
    const viajes=Datos.map((dato)=>{
        let ultimoDato;
        if(dato.id==Datos.length){
            ultimoDato=true
        }else{
            ultimoDato=false
        }
        return(
            <Card
            key={dato.id}
            dato={dato}
            control={ultimoDato}
            />
        );
    });

    return(
        <div className="pageContainer">
            <Navbar/>
            <div className="pageContent">
            {viajes}
            </div>
        </div>
    )
}

export default TravelJournal