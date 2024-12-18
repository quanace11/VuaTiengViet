const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Oops! Something went wrong
        </h1>
        <p className="mt-4">Please try logging in again or contact support.</p>
        <button
          onClick={() => (window.location.href = '/login')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
};
export default ErrorPage;
