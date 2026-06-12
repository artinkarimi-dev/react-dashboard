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
          text-white px-4 py-2 rounded-md
          hover:from-green-800 hover:to-green-400
          transition duration-300 ease-in-out
          flex items-center gap-2
          disabled:opacity-70
          cursor-pointer
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
      <SectionTitle title="Dashboard" Buttons={<CTAButton />} />

      <Summaries />

      <div>
        <DetailsCharts />
        <ProductsTable />
        <QuickOverview />
      </div>
    </>
  );
}

export default Home;
