function Header() {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <a href="#" className="header__logo-block">
          <span>Igor Kupreev</span>
        </a>
        <div className="header__nav-block">
          <nav className="header__main-nav">
            <a href="#" className="header__link">
              ABOUT
            </a>
            <a href="#" className="header__link">
              SKILLS
            </a>
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
