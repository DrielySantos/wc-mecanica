import React from 'react';

function Footer() {
    return (
      <footer style={styles.footer}>
        <p>Este site foi desenvolvido por 
          <a href="https://www.linkedin.com/in/drielysantos/" className='footerLink'>Driely Santos</a>✌️</p>
      </footer>
    );
}

const styles = {
  footer:{
    backgroundColor: "#2f80e2d3",
    color: "#ffffff",
    textAlign: "center",
    fontSize: "1.1rem",
    padding: "10px",
  },
  
}
export default Footer;
  