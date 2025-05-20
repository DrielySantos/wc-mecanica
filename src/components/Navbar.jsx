import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowLogo(false); // Rolando pra baixo
      } else {
        setShowLogo(true); // Rolando pra cima ou no topo
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav style={{
    ...styles.navbar,
    height: isScrolled ? "60px" : "100px",
    transition: "height 0.3s ease",
  }}>

      <div style={styles.container}>
        {/* Logo com transição suave */}
        <div
        // ... significa 
          style={{
            ...styles.logoContainer,
            opacity: showLogo ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <a href="#banner">
            <img src={logo} alt="Logo Wibracar" style={styles.logo} />
          </a>
        </div>

        <ul style={styles.menu}>
          <li><a href="#banner" style={styles.menuItem}>Início</a></li>
          <li><a href="#services" style={styles.menuItem}>Serviços</a></li>
          <li><a href="#about" style={styles.menuItem}>Sobre nós</a></li>
          <li><a href="#contato" style={styles.menuItem}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#e4dcdc",
    zIndex: 999,
    fontFamily: "sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  },
  container: {
    display: "flex",
    justifyContent: "space-evelyn",
    // flexDirection: "column",
    alignItems: "center",
    padding: "0 40px",
    height: "100%",
  },
  logoContainer: {
    width: "35%",
    // backgroundColor: "#000"
    // marginBottom: "10px",
    // height: "30px",
  },
  logo: {
    width: "90px",
    height: "auto",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s",
  },
};

export default Navbar;
