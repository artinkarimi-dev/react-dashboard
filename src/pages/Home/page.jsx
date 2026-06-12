import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";
import { useNavigate } from "react-router-dom";
import ProductsTable from "../../features/ProductsTable/ProductsTable";
import SectionTitle from "../../components/common/SectionTitle";
import QuickOverview from "../../features/QuickOverview/QuickOverview";
import { useState } from "react";

function Home() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const CTAButton = () => {
    const clickHandler = () => {
      setIsRedirecting(!isRedirecting);

      setTimeout(() => {
        navigate("/products");
      }, 1500);
    };

    return (
      <button
        disabled={isRedirecting}
        className="
          font-sans
          bg-gradient-to-b from-green-400 to-green-800
          text-white px-4 py-2 sm:px-5 sm:py-2.5
          rounded-md
          hover:from-green-800 hover:to-green-400
          transition duration-300 ease-in-out
          flex items-center justify-center gap-2
          disabled:opacity-70
          cursor-pointer
          text-sm sm:text-base
          w-full sm:w-auto
        "
        onClick={clickHandler}
      >
        {isRedirecting ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            In Transit...
          </>
        ) : (
          "Create Product"
        )}
      </button>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4 sm:gap-6">
        <SectionTitle title="Dashboard" Buttons={<CTAButton />} />

        <div className="w-full">
          <Summaries />
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <DetailsCharts />
          <ProductsTable />
          <QuickOverview />
        </div>
      </div>
    </>
  );
}

export default Home;