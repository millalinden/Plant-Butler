// -----------------------------------------------------------------------------
// LANDING PAGE WHERE THE USER CAN GO TO EITHER SHOP OR Q&A
// -----------------------------------------------------------------------------
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div>
      <main className={styles.landing}>
        
        <h1>Plant Butlers</h1>

        <br />
        <h2>Hello plant lover! </h2>
        <h2>What do you want to do today?</h2>
        <nav className={styles.landingBtnContainer}>
          <Link to="/Shop">
            <button className={styles.landingBtn}>Shop</button>
          </Link>
          <Link to="/PlantDetective">
            <button className={styles.landingBtn}>Plant detective</button>
          </Link>
          <Link to="/AboutUs">
            <button className={styles.landingBtn}>Keep in touch</button>
          </Link>
        </nav>
      </main>
    </div>
  );
}
export default LandingPage;
