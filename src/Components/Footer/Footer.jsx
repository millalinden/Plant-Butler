import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerInfo">
        <Link className="firstPart" to="/AboutUs#whoWeAre">
          Who we are
        </Link>

        <Link className="secondPart" to="/AboutUs#whereToFindUs">
          Where to find us
        </Link>

        <Link className="thirdPart" to="/AboutUs#keepInTouch">
          Keep in touch
        </Link>
      </div>
    </>
  );
};

export default Footer;
