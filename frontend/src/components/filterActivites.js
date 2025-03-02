import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Search } from "lucide-react";
const FilterSidebar = ({ setFilteredData, activitiesData }) => {
  const locations = [
    { name: "egypt", id: 1 },
    { name: "germany", id: 2 },
    { name: "usa", id: 3 },
    { name: "uk", id: 4 },
    { name: "uae", id: 5 },
    { name: "online", id: 6 },
    { name: "afghanistan", id: 7 },
    { name: "albania", id: 8 },
    { name: "algeria", id: 9 },
    { name: "andorra", id: 10 },
    { name: "angola", id: 11 },
    { name: "antigua and barbuda", id: 12 },
    { name: "argentina", id: 13 },
    { name: "armenia", id: 14 },
    { name: "australia", id: 15 },
    { name: "austria", id: 16 },
    { name: "azerbaijan", id: 17 },
    { name: "bahamas", id: 18 },
    { name: "bahrain", id: 19 },
    { name: "bangladesh", id: 20 },
    { name: "barbados", id: 21 },
    { name: "belarus", id: 22 },
    { name: "belgium", id: 23 },
    { name: "belize", id: 24 },
    { name: "benin", id: 25 },
    { name: "bhutan", id: 26 },
    { name: "bolivia", id: 27 },
    { name: "bosnia and herzegovina", id: 28 },
    { name: "botswana", id: 29 },
    { name: "brazil", id: 30 },
    { name: "brunei", id: 31 },
    { name: "bulgaria", id: 32 },
    { name: "burkina faso", id: 33 },
    { name: "burundi", id: 34 },
    { name: "cabo verde", id: 35 },
    { name: "cambodia", id: 36 },
    { name: "cameroon", id: 37 },
    { name: "canada", id: 38 },
    { name: "central african republic", id: 39 },
    { name: "chad", id: 40 },
    { name: "chile", id: 41 },
    { name: "china", id: 42 },
    { name: "colombia", id: 43 },
    { name: "comoros", id: 44 },
    { name: "congo", id: 45 },
    { name: "costa rica", id: 46 },
    { name: "croatia", id: 47 },
    { name: "cuba", id: 48 },
    { name: "cyprus", id: 49 },
    { name: "czech republic", id: 50 },
    { name: "democratic republic of the congo", id: 51 },
    { name: "denmark", id: 52 },
    { name: "djibouti", id: 53 },
    { name: "dominica", id: 54 },
    { name: "dominican republic", id: 55 },
    { name: "east timor", id: 56 },
    { name: "ecuador", id: 57 },
    // { name: "egypt", id: 58 },
    { name: "el salvador", id: 59 },
    { name: "equatorial guinea", id: 60 },
    { name: "eritrea", id: 61 },
    { name: "estonia", id: 62 },
    { name: "eswatini", id: 63 },
    { name: "ethiopia", id: 64 },
    { name: "fiji", id: 65 },
    { name: "finland", id: 66 },
    { name: "france", id: 67 },
    { name: "gabon", id: 68 },
    { name: "gambia", id: 69 },
    { name: "georgia", id: 70 },
    { name: "germany", id: 71 },
    { name: "ghana", id: 72 },
    { name: "greece", id: 73 },
    { name: "grenada", id: 74 },
    { name: "guatemala", id: 75 },
    { name: "guinea", id: 76 },
    { name: "guinea-bissau", id: 77 },
    { name: "guyana", id: 78 },
    { name: "haiti", id: 79 },
    { name: "honduras", id: 80 },
    { name: "hungary", id: 81 },
    { name: "iceland", id: 82 },
    { name: "india", id: 83 },
    { name: "indonesia", id: 84 },
    { name: "iran", id: 85 },
    { name: "iraq", id: 86 },
    { name: "ireland", id: 87 },
    { name: "israel", id: 88 },
    { name: "italy", id: 89 },
    { name: "jamaica", id: 90 },
    { name: "japan", id: 91 },
    { name: "jordan", id: 92 },
    { name: "kazakhstan", id: 93 },
    { name: "kenya", id: 94 },
    { name: "kiribati", id: 95 },
    { name: "kosovo", id: 96 },
    { name: "kuwait", id: 97 },
    { name: "kyrgyzstan", id: 98 },
    { name: "laos", id: 99 },
    { name: "latvia", id: 100 },
    { name: "lebanon", id: 101 },
    { name: "lesotho", id: 102 },
    { name: "liberia", id: 103 },
    { name: "libya", id: 104 },
    { name: "liechtenstein", id: 105 },
    { name: "lithuania", id: 106 },
    { name: "luxembourg", id: 107 },
    { name: "madagascar", id: 108 },
    { name: "malawi", id: 109 },
    { name: "malaysia", id: 110 },
    { name: "maldives", id: 111 },
    { name: "mali", id: 112 },
    { name: "malta", id: 113 },
    { name: "marshall islands", id: 114 },
    { name: "mauritania", id: 115 },
    { name: "mauritius", id: 116 },
    { name: "mexico", id: 117 },
    { name: "micronesia", id: 118 },
    { name: "moldova", id: 119 },
    { name: "monaco", id: 120 },
    { name: "mongolia", id: 121 },
    { name: "montenegro", id: 122 },
    { name: "morocco", id: 123 },
    { name: "mozambique", id: 124 },
    { name: "myanmar", id: 125 },
    { name: "namibia", id: 126 },
    { name: "nauru", id: 127 },
    { name: "nepal", id: 128 },
    { name: "netherlands", id: 129 },
    { name: "new zealand", id: 130 },
    { name: "nicaragua", id: 131 },
    { name: "niger", id: 132 },
    { name: "nigeria", id: 133 },
    { name: "north korea", id: 134 },
    { name: "north macedonia", id: 135 },
    { name: "norway", id: 136 },
    { name: "oman", id: 137 },
    { name: "pakistan", id: 138 },
    { name: "palau", id: 139 },
    { name: "panama", id: 140 },
    { name: "papua new guinea", id: 141 },
    { name: "paraguay", id: 142 },
    { name: "peru", id: 143 },
    { name: "philippines", id: 144 },
    { name: "poland", id: 145 },
    { name: "portugal", id: 146 },
    { name: "qatar", id: 147 },
    { name: "romania", id: 148 },
    { name: "russia", id: 149 },
    { name: "rwanda", id: 150 },
    { name: "saint kitts and nevis", id: 151 },
    { name: "saint lucia", id: 152 },
    { name: "saint vincent and the grenadines", id: 153 },
    { name: "samoa", id: 154 },
    { name: "san marino", id: 155 },
    { name: "sao tome and principe", id: 156 },
    { name: "saudi arabia", id: 157 },
    { name: "senegal", id: 158 },
    { name: "serbia", id: 159 },
    { name: "seychelles", id: 160 },
    { name: "sierra leone", id: 161 },
    { name: "singapore", id: 162 },
    { name: "slovakia", id: 163 },
    { name: "slovenia", id: 164 },
    { name: "solomon islands", id: 165 },
    { name: "somalia", id: 166 },
    { name: "south africa", id: 167 },
    { name: "south korea", id: 168 },
    { name: "south sudan", id: 169 },
    { name: "spain", id: 170 },
    { name: "sri lanka", id: 171 },
    { name: "sudan", id: 172 },
    { name: "suriname", id: 173 },
    { name: "sweden", id: 174 },
    { name: "switzerland", id: 175 },
    { name: "syria", id: 176 },
    { name: "taiwan", id: 177 },
    { name: "tajikistan", id: 178 },
    { name: "tanzania", id: 179 },
    { name: "thailand", id: 180 },
    { name: "togo", id: 181 },
    { name: "tonga", id: 182 },
    { name: "trinidad and tobago", id: 183 },
    { name: "tunisia", id: 184 },
    { name: "turkmenistan", id: 185 },
    { name: "turkey", id: 186 },
    { name: "tuvalu", id: 187 },
    { name: "uganda", id: 188 },
    { name: "ukraine", id: 189 },
    { name: "united arab emirates", id: 190 },
    { name: "united kingdom", id: 191 },
    { name: "united states", id: 192 },
    { name: "uruguay", id: 193 },
    { name: "uzbekistan", id: 194 },
    { name: "vanuatu", id: 195 },
    { name: "vatican city", id: 196 },
    { name: "venezuela", id: 197 },
    { name: "vietnam", id: 198 },
    { name: "yemen", id: 199 },
    { name: "zambia", id: 200 },
    { name: "zimbabwe", id: 201 }
];

  const [startDate, setStartDate] = useState(new Date());
  const [text, setText] = useState("");
  const [searchItem, setSearchItem] = useState('')
  const [filteredLocations, setFilteredLocations] = useState(locations)

  const [selectedEventType, setSelectedEventType] = useState({
    Event: false,
    Workshop: false,
    Course: false,
  });
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [price, setPrice] = useState({
    Free: false,
    Paid: false,
  });
  const [days, setDays] = useState(0);
  // Helper function to normalize date string
  const normalizeDate = (dateString) => {
    try {
      // Handle date string that might be missing zero-padding
      const [year, month, day] = dateString.split("-");
      const normalizedMonth = month.padStart(2, "0");
      const normalizedDay = day.padStart(2, "0");
      return `${year}-${normalizedMonth}-${normalizedDay}`;
    } catch (error) {
      console.error("Error normalizing date:", error);
      return dateString;
    }
  };
  const applyFilters = () => {
    let filtered = [...activitiesData];
    // Date filtering
    filtered = filtered.filter((activity) => {
      try {
        // Normalize the activity date
        const normalizedActivityDate = normalizeDate(activity.date);
        const activityDate = new Date(normalizedActivityDate);
        // For single day selection
        const selectedDateStr = startDate.toISOString().split("T")[0];
        const activityDateStr = activityDate.toISOString().split("T")[0];
        return activityDateStr === selectedDateStr;
      } catch (error) {
        console.error("Error comparing dates:", error);
        return false;
      }
    });
    // Activity Type filtering
    const activeEventTypes = Object.entries(selectedEventType)
      .filter(([_, isSelected]) => isSelected)
      .map(([type]) => type);
    if (activeEventTypes.length > 0) {
      filtered = filtered.filter((activity) =>
        activeEventTypes.includes(activity.activityType)
      );
    }
    // Location filtering
    if (selectedLocation.length > 0) {
      filtered = filtered.filter((activity) =>
        selectedLocation.some((location) =>
          activity?.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }
    // Price filtering
    if (price.Free || price.Paid) {
      filtered = filtered.filter((activity) => {
        const activityPrice = activity.price?.toLowerCase();
        if (price.Free && (activityPrice === "free" || activityPrice === "0"))
          return true;
        if (price.Paid && activityPrice !== "free" && activityPrice !== "0")
          return true;
        return false;
      });
    }
    setFilteredData(filtered);
  };
  const clearFilters = () => {
    setStartDate(new Date());
    setSelectedLocation([]);
    setPrice({ Free: false, Paid: false });
    setDays(0);
    setFilteredData(activitiesData);
  };
  
  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = locations.filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredLocations(filteredItems);
  }

  return (
    <div className="lg:w-[280%] lg:ml-[-140px] lg:transform-x-[-80px] bg-white border rounded-lg p-6 h-full overflow-scroll lg:overflow-hidden shadow-md relative mt-4">
        {/* <div className="bg-main rounded-full w-5 float-right cursor-pointer h-5 text-center  lg:hidden text-white ">
            X
          </div> */}
      <h2 className="text-lg font-semibold mb-6">Filter Activities</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Select Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setDays(0); // Reset days when selecting a specific date
          }}
          inline
          className="max-w-20"
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Location</label>
        <div className=" flex relative">
          <Search className="absolute left-1 top-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            type="text"
            className=" px-7 w-40 mb-2 rounded-lg "
            value={searchItem}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          {
          filteredLocations.length === 0  ? <div> no location </div> :
          filteredLocations.slice(0, 6).map((location) => (
            <label key={location.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedLocation.includes(location.name)}
                onChange={() =>
                  setSelectedLocation((prev) =>
                    prev.includes(location.name)
                      ? prev.filter((item) => item !== location.name)
                      : [...prev, location.name]
                  )
                }
                className="border rounded accent-main"
              />
              {location.name}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price</label>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={price.Free}
              onChange={() =>
                setPrice((prev) => ({ ...prev, Free: !prev.Free }))
              }
              className="border rounded accent-main"
            />
            Free
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={price.Paid}
              onChange={() =>
                setPrice((prev) => ({ ...prev, Paid: !prev.Paid }))
              }
              className="border rounded accent-main"
            />
            Paid
          </label>
        </div>
      </div>
      <div className=" text-center mt-4">
        <button onClick={clearFilters} className="text-sm text-main underline">
          Clear Filters
        </button>
      </div>
      <div className=" text-center mt-4">
        <button
          onClick={applyFilters}
          className="text-sm bg-main text-white w-full rounded-xl capitalize  py-2"
        >
          apply
        </button>
      </div>
    </div>
  );
};
export default FilterSidebar;
