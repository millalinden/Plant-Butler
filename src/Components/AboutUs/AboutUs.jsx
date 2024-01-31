import { useEffect } from "react";
import { Element, animateScroll as scroll, scroller } from "react-scroll";

const AboutUs = () => {
  useEffect(() => {
    scroller.scrollTo(window.location.hash.replace("#", ""), {
      smooth: true,
      offset: -20,
    });
  }, []);

  return (
    <>
      <div className="aboutUs">
        <button className="HomePageBtn">Back to Home page</button>

        <div id="whoWeAre" className="who">
          <h2>Who we are</h2>
          <p>
            We are Maryana Reznychenko, Milla Lindén, Petra Milicevic, and
            Setayesh Nouri — a team of women who built this site during our
            React course at Hyper Island in 2024. The motivation behind this
            project was to go beyond meeting the course goals; we aimed to learn
            and showcases our technical proficiency but also bring a sense of
            pride for our portfolios. The project gave us the opportunity to
            learn more about dynamic interfaces, component state, hooks, and API
            data retrieval. Our journey wasn't just about hard skills; it
            strengthened teamwork and soft skills. We take pride in completing
            this project as a cohesive team, and we're delighted that our
            efforts have resulted in something we can truly be proud of.
          </p>
        </div>
        <div id="whereToFindUs" className="where">
          <h2>Where to find us</h2>
          <p>Hyper island</p>
        </div>
        <div className="how">
          <Element name="keepInTouch">
            <h2>Keep in touch</h2>
          </Element>
          <a
            href="https://www.linkedin.com/in/maryana-reznychenko-255666154/"
            target="_blank"
          >
            Maryana Reznychenko
          </a>
          <a
            href="https://www.linkedin.com/in/milla-lind%C3%A9n-8b969b169/"
            target="_blank"
          >
            Milla Linden
          </a>
          <a
            href="https://www.linkedin.com/in/setayesh-nouri-9776b5222/"
            target="_blank"
          >
            Setayesh Nouri
          </a>
          <a
            href="https://www.linkedin.com/in/petra-milicevic-3321b71aa/"
            target="_blank"
          >
            Petra Milicevic
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
