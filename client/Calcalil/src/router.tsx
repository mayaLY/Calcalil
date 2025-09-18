import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./view/pages/WelcomePage/WelcomePage";
import LoanCalculatorPage from "./view/pages/LoanReturnCalculatorPage/LoanCalculatorPage";
import SavingsCalculatorPage from "./view/pages/SavingsCalculatorPage/SavingsCalculatorPage";
import MortgageCalculatorPage from "./view/pages/MortgageCalculatorPage/MortgageCalculatorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/loan",
    element: <LoanCalculatorPage />,
  },
  {
    path: "/savings",
    element: <SavingsCalculatorPage />,
  },
 {
    path: "/mortgage",
    element: <MortgageCalculatorPage />,
  },
]);
