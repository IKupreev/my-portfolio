function Header() {
  return (
    <header class="header">
      <div class="wrapper header__wrapper">
        <a href="#" class="header__logo-block">
          <span>Igor Kupreev</span>
        </a>
        <div class="header__nav-block">
          <nav class="header__main-nav">
            <a href="#" class="header__link">
              ABOUT
            </a>
            <a href="#" class="header__link">
              SKILLS
            </a>
            <a href="#" class="header__link">
              SERVICES
            </a>
            <a href="#" class="header__link">
              PORTFOLIO
            </a>
          </nav>
          <div class="header__night-switcher">
            <button class="header__night-switcher-btn"></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
