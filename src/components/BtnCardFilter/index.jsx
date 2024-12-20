import React from "react";

function BtnCardFilter({name, filter}) {
  return <button className="bg-[#EEF6F6] text-[#5BA4A4] px-2 py-1 rounded-lg font-semibold cursor-pointer hover:bg-[#5BA4A4] hover:text-[#EEF6F6]" onClick={filter}>{name}</button>;
}

export default BtnCardFilter;
