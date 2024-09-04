import { Button } from "@/components/ui/button";
import { UnexpectedError } from "./UnexpectedError";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: () => void;
}) => {
  // Verifica se o erro é uma instância de UnexpectedError
  const errorMessage =
    error instanceof UnexpectedError
      ? error.message
      : error.response?.data?.message || error.message;

  return (
    <section className="h-screen flex justify-center items-center flex-col">
      <h2 className="text-3xl mb-10">Vish, algo deu errado!</h2>
      <pre className="text-xl mb-10">{errorMessage}</pre>

      <Button className="text-lg" onClick={resetErrorBoundary}>
        Tentar novamente
      </Button>
    </section>
  );
};
