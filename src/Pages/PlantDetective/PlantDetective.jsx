import React, { useState } from "react";
import useFetchApi from "../../Hooks/useFetchApi/useFetchApi";
import styles from "./PlantDetective.module.css";
import Footer from "../../Components/Footer/Footer";

export default function PlantDetective() {
  const [plantName, setPlantName] = useState("");
  const { plants, loading, error, fetchData } = useFetchApi();

  const handleFetchData = () => {
    fetchData(plantName);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Plant Detective</h2>
      <p className={styles.intro}>
        Your plant care go-to! Search your beloved home plant, get instant
        origin info & personalized care tips. Unlock secrets to plant mastery -
        easy for beginners, ideal for enthusiasts!
      </p>
      <input
        type="text"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
        className={styles.input}
        placeholder="Ex... Dorstenia"
        style={{ fontStyle: "italic" }}
      />
      <button className={styles.btn} onClick={handleFetchData}>
        search plant
      </button>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {plants && (
        <div className={styles.card}>
          <h3>{plants.Name}</h3>
          <img
            src={plants.Image}
            alt={plants.Name}
            width={100}
            height={100}
            className={styles.img}
          />
          <h3>Origin:</h3>
          <li>{plants.Origin}</li>
          <h3>Size:</h3>
          <li>{plants.Size}</li>
          <h3>How to best care for {plants.Name}?</h3>
          <h3>Lighting:</h3>
          <li>{plants.Lighting}</li>
          <h3>Watering:</h3>
          <li>{plants.Watering}</li>
          <h3>Replanting:</h3>
          <li>{plants.Transfer}</li>
        </div>
      )}
      <Footer />
    </div>
  );
}
