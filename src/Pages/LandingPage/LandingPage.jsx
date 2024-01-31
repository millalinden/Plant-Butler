// -----------------------------------------------------------------------------
// LANDING PAGE WHERE THE USER CAN GO TO EITHER SHOP OR Q&A
// -----------------------------------------------------------------------------

import styles from "./LandingPage.module.css";
function LandingPage() {
  return (
    <div>
      <main className={styles.landing}>
        <h1>Plants Butler</h1>
        <br />
        <h2>Hello plant lover! </h2>
        <h2>What do you want to do today?</h2>
        <nav className={styles.landingBtnContainer}>
          <button className={styles.landingBtn}>Shop</button>
          <button className={styles.landingBtn}>Plant detective</button>
          <button className={styles.landingBtn}>Keep in touch</button>
        </nav>
      </main>
    </div>
  );
}
export default LandingPage;
