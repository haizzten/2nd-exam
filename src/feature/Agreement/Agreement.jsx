import { useContext, useState } from "react";
import AgreementContext from "../Contexts/AgreementContext";
import FieldsList from "./FieldsList";
import ColumnData from "./ColumnData";
import TableHeader from "./TableHeader";

function Agreements({ ...props }) {
    const [start, setStart] = useState(0);
    const [count, setCount] = useState(10);
    const [AgreementFields, dispatch] = useContext(AgreementContext);
    // console.log("LOG at agreement", AgreementFields);

    return (
        <div className={`flex p-8 bg-back-page min-h-screen`}>
            <div className="w-5/6 flex-col h-min rounded-t-md">
                <div className="flex overflow-x-auto ">
                    {AgreementFields.map((field, index) => {
                        // console.log("field", field);
                        return (
                            <>
                                {field.checked && (
                                    <div className="flex-col">
                                        <TableHeader
                                            key={index}
                                            name={field.name}
                                            inputType={field.inputType}
                                        ></TableHeader>
                                        <div className="flex">
                                            <ColumnData
                                                start={start}
                                                count={count}
                                                fieldName={field.name}
                                            ></ColumnData>
                                        </div>
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="w-1/6 flex">
                <FieldsList></FieldsList>
            </div>
            <div className="paging flex"></div>
        </div>
    );
}
export default Agreements;
