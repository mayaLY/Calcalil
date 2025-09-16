// SavingsCalculatorVM.tsx
import { useState } from "react";

export type SavingsResult = {
  finalAmount: number;
  totalDeposited: number;
  earnedNet: number;    // interest after fees & tax
  earnedGross: number;  // interest before tax (after fees)
  taxPaid: number;
  feesPaid: number;
};

export function useSavingsCalculatorPageVM() {
  const [calcType, setCalcType] = useState<"oneTime" | "monthly">("oneTime");
  const [deposit, setDeposit] = useState<number | null>(null); // lump sum
  const [monthlyDeposit, setMonthlyDeposit] = useState<number | null>(null); // monthly
  const [interest, setInterest] = useState<number | null>(null); // annual %
  const [years, setYears] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(0); // tax % on interest (default 0)
  const [fee, setFee] = useState<number | null>(0); // annual management fee % (default 0)
  const [result, setResult] = useState<SavingsResult | null>(null);

  function calculate() {
    const yrs = Math.max(0, Number(years || 0));
    const annualRate = Number(interest || 0) / 100;
    const monthlyRate = annualRate / 12;
    const totalMonths = Math.round(yrs * 12);
    const feeRate = Number(fee || 0) / 100; // yearly %
    const taxRate = Number(tax || 0) / 100;

    // defensive early exits
    if (yrs <= 0 || (calcType === "oneTime" && !deposit && deposit !== 0) ||
        (calcType === "monthly" && !monthlyDeposit && monthlyDeposit !== 0)) {
      setResult(null);
      return;
    }

    let balance = 0;
    let feesPaid = 0;
    let totalDeposited = 0;

    if (calcType === "oneTime") {
      const P = Number(deposit || 0);
      balance = P;
      totalDeposited = P;

      for (let m = 1; m <= totalMonths; m++) {
        // monthly compounding
        balance *= 1 + monthlyRate;

        // apply yearly fee at end of each 12 months
        if (m % 12 === 0 && feeRate > 0) {
          const yearlyFee = balance * feeRate;
          balance -= yearlyFee;
          feesPaid += yearlyFee;
        }
      }
    } else {
      // monthly deposits
      const PMT = Number(monthlyDeposit || 0);

      for (let m = 1; m <= totalMonths; m++) {
        // deposit at beginning of period (common approach) - if you want end-of-month change accordingly
        balance += PMT;
        totalDeposited += PMT;

        // monthly compounding
        balance *= 1 + monthlyRate;

        // year-end fee
        if (m % 12 === 0 && feeRate > 0) {
          const yearlyFee = balance * feeRate;
          balance -= yearlyFee;
          feesPaid += yearlyFee;
        }
      }
    }

    // earned BEFORE tax but AFTER fees (balance already had fees deducted)
    const earnedBeforeTax = balance - totalDeposited;
    const taxPaid = Math.max(0, earnedBeforeTax) * taxRate;
    const finalAmount = balance - taxPaid;
    const earnedNet = earnedBeforeTax - taxPaid;

    setResult({
      finalAmount,
      totalDeposited,
      earnedNet,
      earnedGross: earnedBeforeTax,
      taxPaid,
      feesPaid,
    });
  }

  return {
    calcType,
    setCalcType,
    deposit,
    setDeposit,
    monthlyDeposit,
    setMonthlyDeposit,
    interest,
    setInterest,
    years,
    setYears,
    tax,
    setTax,
    fee,
    setFee,
    result,
    calculate,
  };
}
