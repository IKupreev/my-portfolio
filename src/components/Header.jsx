import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Link to="/" className="header__logo-block">
          <span>Igor Kupreev</span>
        </Link>
        <div className="header__nav-block">
          <nav className="header__main-nav">
            <Link to="/" className="header__link">
              ABOUT
            </Link>
            <Link to="/skills" className="header__link">
              SKILLS
            </Link>
            <a href="#" className="header__link">
              SERVICES
            </a>
            <a href="#" className="header__link">
              PORTFOLIO
            </a>
          </nav>
          <div className="header__night-switcher">
            <button className="header__night-switcher-btn"></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
