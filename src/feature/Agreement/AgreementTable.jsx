import { useContext } from "react";
import AgreementContext from "../Contexts/AgreementContext";
import ColumnData from "./ColumnData";
import TableHeader from "./TableHeader";

function AgreementTable({ start, count, ...props }) {
    const [AgreementFields, dispatch] = useContext(AgreementContext);

    return AgreementFields.map(
        (field, index) =>
            field.checked && (
                <div className="flex-col">
                    <TableHeader
                        key={index}
                        name={field.name}
                        inputType={field.inputType}
                    ></TableHeader>
                    <ColumnData
                        start={start}
                        count={count}
                        fieldName={field.name}
                    ></ColumnData>
                </div>
            )
    );
}
export default AgreementTable;
