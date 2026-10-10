function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Little Lemon</h2>
          <p>
            Fresh Mediterranean flavors, delicious dishes,
            and unforgettable moments.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Chicago, Illinois</p>
          <p>+1 555 123 4567</p>
          <p>littlelemon@example.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;