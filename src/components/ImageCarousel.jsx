import React, {useState} from "react";
import foto1 from "../assets/images/foto1.jpg";
import foto2 from "../assets/images/foto2.jpg";
import foto3 from "../assets/images/foto3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";


const images = [foto1, foto2, foto3];

const ImageCarousel = () => {
    // Mantém o índice da imagem atual
    // useState é um hook do React que permite adicionar estado a um componente funcional    
    const [current, setCurrent] = useState(0);

    // Função para avançar para a próxima imagem
    const nextImage = () => setCurrent((current + 1) % images.length);
    // Função para voltar para a imagem anterior
    const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div style={styles.container}>
            <button onClick={prevImage} style={styles.button}>
                <ChevronLeft size={28} color="#ac3d3d" />
            </button> 
            <img src={images[current]} alt="Foto da loja em construção" style={styles.image} />

            <button onClick={nextImage} style={styles.button}>
                <ChevronRight size={28} color="#ac3d3d" />
            </button> 
        </div>
    );
};

const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      marginTop: "1.5rem",
      flexWrap: "wrap",
    },
    image: {
      width: "300px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    },
    button: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "5px",
    },
};



export default ImageCarousel;