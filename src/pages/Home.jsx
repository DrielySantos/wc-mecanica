import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';

function Home() {
    return (
        <main>
            <Banner />
            <Services />

            <section style={styles.sobre}>
                <h2 style={styles.sobreTitulo}>Sobre nós</h2>
                <p style={styles.sobreParagrafo}>Na Mecânica WC, oferecemos serviços de alta qualidade para garantir que seu carro esteja sempre em ótimo estado. Nossa equipe é composta por profissionais experientes e dedicados.</p>
            </section>
        </main>

    );
  }
  
  const styles = {
    servicos:{
        padding: "30px 20px",
        backgroundColor: "#fff"
    },
    servicosTitulo:{
        color: "#4d4c4c",
        fontSize: "22px",
        marginBottom: "10px",
    },
    servicosLista:{
        listStyle: "none",
        padding: 0,
        color: "#333",
        fontSize: "16px",
        lineHeight: "1.6",
    },
    sobre:{
        padding: "30px 20px",
        backgroundColor: "#f9f9f9",
    },
    sobreTitulo:{
        fontSize: "22px",
        marginBottom: "10px",
    },
    sobreParagrafo: {
        fontSize: "16px",
        color: "#555",
        lineHeight: "1.5",
    }
}

  
export default Home;
  