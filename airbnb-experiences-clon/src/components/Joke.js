import React from "react";

function Joke(props) {  
  return (
    <div className="contact-card">      
      <h3>Chiste numero {props.numero}: {props.inicio}. {props.fin}</h3>    
    </div>
  );
}

export default Joke;
