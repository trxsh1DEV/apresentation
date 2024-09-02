const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="max-w-md w-full shadow-lg rounded-lg p-6">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-4xl leading-relaxed">
          Página não encontrada. Volte à página inicial ou verifique a URL.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
