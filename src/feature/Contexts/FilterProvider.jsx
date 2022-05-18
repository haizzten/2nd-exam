import { useReducer } from "react";
import filterReducer, { initVal } from "../Agreement/FilterReducer/reducer";
import FilterContext from "./FilterContext";

function FilterProvider({ children }) {
    const [filters, dispatchFilters] = useReducer(filterReducer, initVal);
    console.log("filters from filterProvider", filters);
    return (
        <FilterContext.Provider value={[filters, dispatchFilters]}>
            {children}
        </FilterContext.Provider>
    );
}
export default FilterProvider;
