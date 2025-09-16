import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.scss";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ברוך הבא</h1>
      <p className={styles.subtitle}>בחר את המחשבון הרצוי:</p>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => navigate("/loan")}
        >
          מחשבון הלוואות
        </button>

        <button
          className={styles.button}
          onClick={() => navigate("/savings")}
        >
          מחשבון חיסכון
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
