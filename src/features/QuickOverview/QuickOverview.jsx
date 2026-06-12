import LatestProducts from "./components/LastProducts";
import LastUsers from "./components/LastUsers";

function QuickOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 p-4 md:p-6 xl:p-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          <div className="lg:col-span-8">
            <LatestProducts />
          </div>
          <div className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start">
            <LastUsers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickOverview;
