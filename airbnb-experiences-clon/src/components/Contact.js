import React from "react";
import phoneIcon from "../images/contacts/phone-icon.png";
import mailIcon from "../images/contacts/mail-icon.png";

function Contact({img,name,phone,email}) {  
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} />
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Contact;
