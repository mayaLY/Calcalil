import React from 'react'
import { useState } from 'react'


const LoanCalculatorPage = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="calculator">LoanReturnCalculatorPage
      <div id="parameters">
        <div id="monthOrSum">
        <span>לחשב את:</span>
        <button>החזר חודשי</button>
        <button>סכום ההלוואה</button>
        </div>
        <div id="method">
          <span>אופן החזר הלוואה</span>
          <button>חזר קבוע (לוח שפיצר)</button>
          <button>החזר קרן שווה</button>
        </div>
      
      </div>
      <div id="form-window"></div>
    
    
    </div>
  )
}

export default LoanCalculatorPage