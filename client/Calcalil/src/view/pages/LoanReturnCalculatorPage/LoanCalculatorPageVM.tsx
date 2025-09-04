import { useState } from "react";

export function useLoanCalculatorVM() {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

 
  const [loanOption, setLoanOption] = useState<string | null>(null);


  const isClicked = selectedOption !== null;

  const chooseCalculationType = (option: "monthly" | "loan") => {
    setSelectedOption(option);
  };

  const chooseRepaymentMethod = (method: "spizer" | "keren") => {
    setLoanOption(method);
  };

  return {
    isClicked,
    selectedOption,
    loanOption,
    chooseCalculationType,
    chooseRepaymentMethod,
  };
}
