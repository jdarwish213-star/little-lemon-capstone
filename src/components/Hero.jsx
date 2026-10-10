function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>Little Lemon</h1>

        <h2>Mediterranean Kitchen</h2>

        <p>
          Fresh Mediterranean flavors, delicious dishes,
          and a warm dining experience for everyone.
        </p>

        <a href="#reservations" className="hero-button">
          Reserve a Table
        </a>

      </div>

      <div className="hero-image">
        <img
          src="/images/restaurant.jpg"
          alt="Little Lemon restaurant overlooking the sea"
        />
      </div>

    </section>
  );
}

export default Hero;