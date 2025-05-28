import { ArrowLeft, Calendar, Tag } from "lucide-react";

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 animate-pulse mt-30">
      <div className="flex items-center gap-2 mb-6">
        <ArrowLeft size={16} />
        <div className="h-4 w-32 bg-base-300 rounded"></div>
      </div>

      <div className="mb-8">
        <div className="h-10 w-3/4 bg-base-300 rounded mb-4"></div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <div className="h-4 w-24 bg-base-300 rounded"></div>
          </div>
          <div className="badge gap-1 bg-base-300 text-transparent">
            <Tag size={14} />
            Loading
          </div>
        </div>
      </div>

      <div className="relative w-full h-[500px] mb-8 bg-base-300 rounded-xl"></div>

      <div className="bg-base-200 p-6 rounded-xl mb-8 space-y-2">
        <div className="h-6 w-24 bg-base-300 rounded"></div>
        <div className="h-4 w-full bg-base-300 rounded"></div>
        <div className="h-4 w-3/4 bg-base-300 rounded"></div>
      </div>

      <div className="space-y-4">
        <div className="h-4 w-full bg-base-300 rounded"></div>
        <div className="h-4 w-5/6 bg-base-300 rounded"></div>
        <div className="h-4 w-3/4 bg-base-300 rounded"></div>
        <div className="h-4 w-full bg-base-300 rounded"></div>
        <div className="h-4 w-4/6 bg-base-300 rounded"></div>
      </div>
    </div>
  );
}
