import { Droplet, ActivityIcon, ClipboardCheckIcon, SettingsIcon, RotateCcwIcon, PenToolIcon } from "lucide-react";
import React from "react";

const Services = () => {
    return(
        <section style={styles.container} id="servicos">
            <h2 style={styles.titulo}>Serviços</h2>
                <ul className="servicos-lista">
                    <li><Droplet color="#241e8e" size={25} style={{ marginRight: "6px" }} />Troca de óleo</li>
                    <li><ActivityIcon color="#241e8e" size={20} style={{ marginRight: "6px"}} />Balanceamento</li>
                    <li><ClipboardCheckIcon color="#241e8e" size={20} style={{ marginRight: "6px"}} />Revisão completa</li>
                    <li><SettingsIcon color="#241e8e" size={20} style={{ marginRight: "6px"}} />Freios e suspensão</li>
                    <li><RotateCcwIcon color="#241e8e" size={20} style={{ marginRight: "6px"}} />Troca de pneus</li>
                    <li><PenToolIcon color="#241e8e" size={20} style={{ marginRight: "6px"}} />Outros</li>
                </ul>

        </section>
    );
};

const styles = {
    container:{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px 20px",
        backgroundColor: "#fff",
    },
    titulo:{
        display: "flex",
        justifyContent: "center",
        textAling: "center",
        color: "#4d4c4c",
        fontSize: "30px",
        marginBottom: "10px",
    },
};

export default Services;