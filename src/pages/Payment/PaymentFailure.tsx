import { FC } from "react";
import { Link } from "react-router-dom";

const PaymentFailurePage: FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4 text-black">Falha no pagamento</h1>
      <p className="text-red-500 mb-4">
        Lamentamos, mas não foi possível processar o seu pagamento. Por favor,
        tente novamente ou entre em contato com o suporte se o problema
        persistir.
      </p>
      <Link
        to="/payment"
        className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Tente novamente
      </Link>
    </div>
  );
};

export default PaymentFailurePage;
