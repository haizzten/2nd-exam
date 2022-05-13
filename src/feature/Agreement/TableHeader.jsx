import { BiFilterAlt } from "react-icons/bi";
function TableHeader({ inputType, name, ...props }) {
    return (
        <div className="flex flex-col text-label border-r border-slate-900 bg-agreement-table-header w-min p-3">
            <div className="header-name font-semibold text-lg">{name}</div>
            <div className="flex">
                <input type={`${inputType}`} className="w-40" />
                <BiFilterAlt></BiFilterAlt>
            </div>
        </div>
    );
}
export default TableHeader;
