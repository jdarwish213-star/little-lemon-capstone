function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <h1>Little Lemon</h1>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#menu">Menu</a>
        </li>

        <li>
          <a href="#reservations">Reservations</a>
        </li>

        <li>
          <a href="#order">Order Online</a>
        </li>

        <li>
          <a href="#login">Login</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;