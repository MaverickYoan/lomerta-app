import React, { useRef, useState } from "react";
import "./AudioPlayer.css";

export default function AudioPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    return (
        <div className="audio-player">
            <button className="play-btn" onClick={togglePlay}>
                {playing ? (
                    <span>&#10073;&#10073;</span>
                ) : (
                    <span>&#9654;</span>
                )}
            </button>
            <audio ref={audioRef} src="lomerta-app\public\audio\TeK2OuF_l'dicton_rap_freestyle_3min40.mp3" />
        </div>
    );
}
