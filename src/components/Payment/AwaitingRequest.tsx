function AwaitingRequest() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-3xl mx-auto bg-red-600 h-72 shadow-white-light">
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing
      </div>
    </div>
  );
}

export default AwaitingRequest;
