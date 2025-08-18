import { createBrowserRouter } from "react-router-dom";
import LoanCalculatorPage from "./view/pages/LoanReturnCalculatorPage/LoanCalculatorPage";

export const router = createBrowserRouter([
{
    path: "/",
    element: <LoanCalculatorPage />,
   // errorElement:<ErrorPage />
  },


    ]);
