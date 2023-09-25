import React from "react";
import phoneIcon from "../images/contacts/phone-icon.png";
import mailIcon from "../images/contacts/mail-icon.png";

function Contact(props) {  
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phoneIcon} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Contact;
