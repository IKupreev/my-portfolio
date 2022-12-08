import twitterSVG from '../assets/img/sideBar/TW.svg';
import faceBookSVG from '../assets/img/sideBar/FB.svg';
import githubSVG from '../assets/img/sideBar/Github.svg';

function SocialLinksBlock() {
  return (
    <div className="about-me__social-links">
      <a href="#" className="about-me__social-link social-link">
        <img src={twitterSVG} alt="twitter" className="social-link__icon" />
      </a>
      <a href="#" className="about-me__social-link social-link">
        <img src={faceBookSVG} alt="facebook" className="social-link__icon" />
      </a>
      <a href="#" className="about-me__social-link social-link">
        <img src={githubSVG} alt="github" className="social-link__icon" />
      </a>
    </div>
  );
}

export default SocialLinksBlock;
