function HeroVideo() {
    return (
        <section className="hero">
            <h1>Historias que inspiran</h1>
            <p>
                Cada mascota tiene una historia. Algunas esperan ser contadas contigo.
            </p>

            <div className="videoCard">
                <img
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
                    alt="hero"
                />

                <button className="play">▶</button>

                <div className="overlayText">
                    El viaje de Luna: de la calle a un hogar eterno
                </div>
            </div>
        </section>
    );
}


export default HeroVideo;

