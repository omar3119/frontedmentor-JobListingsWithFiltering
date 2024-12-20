import { useContext } from "react";
import Card from "./components/Card";
import BtnFilter from "./components/BtnFilter";
import { FilterCard } from "./Context";

import "./App.css";

function App() {
  const context = useContext(FilterCard);

  const removeItemFilter = (filterToRemove) => {
    const updatedFilters = context.filter.filter(
      (filter) => filter !== filterToRemove
    );
    context.setFilter(updatedFilters);
  };

  const clearFilter = () => context.setFilter([]);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <figure className="w-full bg-[#5BA4A4]">
        <img src="images/bg-header-mobile.svg" alt="bg-header-mobile" className="w-full tablet:hidden" />
        <img src="images/bg-header-desktop.svg" alt="bg-header-desktop" className="w-full hidden tablet:inline" />
      </figure>
      <div
        className={`w-[90%] max-w-[1136px] bg-white  relative top-[-10px] rounded-lg p-5 flex justify-between ${
          context.filter.length === 0 ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-wrap gap-4 ">
          {context.filter.map((nameFilter, index) => (
            <BtnFilter
              key={index}
              name={nameFilter}
              indexId={index}
              removeItem={() => removeItemFilter(nameFilter)}
            />
          ))}
        </div>

        <p
          className="text-[#5BA4A4] font-semibold inline-block hover:underline cursor-pointer"
          onClick={clearFilter}
        >
          <span>Clear</span>
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center gap-12 my-10 max-w-[1136px] laptop:gap-8 p-8 last:mb-10">
        {context.filterCard.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
