import React from "react";
import styles from "./LoanCalculatorPage.module.scss";
import { useLoanCalculatorVM } from "./LoanCalculatorPageVM";

const LoanCalculatorPage = () => {
  const {
    isClicked,
    selectedOption,
    loanOption,
    chooseCalculationType,
    chooseRepaymentMethod,
  } = useLoanCalculatorVM();

  return (
    <div className={styles.calculator}>
      <div className={styles.parameters}>
        <div className={styles.monthOrSum}>
          <span className={styles.parameter}>לחשב את:</span>
          <button
            className={`${styles.option} ${
              selectedOption === "monthly" ? styles.active : ""
            }`}
            onClick={() => chooseCalculationType("monthly")}
          >
            חודשי
          </button>
          <button
            className={`${styles.option} ${
              selectedOption === "loan" ? styles.active : ""
            }`}
            onClick={() => chooseCalculationType("loan")}
          >
            סכום ההלוואה
          </button>
        </div>

        <div className={styles.method}>
          <span className={styles.parameter}>אופן החזר הלוואה</span>
          <button
            className={`${styles.option} ${
              loanOption === "spizer" ? styles.active : ""
            }`}
            onClick={() => chooseRepaymentMethod("spizer")}
          >
            חזר קבוע (לוח שפיצר)
          </button>
          <button
            className={`${styles.option} ${
              loanOption === "keren" ? styles.active : ""
            }`}
            onClick={() => chooseRepaymentMethod("keren")}
          >
            החזר קרן שווה
          </button>
        </div>
      </div>

      <div id={styles.formWindow}>
        <span className={isClicked && selectedOption === "loan" ? styles.show : styles.hide}>
          סכום הלוואה
        </span>
        <span className={isClicked && selectedOption === "monthly" ? styles.show : styles.hide}>
          החזר חודשי
        </span>
        <input type="text" placeholder="שקל" />

        <span>תקופת הלוואה</span>
        <input type="number" placeholder="חודשים" />

        <span>אחוז הריבית</span>
        <input type="number" placeholder="%" />

        <span className={isClicked && selectedOption === "loan" ? styles.show : styles.hide}>
          החזר חודשי
        </span>
        <span className={isClicked && selectedOption === "monthly" ? styles.show : styles.hide}>
          סכום הלוואה
        </span>

        <button type="submit">חשב</button>
      </div>
    </div>
  );
};

export default LoanCalculatorPage;
