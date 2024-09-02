const DevelopmentFeature = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="max-w-xl w-full shadow-lg rounded-lg p-6">
        <h1 className="text-5xl font-bold ">Em Desenvolvimento</h1>
        <p className="mt-4 text-2xl leading-relaxed">
          Esta funcionalidade está em desenvolvimento. Volte mais tarde para
          mais informações.
        </p>
        <div className="mt-8">
          <svg
            className="mx-auto h-24 w-24 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v9.75m-4.5-4.5h9m-6 12a9 9 0 11-9-9 9 9 0 019 9z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentFeature;
