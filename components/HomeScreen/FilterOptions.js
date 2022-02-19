import React, { useState } from "react";

import SwitchSelector from "./SwitchSelector";

const FilterOptions = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const options = [
    { label: "Hot", value: 0 },
    { label: "Featured", value: 1 },
    { label: "Close", value: 2 },
  ];
  return (
    <SwitchSelector
      options={options}
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
    />
  );
};

export default FilterOptions;
