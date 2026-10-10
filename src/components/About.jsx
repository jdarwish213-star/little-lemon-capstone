function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <h2>About Little Lemon</h2>

        <p>
          Little Lemon is a family-owned Mediterranean restaurant
          dedicated to serving fresh, delicious food in a warm
          and welcoming atmosphere.
        </p>

        <p>
          Our menu brings together traditional Mediterranean flavors
          with a modern touch, using fresh ingredients and carefully
          prepared dishes.
        </p>

      </div>

      <div className="about-images">

        <img
          src="/images/restaurant-interior.jpg"
          alt="Interior of the Little Lemon restaurant"
        />

        <img
          src="/images/restaurant-chef.jpg"
          alt="Chef preparing food at Little Lemon"
        />

      </div>

    </section>
  );
}

export default About;