const loading = () => {
  return (
    <div className="grid grid-cols-12 gap-8 py-10 animate-pulse">
      <div className="col-span-3 space-y-4">
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded"></div>
      </div>
      <div className="col-span-9 space-y-6">
        <div className="h-48 bg-gray-300 rounded"></div>
        <div className="h-48 bg-gray-300 rounded"></div>
        <div className="h-48 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
export default loading;
