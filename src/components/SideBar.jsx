function SideBar() {
  return (
    <section class="about-me">
      <div class="wrapper about-me__wrapper">
        <div class="about-me__photo">
          <img src="/assets/sideBar/photo.jpg" alt="avatar" class="about-me__avatar" />
        </div>

        <h1 class="about-me__name">Igor Kupreev</h1>
        <span class="about-me__job">Frontend Developer</span>
        <p class="about-me__description">
          High level experience in web design and development knowledge.
        </p>
        <div class="about-me__social-links">
          <a href="#" class="about-me__social-link social-link">
            <img src="/assets/sideBar/TW.svg" alt="twitter" class="social-link__icon" />
          </a>
          <a href="#" class="about-me__social-link social-link">
            <img src="/assets/sideBar/FB.svg" alt="facebook" class="social-link__icon" />
          </a>
          <a href="#" class="about-me__social-link social-link">
            <img src="/assets/sideBar/Github.svg" alt="github" class="social-link__icon" />
          </a>
        </div>
        <button class="about-me__contact-me-btn">Contact Me</button>
      </div>
    </section>
  );
}

export default SideBar;
