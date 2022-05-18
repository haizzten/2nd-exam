import { useContext, useEffect, useReducer } from "react";
import AgreementContext from "../Contexts/AgreementContext";
import ColumnData from "./ColumnData";
import TableHeader from "./TableHeader";
import ColumnDataContext from "../Contexts/ColumnDataContext";
import FilterContext from "../Contexts/FilterContext";
import { filter, reset } from "./ColumnDataReducer/action";

function AgreementTable({ start, count, ...props }) {
    const [AgreementFields, dispatch] = useContext(AgreementContext);
    // cái [columnData, dispatchColumnData] này thì khi nào vào trong TableHeader với ColumnData hãy gọi, gọi ở đây làm gì???
    // const [columnData, dispatchColumnData] = useContext(ColumnDataContext);
    // bruh, sai rồi bro, đem ra đây để cái useEffect không bị loop 9 lần (vì có 9 cái fields)
    const [filters, dispatchFilters] = useContext(FilterContext);
    const [columnData, dispatchColumnData] = useContext(ColumnDataContext);
    useEffect(() => {
        console.log(
            "filters has been changed its value, columnData: ",
            columnData
        );
        dispatchColumnData(filter(filters));
    }, [filters]);
    return AgreementFields.map(
        (field, index) =>
            field.checked && (
                // <FilterProvider> ưtf ???:D??? để đây không được, đem ra bao <App> lại thì lại được???
                <div className="flex-col">
                    <TableHeader
                        key={index}
                        fieldName={field.name}
                        inputType={field.inputType}
                    ></TableHeader>
                    <ColumnData
                        start={start}
                        count={count}
                        fieldName={field.name}
                    ></ColumnData>
                </div>
                //</FilterProvider>
            )
    );
}
export default AgreementTable;
