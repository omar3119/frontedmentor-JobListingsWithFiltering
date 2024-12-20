function BtnFilter({ name, removeItem, indexId }) {
  return (
    <button
      className="bg-[#EEF6F6] text-[#5BA4A4] font-semibold rounded-lg flex justify-between items-center gap-2 pl-2"
      id={indexId}
    >
      <span className="">{name}</span>
      <figure
        className="bg-[#5BA4A4]  border h-full px-2 py-2 rounded-r-lg hover:bg-[#2C3A3A]"
        onClick={removeItem}
      >
        <img src="/images/icon-remove.svg" alt="remove" />
      </figure>
    </button>
  );
}

export default BtnFilter;
