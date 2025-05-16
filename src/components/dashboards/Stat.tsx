import { getBlogs } from "@/services/blogService";
import { getVisitors } from "@/services/visitorService";
import {
  BarChart,
  LineChart,
  PieChart,
  Activity,
  AppWindowMac,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
const Stat = async () => {
  const blogs = await getBlogs();
  const visitors = await getVisitors();
  return (
    <div className="w-full my-8">
      <h1 className="text-3xl font-bold mb-6 text-highlight">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Visitors Stat */}
        <div className="stat bg-base-200 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="stat-figure text-primary">
            <AppWindowMac className="w-8 h-8" />
          </div>
          <div className="stat-title">Total Blogs</div>
          <div className="stat-value">{blogs.length}</div>
        </div>
        {/* Page Views Stat */}
        <div className="stat bg-base-200 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="stat-figure text-secondary">
            <Activity className="w-8 h-8" />
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value">{visitors.result.length}</div>
          <div className="stat-desc text-success">↗︎ 21% increase</div>
        </div>
        <div className="stat bg-base-200 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="stat-figure text-accent">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div className="stat-value">846</div>
          <div className="stat-desc text-error">↘︎ 5% decrease</div>
        </div>
        <div className="stat bg-base-200 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="stat-figure text-success">
            <DollarSign className="w-8 h-8" />
          </div>
          <div className="stat-title">Revenue</div>

          <div className="stat-value">$23.5K</div>

          <div className="stat-desc text-success">↗︎ 12% increase</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Traffic Sources</h3>
            <PieChart className="w-5 h-5 text-primary" />
          </div>
          <div className="flex justify-between items-end h-40 pt-2">
            <div className="w-1/4 bg-primary rounded-t-lg h-[30%]"></div>
            <div className="w-1/4 bg-secondary rounded-t-lg h-[60%]"></div>
            <div className="w-1/4 bg-accent rounded-t-lg h-[40%]"></div>
            <div className="w-1/4 bg-success rounded-t-lg h-[80%]"></div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Direct (30%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Social (60%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Referral (40%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Search (80%)</span>
            </div>
          </div>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Monthly Sales</h3>
            <LineChart className="w-5 h-5 text-primary" />
          </div>
          <div className="relative h-40">
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
              <div className="flex justify-between items-end w-full h-full">
                {[35, 55, 45, 65, 75, 55, 80, 90, 65, 75, 60, 70].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="w-1/12 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    ></div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs mt-2 text-base-content/70">
            <span>Jan</span>
            <span>Apr</span>
            <span>Jul</span>
            <span>Oct</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Conversion Rate</h3>
            <BarChart className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col justify-center items-center h-40">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-base-300 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>
                <circle
                  className="text-primary stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset="75.36"
                  transform="rotate(-90 50 50)"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold">70%</div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm mt-2">
            <div className="text-success">↗︎ 8% increase from last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
