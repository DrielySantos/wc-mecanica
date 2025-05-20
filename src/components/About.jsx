import React from "react";
import ImageCarousel from "./ImageCarousel";

const About = () =>{
    return(
        <section style={styles.sobre} id="sobre">
            <h2 style={styles.sobreTitulo}>Sobre nós</h2>
            <p style={styles.sobreParagrafo}>Na Mecânica WC, oferecemos serviços de alta qualidade   para garantir que seu carro esteja sempre em ótimo estado. Nossa equipe é composta por profissionais experientes e dedicados. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum harum perferendis expedita odit optio iste at nulla voluptatibus repellendus dolor natus hic, quaerat ipsam fugit culpa itaque nihil placeat blanditiis.
            </p>
            <ImageCarousel/>
        </section>
        
    )
}

const styles = {
    sobre:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "30px 15px",
        backgroundColor: "#f9f9f9",
    },
    sobreTitulo:{
        fontSize: "25px",
        marginBottom: "10px",
        color: "#4d4c4c",
    },
    sobreParagrafo: {
        padding: "10px",
        width: "100%",
        maxWidth: "800px",
        fontSize: "1rem",
        margin: "0 auto",
        textAlign: "justify",
        color: "#555",
        lineHeight: "1.5",

    }
}

export default About;
