const loading = () => {
  return (
    <div className="w-full mt-8 animate-pulse">
      <div className="h-8 bg-base-300 rounded w-1/3 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="stat bg-base-200 rounded-xl shadow-md p-4 space-y-2"
          >
            <div className="h-6 w-6 bg-base-300 rounded-full"></div>
            <div className="h-4 bg-base-300 rounded w-1/2"></div>
            <div className="h-6 bg-base-300 rounded w-2/3"></div>
            <div className="h-3 bg-base-300 rounded w-1/3"></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-base-200 p-6 rounded-xl shadow-md space-y-4">
          <div className="h-5 bg-base-300 rounded w-1/3"></div>
          <div className="flex justify-between items-end h-40 gap-2">
            {[30, 60, 40, 80].map((h, i) => (
              <div
                key={i}
                className="w-1/4 bg-base-300 rounded-t"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 bg-base-300 rounded-full"></div>
                <div className="h-3 w-20 bg-base-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow-md space-y-4">
          <div className="h-5 bg-base-300 rounded w-1/3"></div>
          <div className="relative h-40 flex items-end gap-[2px]">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-base-300 rounded-t"
                style={{ width: "8%", height: `${Math.random() * 80 + 10}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between text-xs mt-2">
            {["Jan", "Apr", "Jul", "Oct", "Dec"].map((label, i) => (
              <span key={i} className="bg-base-300 w-6 h-3 rounded"></span>
            ))}
          </div>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow-md space-y-4 flex flex-col items-center">
          <div className="h-5 bg-base-300 rounded w-1/2 mb-4"></div>
          <div className="w-32 h-32 rounded-full bg-base-300"></div>
          <div className="w-24 h-4 bg-base-300 rounded mt-2"></div>
        </div>
      </div>
    </div>
  );
};
export default loading;
