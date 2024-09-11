import requestWithToken from "@/utils/request";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccessPage: FC = () => {
  const [verificationStatus, setVerificationStatus] =
    useState<string>("verifying");
  const location = useLocation();

  useEffect(() => {
    const verifyPayment = async () => {
      const params = new URLSearchParams(location.search);
      const sessionId = params.get("session_id");

      if (sessionId) {
        try {
          const response = await requestWithToken.get(
            `/payment/verify-session?session_id=${sessionId}`
          );
          setVerificationStatus(response.data.status);
        } catch (error) {
          console.error("Error verifying payment:", error);
          setVerificationStatus("error");
        }
      } else {
        setVerificationStatus("error");
      }
    };

    verifyPayment();
  }, [location]);

  return (
    <div className="max-w-lg w-full mx-auto mt-10 p-6 rounded-lg shadow-xl text-center ">
      <h1 className="font-bold mb-4 text-4xl">Status de pagamento</h1>
      {verificationStatus === "verifying" && (
        <p className="text-yellow-500">Verifying your payment...</p>
      )}
      {verificationStatus === "success" && (
        <p className="text-green-500 text-2xl">
          Pagamento realizado com sucesso! Obrigado por confiar na nossa solução
        </p>
      )}
      {verificationStatus === "error text-2xl" && (
        <p className="text-red-500">
          There was an error verifying your payment. Please contact support.
        </p>
      )}
    </div>
  );
};

export default PaymentSuccessPage;
