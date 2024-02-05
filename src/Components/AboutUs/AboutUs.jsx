import { useEffect } from "react";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    scroller.scrollTo(window.location.hash.replace("#", ""), {
      smooth: true,
      offset: -20,
    });
  }, []);

  return (
    <>
      <div className="containerHomePageBtn">
        <Link to="/">
          <button className="HomePageBtn">Back to Home page</button>
        </Link>
      </div>
      <div className="aboutUs">
        <section id="whoWeAre" className="who">
          <h2>Who we are</h2>
          <p>
            We are <strong>Maryana, Milla, Petra, and Setayesh</strong> — a team
            of women who built this site during our React course at Hyper Island
            in 2024. The motivation behind this project was to go beyond meeting
            the course goals; we aimed to learn and showcases our technical
            proficiency but also bring a sense of pride for our portfolios. The
            project gave us the opportunity to learn more about dynamic
            interfaces, component state, hooks, and API data retrieval. Our
            journey wasn't just about hard skills; it strengthened teamwork and
            soft skills. We take pride in completing this project as a cohesive
            team, and we're delighted that our efforts have resulted in
            something we can truly be proud of.
          </p>
        </section>
        <section id="whereToFindUs" className="where">
          <h2>Where to find us</h2>
          <p>Hyper Island</p>
          <a
            href="https://google.com/maps/@59.3014028,18.0906292,3a,75y,134.51h,90t/data=!3m7!1e1!3m5!1sJNoTmYkXDpe2x2ZTVlIiVg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DJNoTmYkXDpe2x2ZTVlIiVg%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D134.51308%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu"
            target="_blank"
          >
            Virkesvägen 2, Stockholm 120 30
          </a>
        </section>
        <section className="how">
          <Element name="keepInTouch">
            <h2>Keep in touch</h2>
          </Element>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/milla-lind%C3%A9n-8b969b169/"
                target="_blank"
              >
                Milla Linden
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/setayesh-nouri-9776b5222/"
                target="_blank"
              >
                Setayesh Nouri
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/petra-milicevic-3321b71aa/"
                target="_blank"
              >
                Petra Milicevic
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/maryana-reznychenko-255666154/"
                target="_blank"
              >
                Maryana Reznychenko
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
