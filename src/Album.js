import React from "react";

export default function Album() {
    return (
        <div className="album">
            <h1>Album</h1>
            <div className="album-list">
                <div className="album-item">Titre 1</div>
                <div className="album-item">Titre 2</div>
                <div className="album-item">Titre 3</div>
                {/* Ajoute ici la liste de tes morceaux */}
            </div>
        </div>
    );
}
