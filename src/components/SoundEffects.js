// components/SoundEffects.js
import React, { useRef } from "react";

export default function SoundEffects() {
    const clickRef = useRef(null);
    const hoverRef = useRef(null);

    // Joue le son au clic
    const playClick = () => {
        if (clickRef.current) {
            clickRef.current.currentTime = 0;
            clickRef.current.play();
        }
    };

    // Joue le son au survol
    const playHover = () => {
        if (hoverRef.current) {
            hoverRef.current.currentTime = 0;
            hoverRef.current.play();
        }
    };

    // Ajoute ces handlers sur les boutons/menu en leur passant playClick/playHover
    return (
        <>
            <audio ref={clickRef} src="/audio/click.mp3" preload="auto" />
            <audio ref={hoverRef} src="/audio/hover.mp3" preload="auto" />
            {/* Exemple d'utilisation */}
            <button
                onClick={playClick}
                onMouseEnter={playHover}
                className="play-btn"
                style={{ marginTop: "2em" }}
            >
                ▶
            </button>
        </>
    );
}
