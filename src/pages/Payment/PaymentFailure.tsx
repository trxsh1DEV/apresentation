import { FC } from "react";
import { Link } from "react-router-dom";

const PaymentFailurePage: FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
      <p className="text-red-500 mb-4">
        We're sorry, but your payment could not be processed. Please try again
        or contact support if the problem persists.
      </p>
      <Link
        to="/payment"
        className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Try Again
      </Link>
    </div>
  );
};

export default PaymentFailurePage;
