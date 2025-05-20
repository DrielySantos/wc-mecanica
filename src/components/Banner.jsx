import React from "react";
import banner from "../assets/banner.png";

const Banner = () =>{
    return(
        <section style={styles.banner}>
            <div style={styles.overlay}></div>
            <img src={banner} alt="Banner" style={styles.image} />
            <div style={styles.texto}>
                <h1 style={styles.titulo}>Bem-vindo à WIBRACAR!</h1>
                <p style={styles.subtitulo}>Serviço rápido e confiável para o seu carro!</p>
                <a className="btnBanner" href="https://wa.me/5521983844493?text=Olá%2C%20gostaria%20de%20realizar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer">Faça o seu orçamento!</a>
            </div>
        </section>
    );
};

const styles = {
    banner:{
        position: "relative",
        width: "100%",
        height: "100px auto",
        overflow: "hidden",
    },
    image:{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
    },
    overlay:{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        zIndex: 1,
    },
    texto:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        textAlign: "center",
        zIndex: 2,
    },
    titulo:{
        fontSize: "2.2rem",
        margin: 0,
    },
    subtitulo:{
        fontSize: "1.2rem",
        margin: "15px auto"
    },
};

export default Banner;