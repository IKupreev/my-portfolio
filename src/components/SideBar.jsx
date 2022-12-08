import SocialLinksBlock from './SocialLinksBlock';

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
        <SocialLinksBlock />
        <button className="about-me__contact-me-btn">Contact Me</button>
      </div>
    </section>
  );
}

export default SideBar;
