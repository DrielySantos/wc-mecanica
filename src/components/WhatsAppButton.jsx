import React from 'react';

const WhatsAppButton = () =>{
    return(
        <a href="https://api.whatsapp.com/send?phone=5521983844493"
        target="_blank"
        rel="noopener noreferrer" 
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#25D366',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '50%',
            textDecoration: 'none',
            fontSize: '24px',
            zIndex: 1000,
          }}>
             💬
            {/* <i className="fab fa-whatsapp"></i>
            <span style={{ marginLeft: '8px' }}>Chat with us</span> */}

        </a>
    )
}

export default WhatsAppButton;