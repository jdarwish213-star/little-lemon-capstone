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
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        alt="Delicious Mediterranean Dish" />
      </div>

    </section>
  );
}

export default Hero;