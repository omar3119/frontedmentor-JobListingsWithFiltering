import React from "react";
import { useContext } from "react";

import BtnCardFilter from "../BtnCardFilter";
import { FilterCard } from "../../Context";

function Card(data) {
  const context = useContext(FilterCard);

  function filterCards(e) {
    const filterToAdd = e.target.textContent;
    if (!context.filter.includes(filterToAdd)) {
      const updatedFilters = [...context.filter, filterToAdd];
      context.setFilter(updatedFilters);
    }
  }
  return (
    <div
      className={`w-[90%] desktop:w-full bg-white p-6 rounded-md relative shadow-lg laptop:flex laptop:justify-between laptop:items-center ${
        data.data.featured ? "border-l-[6px] border-[#5BA4A4]" : ""
      }`}
    >
      <div className="flex laptop:flex laptop:items-center laptop:gap-6">
        <figure className="w-12 absolute top-[-25px] laptop:w-[88px] laptop:static">
          <img src={`${data.data.logo}`} alt="HOLA" />
        </figure>
        <div>
          <div className="flex items-center gap-3 pb-[14px]">
            <h1 className="text-[#5BA4A4] text-[15px] font-bold laptop:text-[18px] ">
              {data.data.company}
            </h1>
            <p className="flex gap-2 text-[15px] font-medium text-white">
              {data.data.new ? (
                <span className="bg-[#5BA4A4] px-2 py-1 rounded-full ">
                  NEW!
                </span>
              ) : (
                ""
              )}
              {data.data.featured ? (
                <span className="bg-[#2C3A3A] px-2 py-1 rounded-full">
                  FEACTURE
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          <h2 className="text-black text-[16px] font-semibold cursor-pointer hover:text-[#5BA4A4] laptop:text-[20px] laptop:font-bold">
            {data.data.position}
          </h2>
          <div className="pt-4 pb-9">
            <p className="flex  gap-2 text-[#7B8E8E] text-[16px] laptop:font-medium laptop:gap-4">
              <span>{data.data.postedAt}</span>
              <span>•</span>
              <span>{data.data.contract}</span>
              <span>•</span>
              <span>{data.data.location}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <BtnCardFilter name={data.data.role} filter={filterCards} />
        <BtnCardFilter name={data.data.level} filter={filterCards} />

        {data.data.languages.map((len, index) => (
          <BtnCardFilter key={index} name={len} filter={filterCards} />
        ))}
        {data.data.tools.map((tool, index) => (
          <BtnCardFilter key={index} name={tool} filter={filterCards} />
        ))}
      </div>
    </div>
  );
}

export default Card;
