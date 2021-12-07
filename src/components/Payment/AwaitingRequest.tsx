function AwaitingRequest() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-3xl mx-auto bg-red-600 h-72 shadow-white-light">
        <div>
          <div className="border-top-color:transparent w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
        </div>
        Processing
      </div>
    </div>
  );
}

export default AwaitingRequest;
