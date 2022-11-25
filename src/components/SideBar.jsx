function SideBar() {
  return (
    <section className="about-me">
      <div className="wrapper about-me__wrapper">
        <div className="about-me__photo">
          <img src="" alt="avatar" className="about-me__avatar" />
        </div>
        <div className="about-me__name-job">
          <h1 className="about-me__name">Igor Kupreev</h1>
          <span className="about-me__job">Frontend Developer</span>
        </div>

        <p className="about-me__description">
          High level experience in web design and development knowledge.
        </p>
        <div className="about-me__social-links">
          <a href="#" className="about-me__social-link social-link">
            <img src="/assets/sideBar/TW.svg" alt="twitter" className="social-link__icon" />
          </a>
          <a href="#" className="about-me__social-link social-link">
            <img src="/assets/sideBar/FB.svg" alt="facebook" className="social-link__icon" />
          </a>
          <a href="#" className="about-me__social-link social-link">
            <img src="/assets/sideBar/Github.svg" alt="github" className="social-link__icon" />
          </a>
        </div>
        <button className="about-me__contact-me-btn">Contact Me</button>
      </div>
    </section>
  );
}

export default SideBar;
