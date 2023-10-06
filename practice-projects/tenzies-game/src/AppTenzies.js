import React from "react";
import Arreglo from "./Components/Arreglo";

function AppTenzies() {

function todosNumerosDado(){
    const arregloNumeros=[]

    for(let i=0;i<10;i++){
        const numeroDado=Math.ceil(Math.random()*6)
        arregloNumeros.push(numeroDado)
    }
    return arregloNumeros
    
}
console.log(todosNumerosDado())



  return (
    <main>
      <div className="numeros">
        <Arreglo numero={1} />
        <Arreglo numero={2} />
        <Arreglo numero={3} />
        <Arreglo numero={4} />
        <Arreglo numero={5} />
        <Arreglo numero={6} />
        <Arreglo numero={6} />
        <Arreglo numero={5} />
        <Arreglo numero={4} />
        <Arreglo numero={3} />
      </div>
    </main>
  );
}

export default AppTenzies;
