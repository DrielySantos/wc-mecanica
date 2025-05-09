import React from 'react';

function Footer() {
    return (
      <footer style={styles.footer}>
        <p>Este site foi desenvolvido por <a href="https://www.linkedin.com/in/drielysantos/" className='footerLink'>Driely Santos</a>✌️</p>
      </footer>
    );
}

const styles = {
  footer:{
    backgroundColor: "#000000d4",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    // position: "fixed",
  },
  
}
export default Footer;
  