import { useContext, useEffect, useRef, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { SmallButton } from "../../components/Button";
import FilterContext from "../Contexts/FilterContext";
import { addFilter, removeFilter } from "./FilterReducer/action";
function TableHeader({ inputType, fieldName, ...props }) {
    const [filters, dispatchFilters] = useContext(FilterContext);
    const inputRef = useRef();

    const handleClick = (e) => {
        console.log("Handle click is triggered");

        if (inputRef.current.value) {
            console.log("log from TableHeader", inputRef.current.value);
            dispatchFilters(
                addFilter({
                    valueToFilter: inputRef.current.value,
                    fieldName,
                    inputType,
                })
            );
        } else {
            dispatchFilters(removeFilter({ fieldName }));
        }
    };
    const handleChange = (e) => {
        console.log("Handle click is triggered");

        if (e.target.value) {
            console.log("log from TableHeader", inputRef.current.value);
            dispatchFilters(
                addFilter({
                    valueToFilter: e.target.value,
                    fieldName,
                    inputType,
                })
            );
        } else {
            dispatchFilters(removeFilter({ fieldName }));
        }
    };

    return (
        <div className="flex flex-col text-label border-r border-slate-900 bg-agreement-table-header w-min p-3">
            <div className="header-name font-semibold text-lg mb-2">
                {fieldName}
            </div>
            <div className="flex">
                <input
                    onChange={handleChange}
                    ref={inputRef}
                    type={`${inputType}`}
                    className="rounded w-40 px-2 grow-1"
                />
                <SmallButton onClick={handleClick}>
                    <BiFilterAlt></BiFilterAlt>
                </SmallButton>
                {/* <SmallButton
                // onClick={dispatchDataList(order(fieldName))}
                ></SmallButton> */}
            </div>
        </div>
    );
}
export default TableHeader;
