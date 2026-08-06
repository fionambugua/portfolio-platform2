import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>MyPortfolio</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#add-project">Add Project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
