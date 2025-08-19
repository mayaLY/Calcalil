import React from 'react'
import { useState } from 'react'
import styles from './LoanCalculatorPage.module.scss';

const LoanCalculatorPage = () => {
const [isClicked, setIsClicked] = useState(false);
const [isSpizer, setIsSpizer] = useState(false);
const [selectedOption, setSelectedOption] = useState<string | null>(null);
const [loanOption, setLoanOption] = useState<string | null>(null);
function setClick() {
    setIsClicked(!isClicked);
  }
function setSpizer() {
    setIsSpizer(!isSpizer);
  }
  return (
    <div className={styles.calculator}>
      <div className={styles.parameters}>
          <div className={styles.monthOrSum}>
            <span className={styles.parameter}>לחשב את:</span>
            <button className={`${styles.option} ${selectedOption === 'monthly' ? styles.active : ''}`} 
                onClick={() => { 
                  setClick();
                  setSelectedOption('monthly')}} >
                  חודשי
              </button>
            <button className={`${styles.option} ${selectedOption === 'loan' ? styles.active : ''}`}
                onClick={() => {
                 setClick();
                 setSelectedOption('loan');}}>
                  סכום ההלוואה
            </button>
          </div>
        <div className={styles.method}>
          <span className={styles.parameter}>אופן החזר הלוואה</span>
          <button className={`${styles.option} ${loanOption === 'spizer' ? styles.active : ''}`}
                onClick={() => {
                 setSpizer();
                 setLoanOption('spizer');}}>  חזר קבוע (לוח שפיצר)</button>
          <button className={`${styles.option} ${loanOption === 'keren' ? styles.active : ''}`}
                onClick={() => {
                 setSpizer();
                 setLoanOption('keren');}}>החזר קרן שווה</button>
        </div>
      </div>
      <div id={styles.formWindow}>
        <span className={isClicked? styles.show : styles.hide}>סכום הלוואה</span>
        <span className={isClicked? styles.hide : styles.show}>החזר חודשי</span>
        <input type="text" placeholder='שקל' />
        <span>תקופת הלוואה</span>
        <input type="number" placeholder='חודשים'/>
        <span>אחוז הריבית</span>
        <input type="number" placeholder='%' />
        <span className={isClicked? styles.show : styles.hide}>החזר חודשי</span>
        <span className={isClicked? styles.hide : styles.show}>סכום הלוואה</span>
        <span></span>
        <button type='submit'>חשב</button>
     </div>
    </div>
  )
}

export default LoanCalculatorPage