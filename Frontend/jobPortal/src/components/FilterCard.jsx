import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hydrabad", "Pune", "Mumbai"],
  },

  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  },

  {
    filterType: "Salary",
    array: ["0-40k", "42k-1lakh", "1lakh-5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg mt-3">{data.filterType}</h1>

            {data.array.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 my-2">
                <RadioGroupItem value={item} id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
