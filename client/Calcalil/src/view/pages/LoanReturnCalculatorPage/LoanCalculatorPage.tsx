import React from 'react'
import { useState } from 'react'


const LoanCalculatorPage = () => {
const [isClicked, setIsClicked] = useState(false);
  return (
    <div id="calculator">
      <div id="parameters">
          <div id="monthOrSum">
            <span id='parameter'>לחשב את:</span>
            <button id='option1'>החזר חודשי</button>
            <button id='option2'>סכום ההלוואה</button>
          </div>
        <div id="method">
          <span id='parameter'>אופן החזר הלוואה</span>
          <button id='option1'>חזר קבוע (לוח שפיצר)</button>
          <button id='option2'>החזר קרן שווה</button>
        </div>
      </div>
      <div id="form-window">
        <span>סכום הלוואה</span>
        <span>החזר חודשי</span>
        <input type="text" placeholder='שקל' />
        <span>תקופת הלוואה</span>
        <input type="number" placeholder='חודשים'/>
        <span>אחוז הריבית</span>
        <input type="number" placeholder='%' />
        <span>החזר חודשי</span>
        <span>סכום הלוואה</span>
        <span></span>
        <button type='submit'>חשב</button>
     </div>
    </div>
  )
}

export default LoanCalculatorPage