"use client";
import React from 'react';
import '../scss/WhatsAppButton.scss';

const whatsappLink = 'https://wa.me/522722968204?text=Hola%20Cyber%20C%C3%B3digo%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!';

const WhatsAppButton = () => (
  <a
    href={whatsappLink}
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chatea por WhatsApp"
    title="Chatea por WhatsApp"
  >
    <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M19.34,4.66A10,10,0,0,0,5.45,18.54L4,20l1.46-1.45A10,10,0,1,0,19.34,4.66ZM12,20.08A8.09,8.09,0,0,1,6.34,18.2l-.23-.14-1.63.43.44-1.61-.15-.24A8.09,8.09,0,1,1,12,20.08ZM16.57,14.65C16.32,14.5,15,13.84,14.77,13.75s-.41-.09-.59.09-.67.84-.83,1s-.3.18-.54,0a7,7,0,0,1-2.4-1.47,7.6,7.6,0,0,1-1.69-2.35,.3.3,0,0,1,0-.31c.08-.1.18-.25.28-.35s.17-.18.25-.3.13-.25.19-.42s0-.31-.09-.42-.59-1.42-.8-1.92-.42-.42-.59-.42H8.43a.92.92,0,0,0-.79.37,3.34,3.34,0,0,0-1,2.46,5.33,5.33,0,0,0,1.18,3.32,11.52,11.52,0,0,0,5,4.35,4.52,4.52,0,0,0,3.2-.5.54.54,0,0,0,.43-.5,1.5,1.5,0,0,0-.09-.5Z"/>
    </svg>
  </a>
);

export default WhatsAppButton; 