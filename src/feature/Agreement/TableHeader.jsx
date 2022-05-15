import { BiFilterAlt } from "react-icons/bi";
import Button, { FilterButton } from "../../components/Button";
function TableHeader({ inputType, name, ...props }) {
    return (
        <div
            // id="table-header"
            className="flex flex-col text-label border-r border-slate-900 bg-agreement-table-header w-min p-3"
        >
            <div className="header-name font-semibold text-lg mb-2">{name}</div>
            <div className="flex">
                <input
                    type={`${inputType}`}
                    className="rounded w-40 px-2 grow-1"
                />
                <FilterButton>
                    <BiFilterAlt></BiFilterAlt>
                </FilterButton>
            </div>
        </div>
    );
}
export default TableHeader;
