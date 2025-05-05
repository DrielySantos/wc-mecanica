import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () =>{
    return(
        <a href="https://wa.me/5521983844493?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer" 
        style={{
            position: 'fixed',
            bottom: '15px',
            right: '15px',
            backgroundColor: '#25D366',
            color: 'white',
            padding: '10px 12px',
            borderRadius: '50%',
            textDecoration: 'none',
            fontSize: '11px',
            zIndex: 1000,
          }}>
            <FaWhatsapp size={30} />

        </a>
    )
}

export default WhatsAppButton;