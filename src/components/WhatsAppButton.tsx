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
    <svg className="whatsapp-icon" viewBox="0 0 32 32">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.33-.803.33-1.52.24-1.674-.09-.153-.32-.24-.6-.24-.017 0-.017 0 0 0zM16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z" fillRule="evenodd" fill="currentColor"/>
    </svg>
  </a>
);

export default WhatsAppButton; 