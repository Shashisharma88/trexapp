const Range = ({ value, onChange }) => {
  return (
    <div className="">
      <input
        type="range"
        min="1"
        max="1000"
        value={value}
        onChange={onChange}
        className="w-64 bg-transparent range-slider"
        style={{
          WebkitAppearance: "none",
          background: "white",
          fontSize: "28px ",
        }}
      />
    </div>
  );
};

export default Range;
