function Menu() {
  const dishes = [
    {
      name: "Greek Salad",
      price: "$12.99",
      description:
        "Fresh vegetables, feta cheese, olives, and a delicious Mediterranean dressing.",
      image: "/images/greek-salad.jpg",
    },
    {
      name: "Bruschetta",
      price: "$8.99",
      description:
        "Grilled bread topped with fresh tomatoes, basil, garlic, and olive oil.",
      image: "/images/bruschetta.jpg",
    },
    {
      name: "Lemon Dessert",
      price: "$6.99",
      description:
        "A refreshing homemade lemon dessert with a sweet and creamy flavor.",
      image: "/images/lemon-dessert.jpg",
    },
  ];

  return (
    <section className="menu" id="menu">

      <div className="menu-header">
        <h2>Our Menu</h2>

        <p>
          Discover our selection of fresh Mediterranean dishes,
          prepared with quality ingredients and lots of flavor.
        </p>
      </div>

      <div className="menu-cards">

        {dishes.map((dish) => (
          <article className="menu-card" key={dish.name}>

            <img
              src={dish.image}
              alt={dish.name}
            />

            <div className="menu-card-content">

              <div className="menu-card-title">
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
              </div>

              <p>{dish.description}</p>

              <button type="button">
                Order Now
              </button>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Menu;