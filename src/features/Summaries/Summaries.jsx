import { generateSummaries } from "../../utils/home";
import SummaryCard from "./components/SummaryCard";

function Summaries() {
  const summaries = generateSummaries({
    productsLength: 4,
    usersLength: 12,
    ticketsLength: 80,
    adminsLength: 3,
  });

  return (
    <section className="w-full">
      <div
        className="
        mt-6 sm:mt-8
        grid
        gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4

        w-full
        max-w-[1600px]
        mx-auto
      "
      >
        {summaries.map((summary) => (
          <SummaryCard key={summary.id} {...summary} />
        ))}
      </div>
    </section>
  );
}

export default Summaries;