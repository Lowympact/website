import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Phone from "../Components/Phone/Phone";

class Homepage extends React.Component {
    render = () => {
        return (
            <div className="homepage-container">
                <Navbar />
                <Phone />
                <div className="video-container">
                    <h2>Découvre l'impact environnemental des produits</h2>
                    <div className="video-frame-container">
                        <div className="video-wrapper">
                            <div className="video"></div>
                        </div>
                        <div className="text-video-wrapper">
                            <h3>Analyse ton impact carbone</h3>
                            <p>
                                Vous êtes producteur ? Contactez-nous pour partager vos
                                informations, et mettre vos produits locaux en valeur
                            </p>
                            <h3>Des milliers de produits à scanner</h3>
                            <p>
                                Vous êtes producteur ? Contactez-nous pour partager vos
                                informations, et mettre vos produits locaux en valeur
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Homepage;
