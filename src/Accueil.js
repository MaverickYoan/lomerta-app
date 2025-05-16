import React from "react";
import AudioPlayer from "./components/AudioPlayer";

export default function Accueil() {
    return (
        <div className="accueil">
            <h1>L'OMERTA</h1>
            <div className="circle">
                <span>25 ANS<br />D'ATTENTE</span>
            </div>
            <h2>
                LE RESPECT<br />
                <small>AVANT TOUT</small>
            </h2>
            <p className="auteur"><i>Tek2ouf</i></p>
            <AudioPlayer />
        </div>
    );
}
